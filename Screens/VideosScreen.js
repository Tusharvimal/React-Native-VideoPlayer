import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as ScreenOrientation from 'expo-screen-orientation';
// import { Video } from 'expo-av'
// import VideoPlayer from 'react-native-video-controls'
import Video from 'react-native-video'

const VideosScreen = props => {
    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    }
    changeScreenOrientation()
    return (
        <>
            <Video
                source={{
                    uri: props.route.params.assets.uri,
                }}
                navigator={props.route.params.navigator}
                resizeMode="contain"
                style={styles.video}
                fullscreenOrientation='landscape'
            />
        </>
    )
}

const styles = StyleSheet.create({
    video: {
        flex: 1,
        backgroundColor: 'black'
    }
})

export default VideosScreen
