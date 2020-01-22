import React, { Component } from "react";

export default class ReviewAdd extends Component {
    render() {
        return (
            <div id="add-review" className="add-review-box">
                <h3 className="listing-desc-headline margin-bottom-20">
                    Add Review
                </h3>

                <span className="leave-rating-title">
                    Your rating for this listing
                </span>

                <div className="row">
                    <div className="col-md-6">
                        <div className="clearfix" />
                        <div className="leave-rating margin-bottom-30">
                            <input type="radio" name="rating" id="rating-1" />
                            <label htmlFor="rating-1" className="fa fa-star" />
                            <input type="radio" name="rating" id="rating-2" />
                            <label htmlFor="rating-2" className="fa fa-star" />
                            <input type="radio" name="rating" id="rating-3" />
                            <label htmlFor="rating-3" className="fa fa-star" />
                            <input type="radio" name="rating" id="rating-4" />
                            <label htmlFor="rating-4" className="fa fa-star" />
                            <input type="radio" name="rating" id="rating-5" />
                            <label htmlFor="rating-5" className="fa fa-star" />
                        </div>
                        <div className="clearfix" />
                    </div>

                    <div className="col-md-6">
                        <div className="add-review-photos margin-bottom-30">
                            <div className="photoUpload">
                                <span>
                                    <i className="sl sl-icon-arrow-up-circle" />
                                    Upload Photos
                                </span>
                                <input type="file" className="upload" />
                            </div>
                        </div>
                    </div>
                </div>

                <form
                    id="add-comment"
                    className="add-comment"
                    onSubmit={e => {
                        e.preventDefault();
                        return;
                    }}
                >
                    <fieldset>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Name:</label>
                                <input type="text" value="" />
                            </div>

                            <div className="col-md-6">
                                <label>Email:</label>
                                <input type="text" value="" />
                            </div>
                        </div>

                        <div>
                            <label>Review:</label>
                            <textarea cols="40" rows="3" />
                        </div>
                    </fieldset>

                    <button
                        onClick={e => {
                            e.preventDefault();
                            return;
                        }}
                        className="button"
                    >
                        Submit Review
                    </button>
                    <div className="clearfix" />
                </form>
            </div>
        );
    }
}
