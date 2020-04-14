import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Header from "./header";
import BigMap from "./big_map";
import Card from "./card";
import Search from "./search";
import Paginate from "./paginate";
import client from "../request";

const RESULT_X_PAGE = 4;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: null,
      items: null,
      categories: null,
      amenities: null,
      error: null,
      loading: true,
      totalCount: 0,
      limit: RESULT_X_PAGE,
      offset: 0,
      filters: null
    };
  }

  componentDidMount() {
    this.getIndex();
  }

  async getIndex(offset = 0) {
    try {
      console.log(this.state.limit, offset);
      let results = await client.doQuery(client.queries.index, {
        limit: this.state.limit,
        offset
      });
      let state = {
        loading: false
      };
      if (results.data) console.log(results.data);
      state = {
        site: results.data.site,
        totalCount: results.data.totalCount.count,
        items: results.data.items,
        categories: results.data.categories,
        amenities: results.data.amenities,
        loading: false,
        offset
      };

      this.setState(state);
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }

  onSearch(filters) {
    this.searchData(filters);
  }

  changePage(page) {
    let { filters, limit } = this.state;
    let offset = page * limit;
    if (!filters) return this.getIndex(offset);
    this.searchData(filters, offset);
  }

  async searchData(filters, offset = 0) {
    this.setState({ loading: true, filters });
    let { limit } = this.state;
    let params = { ...filters, limit, offset };
    try {
      let results = await client.doQuery(client.queries.search, params);
      let state = {
        loading: false
      };
      if (results.data)
        state = {
          totalCount: results.data.totalCount.count,
          items: results.data.items,
          loading: false,
          offset
        };
      this.setState(state);
    } catch (error) {
      this.setState({ loading: false });
      throw error;
    }
  }

  render() {
    let {
      site,
      items,
      categories,
      amenities,
      error,
      loading,
      totalCount,
      limit,
      offset
    } = this.state;
    let len = items && items.length ? items.length : 0;
    let siteName = site ? site.globalSeo.siteName : "";
    let meta = items && items.meta ? items.meta : [];
    let favicons = site && site.favicons ? site.favicons : [];

    return (
      <div id="wrapper">
        <Helmet>
          <title>{siteName}</title>
          {meta.map((item, i) => {
            if (item.tag !== "title") {
              return (
                <meta
                  key={"meta_" + i}
                  name={item.attributes.property}
                  content={item.attributes.content}
                />
              );
            }
            return null;
          })}
          {favicons.map((item, i) => {
            return (
              <link
                key={"fav_" + i}
                rel={item.attributes.rel}
                type={item.attributes.type}
                href={item.attributes.href}
              />
            );
          })}
        </Helmet>

        <Header />

        <div className="clearfix" />
        <div className="fs-container">
          <div className="fs-inner-container content">
            <div className="fs-content">
              {error && <div className="danger danger-text">{error}</div>}
              {categories && amenities && (
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
                    <Paginate
                      total={totalCount}
                      limit={limit}
                      offset={offset}
                      changePage={this.changePage.bind(this)}
                    />
                    <div className="clearfix" />
                    <div className="copyrights margin-top-0">
                      © {new Date().getUTCFullYear()} {siteName}. All Rights
                      Reserved.
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
