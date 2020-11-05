import React from 'react';
import { connect } from 'react-redux';

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className={'loader-container ' + this.props.loaderClass}>
              <div className="loader"></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loaderClass: state.util.loaderClass,
    }
}
export default connect(mapStateToProps)(Loader);