import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    let { categories, amenities } = this.props;
    let checked_categories = categories.map(i => i.id);
    let checked_amenities = amenities.map(i => i.id);

    this.state = {
      dropdown: 0,
      search_text: null,
      checked_categories,
      checked_amenities
    };
  }

  toggleDropdown(val) {
    if (this.state.dropdown === val) {
      val = 0;
    }
    this.setState({ dropdown: val });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { checked_categories, checked_amenities, search_text } = this.state;

    this.props.onSearch({
      categories: checked_categories,
      amenities: checked_amenities,
      pattern: search_text ? search_text : ""
    });
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
                  <button type="submit" className="button">
                    Search
                  </button>
                </div>

                <div className="col-fs-12">
                  <div
                    className={`panel-dropdown ${
                      dropdown === 1 ? "active" : ""
                    }`}
                  >
                    <button onClick={() => this.toggleDropdown(1)}>
                      Categories
                    </button>
                    <div className="panel-dropdown-content checkboxes categories">
                      <div className="row">
                        <div className="col-md-6">
                          {categories &&
                            categories.map(cat => (
                              <div
                                key={"cat_" + cat.id}
                                id={"cat_" + cat.id}
                                onClick={e =>
                                  this.handleChange(cat.id, "categories")
                                }
                              >
                                <input
                                  type="checkbox"
                                  name={`cat_${cat.id}`}
                                  checked={this.isChecked(cat.id, "categories")}
                                  readOnly
                                  onChange={() => {
                                    return;
                                  }}
                                />
                                <label>{cat.name}</label>
                              </div>
                            ))}
                        </div>
                      </div>
                      <div className="panel-buttons">
                        <button
                          className="panel-cancel"
                          onClick={e => {
                            e.preventDefault();
                            this.toggleDropdown(0);
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="panel-apply"
                          onClick={e => {
                            this.toggleDropdown(0);
                          }}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`panel-dropdown wide  ${
                      dropdown === 2 ? "active" : ""
                    }`}
                  >
                    <button onClick={() => this.toggleDropdown(2)}>
                      More Filters
                    </button>
                    <div className="panel-dropdown-content checkboxes">
                      <div className="row">
                        {amenities &&
                          amenities.map(f => (
                            <div
                              className="col-md-6"
                              key={"amn_" + f.id}
                              id={"amn_" + f.id}
                              onClick={e =>
                                this.handleChange(f.id, "amenities")
                              }
                            >
                              <input
                                type="checkbox"
                                name={"amn_" + f.id}
                                checked={this.isChecked(f.id, "amenities")}
                                onChange={() => {
                                  return;
                                }}
                              />
                              <label>{f.name}</label>
                            </div>
                          ))}
                      </div>
                      <div className="panel-buttons">
                        <button
                          className="panel-cancel"
                          onClick={e => {
                            e.preventDefault();
                            this.toggleDropdown(0);
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="panel-apply"
                          onClick={e => {
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
