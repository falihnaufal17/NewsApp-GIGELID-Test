let initialState = {
    newsList: [],
    isLoading: false,
    isRejected: false,
    isFulFilled: false
}

const news = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NEWS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulFilled: false
            }
        case 'GET_NEWS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
                isFulFilled: false
            }
        case 'GET_NEWS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isRejected: false,
                isFulFilled: true,
                newsList: action.payload.data.articles
            }
        default:
            return state

    }
}

export default news