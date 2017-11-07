import React from "react";
import FontAwesome from "react-fontawesome";
import "./Footer.css"
class Footer extends React.Component {
  render() {
    console.log(this.props);
    return (

      <div>
        <footer className="footer text-default py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h5 className="text-center">
                  <i className=""></i>
                </h5>
                <div className="row">
                  <div className="col-md-4 offset-md-4">
                    <div className="col-xs-6">
                      <ul className="list-unstyled justify-content-center">

                        <li className="text-center">
                          <a href="">bio</a>
                        </li>
                        <li className="text-center">
                          <a href="">Support</a>
                        </li>
                        <li className="text-center">
                          <a href="">for more info</a>
                        </li>
                        <li className="text-center">
                          <a href="">About</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row d-flex ">
                  <div className="col-md-12 ">
                    <ul className="nav nav-inline justify-content-center ">
                      {this.props.social.map((item, index) => {
                        return (
                          <li className="nav-item mx-3">
                            <a href={item.url} key={item.iconName + index}>
                              <FontAwesome name={item.iconName}/>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                    <a className="copyright" href="">
                      <i className="fa fa-copyright 2017 fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
export default Footer;
