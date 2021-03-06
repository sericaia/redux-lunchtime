'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Restaurant from '../components/Restaurant';
import * as RestaurantActions from '../actions/restaurant';

function mapStateToProps(state) {
  return {
    restaurant: state.restaurant.toArray() //toJS() also works here
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RestaurantActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
