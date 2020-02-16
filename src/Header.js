import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <h3>{this.props.header}</h3>
        )
    }
}

export default Header;