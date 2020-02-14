import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <h2>{this.props.header}</h2>
        )
    }
}

export default Header;