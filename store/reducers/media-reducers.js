import { FETCH_THUMBNAIL, IS_LOADING, SET_MEDIA } from "../actions/media-actions";

const initialState = {
    media: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MEDIA:
            const MediaFiles = action.mediaAssets
            return { ...state, media: MediaFiles, loading: false }
        case IS_LOADING:
            return { ...state, loading: true }
        default:
            return initialState
    }
}