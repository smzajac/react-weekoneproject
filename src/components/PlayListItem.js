import React, { Component } from 'react';

export default class PlayListItem extends Component{
  render(){
    let userName = this.props.userName
    let songArtist = this.props.songArtist
    let songTitle = this.props.songTitle
    let songNotes = this.props.songNotes
    return(
      <div>
      <div>
        <p><span>User:</span> {userName}</p>
        <p><span>Artist/Band:</span> {songArtist}</p>
        <p><span>Title:</span> {songTitle}</p>
        <p><span>Notes:</span> {songNotes}</p>
      </div>
      </div>
    )
  }
}
