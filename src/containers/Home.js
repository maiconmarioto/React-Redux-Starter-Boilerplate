import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import TextField from "@material-ui/core/TextField";

import Layout from "../components/Layout";
import { Button } from "../components/button";
import { clickButton } from "../store/actions/clickAction";
import { updateCacheOnRouteChange } from "../helpers";

export class Home extends Component {
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
