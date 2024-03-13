import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4 text-danger">Hilarous non-main characters</h1>
            <p className="lead">Surely you've seen the surreal adventures of Stan, Kenny, Kyle and Erick, but have you ever focused your attention on these hilarious characters?</p>
            <hr className="my-4" />
                <p>Or if... you've never seen South Park</p>
                <a className="btn btn-primary btn-lg btn btn-danger" href="https://www.southpark.lat/seasons/south-park" role="button">Let's watch it</a>
        </div>
    );
};

export default Jumbotron;