import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Header from "./header";
import BigMap from "./big_map";
import Card from "./card";
import Search from "./search";
import Paginate from "./paginate";
import client from "../request";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: null,
      items: null,
      categories: null,
      amenities: null,
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    this.getData();
  }

  onSearch(filters) {
    this.setState({ loading: true });
    this.searchData(filters);
  }

  async searchData(params) {
    try {
      let results = await client.doQuery(client.queries.search, params);
      console.log("RESULTS", results);
      let state = {
        loading: false
      };
      if (results.data) state = { items: results.data.allPois, loading: false };
      this.setState(state);
    } catch (error) {
      this.setState({ loading: false });
      throw error;
    }
  }

  async getData() {
    try {
      let results = await Promise.all([
        client.doQuery(client.queries.site),
        client.doQuery(client.queries.list),
        client.doQuery(client.queries.categories),
        client.doQuery(client.queries.amenities)
      ]);

      let state = {
        site: results[0].data.site,
        items: results[1].data.allPois,
        categories: results[2].data.allCategories,
        amenities: results[3].data.allAmenities,
        loading: false
      };

      this.setState(state);
    } catch (error) {
      this.setState(error, { loading: false });
      throw error;
    }
  }

  render() {
    let { site, items, categories, amenities, error, loading } = this.state;
    let len = items && items.length ? items.length : 0;
    let siteName = site ? site.globalSeo.siteName : "";
    let meta = items && items.meta ? items.meta : [];
    let favicons = site && site.favicons ? site.favicons : [];

    return (
      <div id="wrapper">
        <Helmet>
          <title>{siteName}</title>
          {meta.map((item, i) => {
            if (item.tag != "title") {
              return (
                <meta
                  key={"meta_" + i}
                  name={item.attributes.property}
                  content={item.attributes.content}
                />
              );
            }
          })}
          {favicons.map((item, i) => {
            <link
              key={"fav_" + i}
              rel={item.attributes.rel}
              type={item.attributes.type}
              href={item.attributes.href}
            />;
          })}
        </Helmet>

        <Header />

        <div className="clearfix" />
        <div className="fs-container">
          <div className="fs-inner-container content">
            <div className="fs-content">
              {error && <div className="danger danger-text">{error}</div>}
              {categories &&
                amenities && (
                  <Search
                    categories={categories}
                    amenities={amenities}
                    onSearch={this.onSearch.bind(this)}
                  />
                )}

              <section className="listings-container margin-top-30">
                <div className="row fs-switcher">
                  <div className="col-md-6">
                    <div className="showing-results">
                      {loading && <h4>Loading...</h4>}
                    </div>
                    <p className="showing-results">({len}) Results Found</p>
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
                      © {new Date().getUTCFullYear()} {siteName}. All Rights Reserved.
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
