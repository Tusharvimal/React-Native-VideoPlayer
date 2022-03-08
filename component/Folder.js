import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const Folder = props => {
    return (
        <Pressable onPress={() => {
            props.navigation.navigate('Files', {
                assets: props.assets,
                title: props.albumName
            })
        }}
            android_ripple={{ color: '#cccccc', borderless: false }}
        >
            <View style={styles.folder}>
                <View style={styles.icon}>
                    <Icon name='folder' size={60} color='#99bbff' />
                </View>
                <View style={styles.info}>
                    <Text>{props.albumName}</Text>
                    <Text style={{ color: 'gray' }}>
                        {props.count} {props.count > 1 ? 'videos' : 'video'}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    folder: {
        marginHorizontal: 5,
        flexDirection: 'row',
        paddingVertical: 3
    },
    icon: {
        marginLeft: 5
    },
    info: {
        marginLeft: 10,
        justifyContent: 'center'
    }
})

export default Folder