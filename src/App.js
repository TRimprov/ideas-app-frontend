import React from 'react';
import './App.css';
import Header from "./Header";
import ChooseAType from "./ChooseAType";
import YourSuggestion from "./YourSuggestion";
import AddSuggestion from "./AddSuggestion";


class App extends React.Component {
  state = {
    typeId: undefined,
    suggestion: {},
    types: [
      {typeId: 1, type: "Relationship"},
      {typeId: 2, type: "Location"},
      {typeId: 3, type: "Object"},
    ]
  };

suggestions = [
  {id:1, suggestion:"Husband and Wife", typeId: 1, favourite: null},
  {id:2, suggestion:"Employee and Employer", typeId: 1, favourite: null},
  {id:3, suggestion:"The Moon", typeId: 2, favourite: null},
  {id:4, suggestion:"A Hospital", typeId: 2, favourite: null},
  {id:5, suggestion:"Banana", typeId: 3, favourite: null},
]

getSuggestion = (typeId) => {
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
};

/*axios.post("", newSuggestion)
      .then((response) => {
        const newSuggestion = response.data;
        const copy = this.state.suggestions.slice();
        copy.push(newSuggestion);
        console.log(copy);
        this.setState({
          suggestions: copy
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }; */


addSuggestion = (suggestion, typeId) => {
  console.log("Adding suggestion ",suggestion, typeId);
  this.suggestions.push({id: 0, suggestion, typeId, favourite: null});
};

deleteSuggestion = id => {
  //axios.delete(``) TODO
  //  .then(() => {
      const filteredSuggestion = this.suggestions.filter(keepSuggestion => {
        if (keepSuggestion.id !== id) return true;
        else return false;
      });

      this.suggestions = filteredSuggestion
      this.setState({
        suggestion: {}
      });
   // })
   // .catch((err) => {
   //   console.log(err);
  // });
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
              <ChooseAType types={this.state.types} getSuggestion={this.getSuggestion} />


            </div>
            <div className="col-12 col-sm-4">
              <Header header="Your suggestion!" />
              <YourSuggestion 
              suggestion={this.state.suggestion}
              deleteSuggestionFunc={this.deleteSuggestion}
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
