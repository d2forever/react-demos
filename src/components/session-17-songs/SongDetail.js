import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if(!song) {
    return <h1>Please select song!</h1>
  }

  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {song.tile}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);
