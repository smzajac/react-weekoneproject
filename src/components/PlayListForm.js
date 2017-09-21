import React, { Component } from 'react';
import {Button} from 'reactstrap';

export default class PlayListForm extends Component{

    state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }

    handleUserName = (e) => {
      this.setState({userName: e.target.value});
    }

    handleArtist = (e) => {
      this.setState({songArtist: e.target.value});
    }

    handleTitle = (e) => {
      this.setState({songTitle: e.target.value});
    }

    handleNotes = (e) => {
      this.setState({songNotes: e.target.value});
    }

    addToList = (e) => {
        e.preventDefault();
        this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
      ).then(response => {
        console.log(response, "yay");

      }).catch(err => {
        console.log(err, "boo!");
      });
      this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
    }



    render(){
      return(
        <div>
        Username
        <input onChange = {this.handleUserName} value = {this.state.userName} placeholder= "Username"/>
        <input onChange = {this.handleArtist} value = {this.state.songArtist} placeholder= "Artist"/>
        <input onChange = {this.handleTitle} value = {this.state.songTitle} placeholder= "Title"/>
        <input onChange = {this.handleNotes} value = {this.state.songNotes} placeholder= "Notes"/>
        <Button onClick={this.addToList} color='primary'>Submit</Button>
        </div>
      )
    }
}
