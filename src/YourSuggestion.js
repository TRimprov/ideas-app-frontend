import React from 'react';


class YourSuggestion extends React.Component {

    handleDelete = () => {
        this.props.deleteSuggestionFunc(this.props.suggestion.id);
    }

    addFavourite = () => {
        this.props.addFavouriteFunc(this.props.suggestion.id);
    }

    getAssociation = () => {
        this.props.getAssociationFunc();
    }


    render() {
        return (
            <div>
                {
                    this.props.suggestion && this.props.suggestion.suggestion && (
                        <div >
                            <span className="bottom-space">{this.props.suggestion.suggestion}</span>
                            <div className="btn-group left-space bottom-space" role="group" aria-label="Suggestion Buttons">
                                <button onClick={this.addFavourite} type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-heart" aria-hidden="true"></i></button>
                                <button onClick={this.handleDelete} type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-times" aria-hidden="true"></i></button>
                                <button onClick={this.getAssociation} type="button" className="btn btn-outline-success btn-sm">Associate</button>
                            </div>
                            <ul className="associations-list">{this.props.associations.map((association,i) => <li key={i}> {association}</li>)}</ul>
                        </div>)
                }
            </div>




        )
    }
}

export default YourSuggestion;