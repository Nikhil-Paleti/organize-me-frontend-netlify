import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <img src="https://live.staticflickr.com/65535/53405069072_47d7d60606_n.jpg" alt="OrganizeMe Logo" style={{ maxWidth: '200px' }}/>
          <h3>Welcome to OrganizeMe</h3>
        </header>
        <body>
          <p>
            Your one-stop solution for seamless management of textile manufacturing processes. Efficiently handle order processing, production management, customer engagement, and more. Please login to explore the full potential of OrganizeMe and transform your business operations.
          </p>
        </body>
      </div>
    );
  }
}
