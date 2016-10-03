import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadItems } from '../actions/items';

class App extends React.Component{

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        loadItems: PropTypes.func.isRequired
    };

    componentDidMount(){
        this.loadData();
    }

    loadData(){
        this.props.loadItems();
    }

    render(){
        const { children, loading } = this.props,
            elLoading = loading ? <div className="loading loading--double" ></div> : null;

        return (
            <div className="app">
                <header><h1>Header</h1>{elLoading}</header>
                <aside>
                    <ul>
                        <li><Link  to="/" >Home</Link></li>
                        <li><Link  to="/about" >About</Link></li>
                    </ul>
                </aside>
                <div className="content">
                    {children}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state,ownProps) => ({
    loading: state.loading
});

const mapDispatchToProps = dispatch => ({
    loadItems: bindActionCreators(loadItems,dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(App);