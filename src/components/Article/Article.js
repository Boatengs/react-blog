import React from "react";
import "./Article.css";

class Article extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="articles">
        {this.props.data.map((item, index) => {
          return (
            <div className="container sam" key={item.name + index}>
              <div className="row">
                <div className="col-12">
                  <h1>{item.title}</h1>
                  <img src="https://i.pinimg.com/736x/15/39/f1/1539f1e60ec8dc2285c4053a9bfb290a--switzerland-modern-cabins.jpg"/>
                  <h2>{item.name}</h2>
                  <h3>{item.date}</h3>
                  <p>{item.text}</p>

                </div>
              </div>
            </div>
          )
        })}

      </div>

    )
  }
}

export default Article;
