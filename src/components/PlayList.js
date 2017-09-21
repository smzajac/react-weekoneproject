import React, { Component } from 'react';
import PlayListItem from './PlayListItem';
import {Button} from 'reactstrap';

export default class PlayList extends Component {
  state = {
    songs: []
  }

  componentDidMount() {
     fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
           return results.json();
         }).then(data => {
           this.setState({songs: data});
           console.log("state", this.state.songs);
         })
   }

   fetchData = (e) => {
       e.preventDefault();
       fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
         return results.json();
       }).then(data => {
         this.setState({songs: data});
       })
   }

   render(){
     return(
       <div>
        <button onClick={this.fetchData} > Update list</button>
        {this.state.songs.map((song, i) =>
           <PlayListItem key={i} {...song}/>
         )}
       </div>
     )
   }
 }
