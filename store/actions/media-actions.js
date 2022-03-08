export const SET_MEDIA = 'SET_MEDIA'
export const IS_LOADING = 'IS_LOADING'
import * as MediaLibrary from 'expo-media-library';
import { addAssets, fetchAssets, updateAssets } from '../../helpers/db';

export const loadMedia = () => {
    return async dispatch => {
        try {
            dispatch({ type: IS_LOADING })
            const dbResult = await fetchAssets()
            dispatch({
                type: SET_MEDIA,
                mediaAssets: JSON.parse(dbResult.rows._array[0].assets)
            })
        }
        catch (err) {
            if (err instanceof TypeError) {
                dispatch(getMediaFromPhone())
            }
        }
    }
}

export const getMediaFromPhone = () => {
    return async dispatch => {
        // dispatch({ type: IS_LOADING })
        const albums = await MediaLibrary.getAlbumsAsync()
        let medias = [];
        const news = albums.map(async (item) => {
            const gettingMedia = await MediaLibrary.getAssetsAsync({ first: 1000, album: item.id, mediaType: MediaLibrary.MediaType.video })
            return gettingMedia
        })
        Promise.all(news).then((values) => {
            values.filter((item) => {
                if (item.totalCount >= 1) {
                    medias.push(item)
                }
            })
            dispatch({
                type: SET_MEDIA,
                mediaAssets: medias
            })
            addAssets(medias)
        })
    }
}

export const updateMediaOfPhone = () => {
    return async dispatch => {
        // dispatch({ type: IS_LOADING })
        const albums = await MediaLibrary.getAlbumsAsync()
        let medias = [];
        const news = albums.map(async (item) => {
            const gettingMedia = await MediaLibrary.getAssetsAsync({ first: 1000, album: item.id, mediaType: MediaLibrary.MediaType.video })
            return gettingMedia
        })
        Promise.all(news).then((values) => {
            values.filter((item) => {
                if (item.totalCount >= 1) {
                    medias.push(item)
                }
            })
            dispatch({
                type: SET_MEDIA,
                mediaAssets: medias
            })
            updateAssets(medias)
        })
    }
}