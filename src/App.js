import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>進撃のバゲット</h2>
        </div>
        <p className="App-intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget neque ac odio vestibulum fringilla. Suspendisse porttitor, arcu at semper lobortis, sapien lacus imperdiet urna, id finibus magna dui at odio. Etiam a elit ultricies, egestas erat vestibulum, imperdiet diam. Vestibulum at eros quis nulla pulvinar pretium vel vel sapien. Morbi varius est lacus, in aliquet sem fringilla nec. Aenean blandit commodo mauris, eu mollis augue placerat ac. Quisque nec leo consequat, luctus lorem mattis, commodo risus.

Quisque porta eget mauris nec scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim ultricies tellus, non pharetra lorem posuere eu. Nullam sollicitudin elementum nibh. Donec eu odio nisi. Vestibulum hendrerit blandit massa non tincidunt. Suspendisse pellentesque tincidunt felis mollis viverra. Nulla feugiat mi vel est tincidunt, ac mattis ex tristique. Integer facilisis justo augue, eu luctus lorem congue vitae. Phasellus mauris velit, tempor ut felis et, hendrerit malesuada lacus. Fusce at suscipit ipsum. Aliquam ac diam mi.
        </p>
        <button id="run-button" type="Button">&#9658;</button>
        <div className="App-content">
          <div className="Code-area">
            <textarea className="Code-entry" placeholder="Please type in some code!"></textarea>
          </div>
          <div className="Result-area">
            <textarea className="Result" disabled="disabled" placeholder="Result"></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
