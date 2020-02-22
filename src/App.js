import React from 'react';
import axios from "axios";
import './App.css';
import Header from "./Header";
import ChooseAType from "./ChooseAType";
import YourSuggestion from "./YourSuggestion";
import AddSuggestion from "./AddSuggestion";


class App extends React.Component {
  state = {
    suggestion: [],
    types: [],
    associations: [],
    favourite: []
  };

  componentDidMount() {
    axios.get("https://7i6d99wf8b.execute-api.eu-west-1.amazonaws.com/dev/types")
      .then((response) => {
        const types = response.data.types;


        console.log(types)

        this.setState({
          types: types
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }


  /*getSuggestion = (typeId) => {
    //axios.get(``) TODO
    console.log(typeId);
    const typeSuggestions = this.suggestions.filter(suggestion => suggestion.typeId === typeId);
    console.log(typeSuggestions);
    const suggestion = typeSuggestions[Math.ceil(Math.random()*typeSuggestions.length-1)];
    this.setState({
      typeId,
      suggestion
    });
    console.log(typeId, suggestion);
  }; */

  getSuggestion = (typeId, favourite) => {

    axios.get("https://7i6d99wf8b.execute-api.eu-west-1.amazonaws.com/dev/suggestion/" + typeId + "?favourite=" + (favourite?1:0))
      .then((response) => {
        console.log("this is the response", response);
        const suggestion = response.data.suggestion;
        console.log("this is the suggestion", suggestion)
        this.setState({
          suggestion: suggestion,
          associations: []
        });
      });
  };

  luckySuggestion = () => {

    axios.get("https://7i6d99wf8b.execute-api.eu-west-1.amazonaws.com/dev/suggestion")
      .then((response) => {
        console.log("this is the response", response);
        const suggestion = response.data.suggestion;
        console.log("this is the suggestion", suggestion)
        this.setState({
          suggestion: suggestion,
          associations: []
        });
      })
  };

  getAssociation = () => {
    const suggestion = this.state.suggestion.suggestion;

    axios.get(`https://api.wordassociations.net/associations/v1.0/json/search?apikey=940e7dd9-d827-4d1d-9e71-703130c3357d&text=${suggestion}&lang=en&limit=6`)
      .then((response) => {
        console.log("this is the response", response);
        const associations = response.data.response[0].items.map(item => {
          return item.item;
        });
        this.setState({
          associations
        });
        console.log(associations);
      });
  };


  addSuggestion = (suggestion, typeId, favourite) => {
    console.log("Adding suggestion ", suggestion, typeId, favourite);
    const newSuggestion = {
      suggestion: suggestion,
      typeId: typeId,
      favourite: favourite
    };

    axios.post("https://7i6d99wf8b.execute-api.eu-west-1.amazonaws.com/dev/suggestion", newSuggestion)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  deleteSuggestion = id => {
    axios.delete(`https://7i6d99wf8b.execute-api.eu-west-1.amazonaws.com/dev/suggestion/${id}`)
      .then((response) => {
        // const filteredSuggestion = this.suggestion.filter(keepSuggestion => {
        //   if (keepSuggestion.id !== id) return true;
        //   else return false;
        // });

        // this.suggestion = filteredSuggestion
        //    this.setState({
        //      suggestion: 
        //    });
        console.log(id);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addFavourite = (id, favourite) => {
    axios.put(`https://7i6d99wf8b.execute-api.eu-west-1.amazonaws.com/dev/suggestion/${id}`, {
      favourite
    })
      .then((response) => {
        const filteredSuggestion = this.suggestion.map(favouriteSuggestion => {
          if (favouriteSuggestion.id === id) {
            favouriteSuggestion.favourite++;
            console.log(favouriteSuggestion.favourite);
          }
          return favouriteSuggestion;
        });

        this.setState({
          tasks: filteredSuggestion
        });
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };




  render() {


    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="Logo">
                <h1>What's My App?</h1>
                <div className="double-bottom-space">
                  <h6>Innovative Improvisation</h6>
                </div>
              </div>
              <Header header="Choose your suggestion type" />
              <ChooseAType
                types={this.state.types}
                getSuggestion={this.getSuggestion}
                luckySuggestion={this.luckySuggestion}
              />


            </div>
            <div className="col-12 col-sm-4">
              <Header header="Your suggestion!" />
              <YourSuggestion
                suggestion={this.state.suggestion}
                associations={this.state.associations}
                deleteSuggestionFunc={this.deleteSuggestion}
                addFavouriteFunc={this.addFavourite}
                getAssociationFunc={this.getAssociation}
              />



            </div>
            <div className="col-12 col-sm-4">
              <Header header="Add a new suggestion" />
              <AddSuggestion types={this.state.types} addSuggestionFunc={this.addSuggestion} />



            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;