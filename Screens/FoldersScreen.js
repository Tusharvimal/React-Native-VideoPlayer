import { StyleSheet, View, Alert, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as MediaLibrary from 'expo-media-library';
import { useDispatch, useSelector } from 'react-redux';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Folder from '../component/Folder';
import * as mediaActions from '../store/actions/media-actions'

const FoldersScreen = props => {
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const [noOfActionsDispatched, setNoOfActionsDispatched] = useState(0)
    const isLoading = useSelector((state) => state.media.loading)
    // console.log(isLoading)
    const media = useSelector((state) => state.media.media)
    const dispatch = useDispatch();
    const getPermissions = () => {
        if (status === null) {
            requestPermission()
        }
        else if (status.status === 'granted') {
            setNoOfActionsDispatched(prevState => prevState + 1)
            if (noOfActionsDispatched % 2 !== 0) {
                return;
            }
            dispatch(mediaActions.loadMedia())
        }
        else if (status.status === 'denied') {
            Alert.alert('Permission Denied', 'To see the videos available in your phone please grant permission', [{ text: 'Okay', onPress: () => requestPermission }])
        } else {
            return null
        }
    }

    useEffect(() => {
        getPermissions()
    }, [status])

    if (isLoading === true) {
        return (
            <ActivityIndicator style={styles.activity} size='large' color='black' />
        )
    }

    return (
        <View style={styles.folders}>
            <FlatList data={media}
                onRefresh={() => dispatch(mediaActions.updateMediaOfPhone())}
                refreshing={isLoading}
                renderItem={({ item }) => {
                    const fetchName = item.assets[0].uri.split('/');
                    return (
                        <>
                            <Folder
                                albumName={fetchName[fetchName.length - 2]}
                                assets={item.assets}
                                count={item.totalCount}
                                navigation={props.navigation}
                            />
                        </>
                    )
                }}
                keyExtractor={(item) => uuidv4()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    activity: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    folders: {
        marginVertical: 5,
        flexGrow: 1
    }
})

export default FoldersScreen
