import React from "react";

class Paginate extends React.Component {
  handleClick(index) {
    this.props.changePage(index);
  }

  render() {
    let { total, limit, offset } = this.props;
    let num_pages = Math.ceil(total / limit);
    let pages = "page|".repeat(num_pages);
    let currentPage = offset ? Math.ceil(offset / limit) : 0;
    if (num_pages <= 1) return null;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="pagination-container margin-top-15 margin-bottom-40">
            <nav className="pagination">
              <ul>
                {pages.split("|").map((p, i) => {
                  let isCurrent = currentPage === i;
                  return (
                    <li key={i}>
                      <button
                        className={isCurrent ? "current-page" : ""}
                        href="#"
                        onClick={() =>
                          p && !isCurrent ? this.handleClick(i) : {}
                        }
                      >
                        {p && `${i + 1}`}
                        {!p && <i className="sl sl-icon-arrow-right" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Paginate;
