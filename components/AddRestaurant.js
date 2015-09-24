import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
var RaisedButton = mui.RaisedButton;
var AppBar = mui.AppBar,
  List = mui.List,
  ListItem = mui.ListItem,
  TextField = mui.TextField;

var ThemeManager = require('material-ui/lib/styles/theme-manager')();

class AddRestaurant extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { restaurantName: '' };
  }

  handleRestaurantValue(ev) {
    this.setState({
      restaurantName: ev.target.value
    })
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    const { add } = this.props;

    return (
      <div>
          <TextField
            type='text'
            hintText="Restaurant name"
            errorText="Field required."
            onChange={this.handleRestaurantValue.bind(this)}
            value={this.state.restaurantName} />

          <RaisedButton onClick={() => add(this.state.restaurantName) } label="Add restaurant" />
      </div>
    );
  }
}

AddRestaurant.childContextTypes = {
  muiTheme: React.PropTypes.object
};

AddRestaurant.propTypes = {
  add: PropTypes.func.isRequired
};

export default AddRestaurant;
