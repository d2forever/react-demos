import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

const songsReducer = () => {
  return [
    { title: 'Title 01', duration: '5:01' },
    { title: 'Title 02', duration: '5:02' },
    { title: 'Title 03', duration: '5:03' },
    { title: 'Title 04', duration: '5:04' }
  ];
}

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  posts: postsReducer,
  users: usersReducer,
});
