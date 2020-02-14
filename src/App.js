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
  //axios.get TODO
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

addSuggestion = (suggestion, typeId) => {
  console.log("Adding suggestion ",suggestion, typeId);
  this.suggestions.push({id: 0, suggestion, typeId, favourite: null});
};

  render() {


    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 chooseType">
              <Header header="What's My App?" />
              <Header header="Choose your suggestion type" />
              <ChooseAType types={this.state.types} getSuggestion={this.getSuggestion} />


            </div>
            <div className="col-12 col-sm-4 returnItem">
              <Header header="Your suggestion!" />
              <YourSuggestion suggestion={this.state.suggestion} />



            </div>
            <div className="col-12 col-sm-4 addItem">
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
