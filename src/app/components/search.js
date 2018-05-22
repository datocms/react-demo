import React, { Component } from "react";
import client from "../utils";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: 0,
      search_text: null,
      checked_categories: [],
      checked_amenities: []
    };
  }

  toggleDropdown(val) {
    if (this.state.dropdown == val) {
      val = 0;
    }
    this.setState({ dropdown: val });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { checked_categories, checked_amenities, search_text } = this.state;
    this.searchData(checked_categories, checked_amenities, search_text);
  }

  async searchData(cat, amenity, text) {
    try {
      let results = await client.doQuery(
        client.queries.search(cat, amenity, text)
      );
      this.props.onSearch(results);
    } catch (error) {
      throw error;
    }


  }

  handleChange(id, type) {
    let name = "checked_" + type;
    let mySet = new Set(this.state[name]);
    if (mySet.has(id)) mySet.delete(id);
    else mySet.add(id);
    var myArr = Array.from(mySet);
    this.setState({ [name]: myArr });
  }

  handleText(e) {
    this.setState({ search_text: e.target.value });
  }

  isChecked(id, type) {
    let name = "checked_" + type;
    return this.state[name].indexOf(id) > -1;
  }

  render() {
    let { categories, amenities } = this.props;
    let { dropdown } = this.state;

    // categories = [
    //   { name: "AA", id: "0" },
    //   { name: "BB", id: "1" },
    //   { name: "CC", id: "2" }
    // ];
    // amenities = [
    //   { name: "DD", id: "3" },
    //   { name: "EE", id: "4" },
    //   { name: "FF", id: "5" }
    // ];

    return (
      <section className="search">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="row">
            <div className="col-md-12">
              <div className="row with-forms">
                <div className="col-fs-10">
                  <div className="input-with-icon">
                    <i className="sl sl-icon-magnifier" />
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                      name="search"
                      onChange={e => this.handleText(e)}
                    />
                  </div>
                </div>
                <div className="col-fs-2">
                  <button className="button" type="submit">
                    Search
                  </button>
                </div>

                <div className="col-fs-12">
                  <div
                    className={`panel-dropdown ${dropdown == 1
                      ? "active"
                      : ""}`}
                  >
                    <a href="#" onClick={() => this.toggleDropdown(1)}>
                      Categories
                    </a>
                    <div className="panel-dropdown-content checkboxes categories">
                      <div className="row">
                        <div className="col-md-6">
                          {categories &&
                            categories.map(cat => (
                              <div
                                key={"cat_" + cat.id}
                                id={"cat_" + cat.id}
                                onClick={e =>
                                  this.handleChange(cat.id, "categories")}
                              >
                                <input
                                  type="checkbox"
                                  name={`cat_${cat.id}`}
                                  checked={this.isChecked(cat.id, "categories")}
                                />
                                <label>{cat.name}</label>
                              </div>
                            ))}
                        </div>
                      </div>
                      <div className="panel-buttons">
                        <button
                          className="panel-cancel"
                          onClick={() => this.toggleDropdown(0)}
                        >
                          Cancel
                        </button>
                        <button
                          className="panel-apply"
                          onClick={() => {
                            this.toggleDropdown(0);
                          }}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`panel-dropdown wide  ${dropdown == 2
                      ? "active"
                      : ""}`}
                  >
                    <a href="#" onClick={() => this.toggleDropdown(2)}>
                      More Filters
                    </a>
                    <div className="panel-dropdown-content checkboxes">
                      <div className="row">
                        {amenities &&
                          amenities.map(f => (
                            <div
                              className="col-md-6"
                              key={"amn_" + f.id}
                              id={"amn_" + f.id}
                              onClick={e =>
                                this.handleChange(f.id, "amenities")}
                            >
                              <input
                                type="checkbox"
                                name={"amn_" + f.id}
                                checked={this.isChecked(f.id, "amenities")}
                              />
                              <label>{f.name}</label>
                            </div>
                          ))}
                      </div>
                      <div className="panel-buttons">
                        <button
                          className="panel-cancel"
                          onClick={() => this.toggleDropdown(0)}
                        >
                          Cancel
                        </button>
                        <button
                          className="panel-apply"
                          onClick={e => {
                            e.preventDefault();
                            this.toggleDropdown(0);
                          }}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
