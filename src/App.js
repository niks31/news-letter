import React, { Component } from "react";
import "./App.css";
import data from "./input.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * func to format the text according to requirement of module 2
   * Scope: In future, if more operation types are to be introduced, the developer can simply
   * add case and format for the same.
   * @param {string} text, is the text on which operation is required
   * @param {string} type, is the type of operation which needs to be taken on string
   * @returns {string} formatted text with HTML wrapped tags
   */
  returnDecoratedText = (text, type) => {
    switch (type) {
      case "Entity":
        return `<Strong>${text}</Strong> `;
      case "Link":
        return `<a href="${text}">${text}</a> `;
      case "Twitter username":
        return `<a href="http://twitter.com/${text}">${text}</a> `;
      default:
        return text;
    }
  };

  /**
   * func to create complete string with required HTML tags
   * returns string to be set in browser
   */
  renderNewsLetter = () => {
    let output = "";
    const crawledDataArray = data.module1.split("");
    let prevClosingTag = -1;
    crawledDataArray.map((character, key) => {
      const index = data.module2[key];
      if (!index) {
        if (key > prevClosingTag) {
          output += character;
        }
      } else {
        prevClosingTag = index[0];
        output += this.returnDecoratedText(
          data.module1.substring(key, index[0]),
          index[1]
        );
      }
    });
    return output;
  };

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.renderNewsLetter() }} />
      </div>
    );
  }
}

export default App;
