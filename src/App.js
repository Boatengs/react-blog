import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Navbar from "./components/Navbar";

let articleData = [
  {
    name: " Boa",
    title: "Trying to get Ef to understand me",
    date: "November 3,2017",
    text: "sdflifdsfdfhn;ergergenfgve;rgrgergihefg;erghr5gerngef;vnfvnefrgefrglfgdfghdfgh"
  }, {
    name: "Sampson ",
    title: "Trying to get Em to understand me",
    date: "November 3,2017",
    text: "sdflifdsfdfhn;ergergenfgve;rgrgergihefg;erghr5gerngef;vnfvnefrgefrglfgdfghdfgh"
  }, {
    name: "Boateng",
    title: "Trying to get El to understand me",
    date: "November 3,2017",
    text: "sdflifdsfdfhn;ergergenfgve;rgrgergihefg;erghr5gerngef;vnfvnefrgefrglfgdfghdfgh"
  }
];
let navLinks = [
  {
    name: "Home",
    local: "http://www.google.com"
  }, {
    name: "Contact",
    local: "http://www.google.com"
  },
  {
    name: "About",
    local: "http://www.lyricals95inyourpresence.blogspot.com"
  }

];
let  socialLinks = [
  {
    iconName: "facebook",
    url: "https://facebook.com/"
  },
  {
    iconName: "twitter",
    url:"https://twitter.com/"
  },
  {
    iconName: "linkedin",
    url: "https://linkedin.com/"
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand="Boateng B. Sampson" links={navLinks}/>
        <Header header="Sampson Boateng's Blog" sub="lets write"/>
        <Article data={articleData}/>

        <Footer social={socialLinks}/>
      </div>
    )
  }
}

export default App;
