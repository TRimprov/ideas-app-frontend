import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class ChooseAType extends React.Component {


    submitForm = (event) => {
        event.preventDefault();
        console.log(event.target.type.value);
        this.props.getSuggestion(parseInt(event.target.type.value));
    };


    render() {
        return (
            <form onSubmit={this.submitForm}>
                <fieldset>
                    <div>
                        <div>
                            <select defaultValue="" id="type" name="type">
                                <option value="" disabled>Choose your type</option>
                                {this.props.types.map(type =>
                                     <option key={type.typeId} value={type.typeId}>{type.type}</option>)}

                            </select>


                            <button
                                type="submit"
                                className="btn btn-outline-success btn-sm left-space"
                            >
                                Choose
                        </button>
                        </div>
                    </div>
                </fieldset>
            </form>





        )
    }
}

export default ChooseAType;