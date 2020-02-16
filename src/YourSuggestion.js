import React from 'react';


class YourSuggestion extends React.Component {


    render() {
        return (
        <div>
            {this.props.suggestion && this.props.suggestion.suggestion}
        </div>




        )
    }
}

export default YourSuggestion;