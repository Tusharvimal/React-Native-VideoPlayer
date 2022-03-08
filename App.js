import React from 'react';
import VideoNavigation from './Navigation/VideoNavigation';
import { Provider } from 'react-redux';
import store from './store/store';
import { videothumbnails, albumsAssets } from './helpers/db';

videothumbnails().then(() => {
  console.log('Initialized thumbnails database')
}).catch(err => {
  console.log('Initializing thunmbnails db failed');
  console.log(err)
})

albumsAssets().then(() => {
  console.log('Initialized assets database')
}).catch(err => {
  console.log('Initializing assets db failed');
  console.log(err)
})

export default function App() {
  return (
    <Provider store={store}>
      <VideoNavigation />
    </Provider>
  );
}

