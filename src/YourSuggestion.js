import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


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