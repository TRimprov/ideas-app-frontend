import React from 'react';

class AddSuggestion extends React.Component {
    state = {

    };

    updateSuggestion = (event) => {
        this.setState({
            suggestion: event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
        });
    };

    updateTypeId = event => {
        this.setState({
            typeId: parseInt(event.target.value)
        });
    }


    updateFavourite = () => {
        this.setState({
            favourite: 1
        });
    };

    addSuggestion = (event) => {
        event.preventDefault();

        this.props.addSuggestionFunc(
            this.state.suggestion,
            this.state.typeId,
            this.state.favourite
        );

        this.setState({
            suggestion: "",
            favourite: null,
        })

        event.currentTarget.suggestionText.value="";
    };


    render() {
        return (
            <form onSubmit={this.addSuggestion}>
                <fieldset>
                    <div>
                        <input
                            type="text"
                            className="bottom-space"
                            name="suggestionText"
                            onChange={this.updateSuggestion} required

                            placeholder="Enter your suggestion"
                        />
                        <select
                            className="left-space bottom-space"
                            onChange={this.updateTypeId} defaultValue="" id="type" name="type">
                            <option value="" disabled>Choose your type</option>
                            {this.props.types.map(type =>
                                <option key={type.typeId} value={type.typeId}>{type.type}</option>)}

                        </select>


                        <div className="btn-group left-space" role="group" aria-label="Add Suggestion Buttons">
                            <button onClick={this.updateFavourite} type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-heart" aria-hidden="true"></i></button>
                            <button type="submit" className="btn btn-outline-success btn-sm"><i className="fa fa-check" aria-hidden="true"></i></button>
                        </div>

                    </div>
                </fieldset>
            </form>
        )
    }
}

export default AddSuggestion;