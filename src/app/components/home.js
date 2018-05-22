import React, { Component } from "react";

import Header from "./header";
import BigMap from "./big_map";
import Card from "./card";
import Search from "./search";
import Paginate from "./paginate";
import client from "../utils";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: null,
      items: null,
      categories: null,
      amenities: null,
      error: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  onSearch(results) {
    this.setState({ items: results.allPois });
  }

  async getData() {
    try {
      let results = await Promise.all([
        client.doQuery(client.queries.site),
        client.doQuery(client.queries.list),
        client.doQuery(client.queries.categories),
        client.doQuery(client.queries.amenities)
      ]);
      console.log("RESULTS", results);

      let state = {
        site: results[0]._site,
        items: results[1].allPois,
        categories: results[2].allCategories,
        amenities: results[3].allAmenities
      };

      console.log("STATE", state);
      this.setState(state);
    } catch (error) {
      console.log("ERROR", error);
      this.setState(error);
      //throw error;
    }

    // let info = await client.doQuery(client.queries.site);
    // console.log("SITE", info);
    //   let cats = await client.doQuery(client.queries.categories);
    // console.log("categories", cats);
    // let results = await client.doQuery(client.queries.list);
    // console.log("SITE", info);
    // this.setState({ site: info._site, items: results.allRestaurants , categories:cats});
    // return;
  }

  render() {
    let { site, items, categories, amenities, error } = this.state;
    let y = new Date().getUTCFullYear();
    let len = items && items.length ? items.length : 0;
    let siteName = "";
    if (site && site.globalSeo && site.globalSeo.siteName)
      siteName = site.globalSeo.siteName;

    return (
      <div id="wrapper">
        <Header />

        {error && <div className="danger danger-text">{error}</div>}

        <div className="clearfix" />
        <div className="fs-container">
          <div className="fs-inner-container content">
            <div className="fs-content">
              <Search categories={categories} amenities={amenities} onSearch={this.onSearch.bind(this)}/>

              <section className="listings-container margin-top-30">
                <div className="row fs-switcher">
                  <div className="col-md-6">
                    <p className="showing-results">({len}) Results Found </p>
                  </div>
                </div>
                <div className="row fs-listings">
                  {items &&
                    items.map((item, index) => (
                      <Card item={item} index={index} key={item.id} />
                    ))}
                </div>
                <div className="row fs-listings">
                  <div className="col-md-12">
                    <div className="clearfix" />
                    <Paginate />
                    <div className="clearfix" />
                    <div className="copyrights margin-top-0">
                      © {y} {siteName}. All Rights Reserved.
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <BigMap items={items} />
        </div>
      </div>
    );
  }
}
