import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import VideoList from '../component/VideoList'
import { useIsFocused } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation'

const FilesScreen = props => {
    const assets = props.route.params.assets;
    const [videoList, setVideoList] = useState(assets)
    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    }
    const isFocused = useIsFocused()
    if (isFocused) {
        changeScreenOrientation()
    }

    return (
        <View>
            <FlatList data={videoList} renderItem={({ item }) => {
                return (
                    <>
                        <VideoList navigation={props.navigation} assets={item} />
                    </>
                )
            }} />
        </View>
    )
}

export default FilesScreen

const styles = StyleSheet.create({})