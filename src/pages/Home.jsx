import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { popular } from "../data/Courses";

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="container">
          <form className="hero-form">
            <h1>Join 2.73M Learners today!</h1>
            <hr />
            <div className="row mb-3">
              <div className="col-6">
                <label className="form-label" htmlFor="fname">
                  First Name:
                </label>
                <input type="text" id="fname" className="form-control" />
              </div>
              <div className="col-6">
                <label className="form-label" htmlFor="fname">
                  Last Name:
                </label>
                <input type="text" id="fname" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Create password:
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Confirm password:
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-warning">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="container popular py-5">
        <h1 className="mb-5">Popular:</h1>
        <div className="row d-flex justify-content-center">
          {popular.map((el, idx) => (
            <div className="col-lg-3 col-sm-8 col-12">
              <Card
                key={idx}
                name={el.name}
                img={el.img}
                desc={el.desc}
                price={el.price}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link to="/courses" className="btn btn-warning">
            View all Courses &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
