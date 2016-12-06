import React, {Component} from 'react'

class Marker extends Component {
    render() {
        return <div className="marker" title={this.props.name}></div>
    }
}

export default Marker;
