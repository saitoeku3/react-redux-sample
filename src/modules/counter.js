const initialState = {
  count: 0
}

const DECREMENT = 'react-redux-sample/count/DECREMENT'
const INCREMENT = 'react-redux-sample/count/INCREMENT'
const SET_COUNT = 'react-redux-sample/count/SET_COUNT'

export const decrement = () => ({
  type: DECREMENT
})

export const increment = () => ({
  type: INCREMENT
})

export const setCount = count => ({
  type: SET_COUNT,
  payload: { count }
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'react-redux-sample/count/DECREMENT':
      return {
        count: state.count - 1
      }
    case 'react-redux-sample/count/INCREMENT':
      return {
        count: state.count + 1
      }
    case 'react-redux-sample/count/SET_COUNT':
      return {
        count: action.payload.count
      }
    default:
      return state
  }
}

export default reducer
