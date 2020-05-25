import * as types from '../types'
import { LIGHT, DARK } from 'config/constants'

const theme = (state = { currentTheme: LIGHT }, action) => {
    switch (action.type) {
        case types.TOGGLE_LIGHT_DARK_MODE:
            return {
                ...state,
                currentTheme: state.currentTheme === LIGHT ? DARK : LIGHT,
            }
        default:
            return state
    }
}

export default theme
