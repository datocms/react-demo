import React, { Component } from "react";
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    let { items } = this.props;
    let allCats = items.map(i => i.category.name);
    let cats = Array.from(new Set(allCats));
    let { visible } = this.state;
    return (
      <div id="listing-pricing-list" className="listing-section">
        <h3 className="listing-desc-headline margin-top-70 margin-bottom-30">
          Pricing
        </h3>

        <div className={`show-more ${visible ? "visible" : ""}`}>
          <div className="pricing-list-container">
            {cats.map((cat, i) => {
              let elems = items.filter(item => item.category.name === cat);
              return (
                <div key={`cat-${i}`}>
                  <h4>{cat}</h4>
                  <ul>
                    {elems.map((elem, index) => (
                      <li key={`cat-item-${index}`}>
                        <h5>{elem.name}</h5> <p>{elem.description}</p>
                        <span>${elem.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            this.setState({ visible: !visible });
          }}
          className="show-more-button"
        >
          {visible ? "Show Less" : "Show More"}
          <i className={`fa fa-angle-${visible ? "up" : "down"}`} />
        </button>
      </div>
    );
  }
}
