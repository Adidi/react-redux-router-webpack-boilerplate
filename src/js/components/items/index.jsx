import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Items from './items';
import { addItem, removeItem } from '../../actions/items';

const mapStateToProps = (state, ownProps) => ({
    items: state.items,
    loading: state.loading
});
const mapDispatchToProps = dispatch => ({
    addItem: bindActionCreators(addItem,dispatch),
    removeItem: bindActionCreators(removeItem,dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(Items);