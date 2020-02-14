import React from 'react';

class AddSuggestion extends React.Component {
    state = {

    };

    updateSuggestion = (event) => {
        this.setState({
            suggestion: event.target.value
        });
    };

    updateTypeId = event => {
        this.setState({
            typeId: parseInt(event.target.value)
        });
    }

    addSuggestion = () => {

        this.props.addSuggestionFunc(
            this.state.suggestion,
            this.state.typeId
        );

        this.setState({
            suggestion: "",
            typeId: 0,
        })
    };


    render() {
        return (
            <form>
                <fieldset>
                    <div>
                        <input
                            type="text"
                            onChange={this.updateSuggestion}
                            
                            placeholder="Enter your suggestion here"
                        />
                        <select onChange={this.updateTypeId} defaultValue="" id="type" name="type">
                            <option value="" disabled>Choose your type</option>
                            {this.props.types.map(type =>
                                <option key={type.typeId} value={type.typeId}>{type.type}</option>)}

                        </select>
                        <button
                            type="button"
                            className="btn btn-outline-success btn-sm left-space"
                            onClick={this.addSuggestion}
                        >
                            Add
                        </button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default AddSuggestion;