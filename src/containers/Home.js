import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { clickButton } from "../actions/clickAction";
import { Button } from "../components/button";
import TextField from "@material-ui/core/TextField";

import Layout from "../components/Layout";
import { updateCacheOnRouteChange } from "../helpers";

class Home extends Component {
  state = {
    inputValue: ""
  };

  inputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    const { newValue, clickButton } = this.props;

    return (
      <Layout>
        <TextField
          id="name"
          label="Text"
          value={this.state.inputValue}
          onChange={this.inputChange}
          margin="normal"
        />
        <Button
          variant="outlined"
          onClick={() => {
            clickButton(this.state.inputValue);
          }}
        >
          Click Me!!!
        </Button>
        <li>Organize Routes</li>
        <li>Assemble tests</li>
        <li>*Add StoryBook*</li>
        <h4>{newValue}</h4>
        <p>
          <Link
            to="/dynamic"
            onClick={updateCacheOnRouteChange.bind(this, "/dynamic")}
          >
            Dynamic Page!
          </Link>
        </p>
      </Layout>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
