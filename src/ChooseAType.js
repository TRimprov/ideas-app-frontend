import React from 'react';



class ChooseAType extends React.Component {


    submitForm = (event) => {
        event.preventDefault();
        console.log(event.target.type.value);
        this.props.getSuggestion(parseInt(event.target.type.value));
    };

    luckySuggestion = () => {
        this.props.luckySuggestion();
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <fieldset>
                    <div>
                        <div>
                            <select defaultValue="" id="type" name="type" className="bottom-space">
                                <option value="" disabled>Choose your type</option>
                                {this.props.types.map(type =>
                                    <option key={type.typeId} value={type.typeId}>{type.type}</option>)}

                            </select>


                            <div className="custom-sq">
                                <input type="checkbox" disabled="disabled" id="box3" />
                                <label for="box3"><i className="fa fa-heart green-text" aria-hidden="true"></i></label>
                            </div>

                            <div className="btn-group left-space bottom-space" role="group" aria-label="Choose Suggestion Buttons">
                            <button type="submit" className="btn btn-outline-success btn-sm left-space">Choose</button>
                            <button onClick={this.luckySuggestion} type="button" className="btn btn-outline-success btn-sm left-space">Feeling lucky</button>
                            </div>  
                       
                        </div>
                    </div>
                </fieldset>
            </form>





        )
    }
}

export default ChooseAType;