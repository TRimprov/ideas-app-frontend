import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <div className="top-space">
            <h4>{this.props.header}</h4>
            </div>
        )
    }
}

export default Header;