# React-Native-VideoPlayer
This app is made using Bare React Native Workflow.

The app is written in React Native.

App shows you all the folder containing videos and number of videos in that folder in your device storage in a list.

On Selecting the folder it takes you to the next screen where user can see all videos of that folders with a thumbnail in a list and on selecting 
video it starts the video in landscape mode.

App uses expo-av module to run the video.

To gather the all video files from device storage it uses expo-media-library module.

To fetch the thumbnails I used expo-video-thumbnails module.

For reducing the time it takes to fetch the media. I used expo-sqlite module to save assets in a sqlite database.

Also used expo-sqlite module to save the url of thumbnails otherwise on each render it fetched the thumbnail again and increased the space taken by the app.

For Navigation i have used @react-navigation/native module.

App Contains only Stack Navigation.

It also have functionality to find the meals by setting some filters.

To handle state changes it uses redux module.
