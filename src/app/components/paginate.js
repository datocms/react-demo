import React from "react";

const Paginate = () => (
  <div className="row">
    <div className="col-md-12">
      <div className="pagination-container margin-top-15 margin-bottom-40">
        <nav className="pagination">
          <ul>
            <li>
              <a href="#" className="current-page">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">
                <i className="sl sl-icon-arrow-right" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default Paginate;
