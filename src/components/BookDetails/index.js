import React, { Component } from "react";
import { Button } from "react-bootstrap";
import books from "../BooksPage/books.json";

import axios from "axios";

import Navbar from "../Navbar";
import Review from "./Review";

import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

export default class BookDetails extends Component {
  constructor(props) {
    super(props);

    const reqId = window.location.href.slice(
      window.location.href.length - 1,
      window.location.href.length
    );

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeBuy = this.handleChangeBuy.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);

    this.state = {
      review_list: [],
      value: "",
      value2: "",
      item: books[reqId - 1],
      rating: 0
    };

    //console.log(this.state.value);
  }

  handleRatingChange() {
    this.setState({ rating: this.state.rating });

    console.log(this.state.rating);

    axios.get(`http://localhost:5000/rate/${this.reqId}/${this.state.rating}`);
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

  handleChangeBuy(event) {
    this.setState({ value2: event.target.value });
    //console.log(this.state.value2);
  }

  handleSubmitBuy(event) {
    event.preventDefault();

    axios.get(
      `http://localhost:5000/addbook/${this.reqId}/${this.state.value2}`
    );
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
                <form onSubmit={this.handleOnBuy}>
                  <label style={{ paddingRight: "5px" }}>
                    Enter your private key :
                  </label>
                  <input
                    type="text"
                    placeholder="enter your key"
                    value2={this.state.value2}
                    onChange={this.handleChangeBuy}
                  ></input>

                  <Button type="Submit" size="lg" className="outline-dark">
                    Buy for {this.state.item.price}
                  </Button>
                </form>
              </center>
            </div>
          </div>
          <div className="review-add-container">
            <h2>Book Review</h2>
            <div>
              <h4>Provide star rating</h4>
              <Rater
                total={10}
                name="rating"
                rating={this.state.rating}
                interactive={true}
                value={this.state.rating}
                onChange={this.handleRatingChange}
              ></Rater>
            </div>
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
