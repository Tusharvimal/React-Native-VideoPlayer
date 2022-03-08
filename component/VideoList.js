import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as VideoThumbnails from 'expo-video-thumbnails';
import { addThumbnail, fetchThumbnail } from '../helpers/db';

const VideoList = props => {
    const [image, setImage] = useState(null)
    const generateThumbnail = async () => {
        try {
            const { uri } = await VideoThumbnails.getThumbnailAsync(props.assets.uri)
            setImage(uri)
            addThumbnail(props.assets.id, uri)
        }
        catch (err) {
            console.log(err)
        }
    }
    const getThumbnail = async () => {
        try {
            const dbResult = await fetchThumbnail(props.assets.id);
            setImage(dbResult.rows._array[0].imageUri)
        } catch (err) {
            if (err instanceof TypeError) {
                generateThumbnail()
            }
        }
    }
    useEffect(() => {
        getThumbnail()
        return () => {
            setImage(null)
        }
    }, [])

    return (
        <Pressable
            android_ripple={{ color: '#cccccc', borderless: false }}
            onPress={() => {
                props.navigation.navigate('Video', {
                    assets: props.assets,
                    title: props.assets.filename,
                    navigator: props.navigation
                })
            }}
        >
            <View style={styles.videoList}>
                <View style={styles.icon}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                <View style={styles.name}>
                    <Text style={{ fontSize: 14 }} numberOfLines={1}>
                        {props.assets.filename}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    videoList: {
        marginHorizontal: 2,
        marginVertical: 10,
        flexDirection: 'row'
    },
    icon: {
        marginLeft: 5,
        width: 90,
        height: 55,
        borderRadius: 5,
        elevation: 5,
        backgroundColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 5,
    },
    name: {
        marginLeft: 10,
        justifyContent: 'center',
    }
})

export default VideoList
