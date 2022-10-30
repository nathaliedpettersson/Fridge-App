import React, { Fragment } from "react";

export default class Filter extends React.Component {

    // Getting props from App.js to show selected category/all categories
    renderCategory = (e, val) => {

        this.props.filterCategories(val);
        console.log(e);
    }

    renderAllCategories = (e) => {
        this.props.showAllCategories();
        console.log(e);
    }

    render() {

        return (
            <Fragment>
                <button onClick={(e) => this.renderAllCategories(e)} className="all-categories-btn">All</button>
                <div className="category-btns">
                    {this.props.category.map((val, index) => {
                        return (
                            <button onClick={(e) => this.renderCategory(e, val)} key={index}>{val}</button>
                        )
                    })}
                </div>
            </Fragment>
        )

    }
}