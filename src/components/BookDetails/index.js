import React, { Component } from "react";
import { Button } from "react-bootstrap";
import books from "../BooksPage/books.json";

import Navbar from "../Navbar";
import Review from "./Review";

export default class BookDetails extends Component {
  constructor(props) {
    super(props);

    const reqId = window.location.href.slice(
      window.location.href.length - 1,
      window.location.href.length
    );

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { review_list: [], value: "", item: books[reqId - 1] };

    //console.log(this.state.value);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.state.review_list.push(this.state.value);
    this.setState({ review_list: this.state.review_list });
  }

  render() {
    const reviews = this.state.review_list.map(rev => {
      return <Review data={rev} />;
    });

    return (
      <div>
        <div className="nav-bar">
          <Navbar />
        </div>
        <div className="main-content container" style={{ paddingTop: "40px" }}>
          <div className="row">
            <div className="bookimage col col-md-5">
              <img
                src="https://kbimages1-a.akamaihd.net/96634076-1c91-4fa9-9518-41c5bfa3e59f/353/569/90/False/harry-potter-and-the-sorcerer-s-stone-the-first-book-in-the-phenomenal-internationally-bestselling-harry-potter-series-by-j-k-rowling.jpg"
                alt="Book"
                style={{ height: "75%" }}
              />
            </div>
            <div className="right-container col col-md-7">
              <div className="bookname">
                <h1>{this.state.item.name}</h1>
              </div>
              <div className="authorname" style={{ marginTop: "3em" }}>
                <h2>- {this.state.item.author}</h2>
              </div>
              <center style={{ marginTop: "12em" }}>
                <Button size="lg" className="outline-dark">
                  Buy for {this.state.item.price}
                </Button>
              </center>
            </div>
          </div>
          <div className="review-add-container">
            <h2>Book Review</h2>
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>Add you review here..</label>
                <textarea
                  value={this.state.value}
                  rows="4"
                  cols="100"
                  style={{ display: "block" }}
                  onChange={this.handleChange}
                ></textarea>
                <input
                  style={{ marginLeft: "68%", marginTop: "15px" }}
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
          <div className="list-reviews">
            <ul>{reviews}</ul>
          </div>
        </div>
      </div>
    );
  }
}
