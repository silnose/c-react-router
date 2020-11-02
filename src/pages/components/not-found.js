import React, { PureComponent } from "react";
import { withRouter } from "react-router";
import "./generic-page.css";

class NotFound extends PureComponent {
  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleRandomVideo = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1);
    this.props.history.push(`/videos/${random}`);
  };

  render() {
    return (
      <div className='Page NotFound'>
        <h1>404</h1>
        <h3 className='SadFace'>:(</h3>
        <h2>Not Found</h2>
        <button onClick={this.handleGoBack} className='Button'>
          Take me back! Please!
        </button>

        <button onClick={this.handleRandomVideo} className='Button'>
          I feel lucky
        </button>
      </div>
    );
  }
}

export default withRouter(NotFound);
