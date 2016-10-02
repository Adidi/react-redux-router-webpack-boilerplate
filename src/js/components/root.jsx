import React, { PropTypes } from 'react';
import App from './app';

class Root extends React.Component{

    static propTypes = {
        name: PropTypes.string.isRequired
    };

    render(){
        let { name } = this.props;

        return (
            <div>
                <App/>
                <div className="root">Hello {name}</div>
            </div>
        )
    }
}

export default Root;