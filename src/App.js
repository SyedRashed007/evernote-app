import React from 'react'
import './App.css';
import firebase from "firebase";
import "firebase/firestore";
import SidebarComponent from './sidebar/Sidebar'
import EditorComponent from './editor/Editor'


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null, 
      notes: null
    };
  }

  // when App component is loaded successfully the following will be called
  componentDidMount = () => {
    firebase
    .firestore()
    .collection('notes')
    .onSnapshot(serverUpdate => {
      const notes = serverUpdate.docs.map(_doc => {
        const data = _doc.data();
        data['id'] = _doc.id;
        return data;
      });
      console.log(notes)
      this.setState({notes: notes})
    });
  }
  // map in sidebar gives null bcz first its null(this.state) and afterwrds as shown abv notes is getting updated
    
    render(){
    return(
      <div className="app-container">
        <SidebarComponent selectedNoteIndex={this.state.selectedNoteIndex} notes={this.state.notes}/>
        <EditorComponent/>
      </div>
    )
  }
}
  export default App;
  