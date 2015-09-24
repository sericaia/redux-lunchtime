import React, { Component, PropTypes } from 'react';
import AddRestaurant from './AddRestaurant';

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
              onClick={() => addVote(value.id)} />
            </div>
          )}
        </List>
        <AddRestaurant add={add}/>
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
