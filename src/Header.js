import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <h4>{this.props.header}</h4>
        )
    }
}

export default Header;