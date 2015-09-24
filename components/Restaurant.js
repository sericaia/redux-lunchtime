import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
var RaisedButton = mui.RaisedButton;
var AppBar = mui.AppBar,
  List = mui.List,
  ListItem = mui.ListItem,
  TextField = mui.TextField;

var ThemeManager = require('material-ui/lib/styles/theme-manager')();

class Restaurant extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { restaurantName: '' };
  }

  handleRestaurantValue(ev) {
    this.setState({
      restaurantName: ev.target.value
    })
  }

  _handleTouchTap() {
    alert('Tap');
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    const { add, remove, addVote, restaurant } = this.props;

    return (
      <div>
      <AppBar title="Resturant List" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <List>
          {restaurant.map(value =>
            <div>
              <ListItem primaryText={value.text}
              secondaryText={
                <p>
                  Votes: {value.votes}
                </p>
              }
              onClick={() => addVote(value.text)} />
            </div>
          )}
        </List>

        <p>
          <TextField
            type='text'
            hintText="Restaurant name"
            errorText="Field required."
            onChange={this.handleRestaurantValue.bind(this)}
            value={this.state.restaurantName} />
        </p>
        <p>
          <RaisedButton onClick={() => add(this.state.restaurantName) } label="Add restaurant" />
        </p>
      </div>
    );
  }
}

Restaurant.childContextTypes = {
  muiTheme: React.PropTypes.object
};

Restaurant.propTypes = {
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  restaurant: PropTypes.array.isRequired
};

export default Restaurant;
