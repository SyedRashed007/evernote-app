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

  render(){
    return(
      <div className="app-container">
        <SidebarComponent>
        </SidebarComponent>
        <EditorComponent>
        </EditorComponent>
      </div>
    )
  }
}

// when App component is loaded successfully the following will be called

// eslint-disable-next-line no-undef
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
export default App;
