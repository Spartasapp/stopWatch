export const START_WATCH = "START_WATCH";
export const PAUSE_WATCH = "PAUSE_WATCH";
export const RESET_WATCH = "RESET_WATCH";
let initialState = {
    seconds: 0,
    minutes: 0,
    status: 0,
    timer: undefined
}

export const startStopWatchThunkAC = () => (dispatch) => {
    let timer = setInterval(() => {
        dispatch(startAC(timer))
    }, 1000);


}
export const stopStopWatchThunkAC = () => (dispatch, getState) => {
    clearInterval(getState().counter.timer)
    dispatch(pauseAC())
}
export const resetStopWatchThunkAC = () => (dispatch) => {
    
    dispatch(resetAC())
}
const CounterReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case START_WATCH: {
            if(state.seconds >=60){  
                state.seconds = 0;
                state.minutes = state.minutes+1;
            }
            return {
                ...state,
                seconds: state.seconds + 1, timer: action.timer,
            }

        }
        case PAUSE_WATCH: {
            return {
                ...state,
                seconds: state.seconds
            }
        }
        case RESET_WATCH: {
            return {
                ...state,
                seconds: state.seconds = 0,
                minutes: state.minutes =0
            }
        }

        default: return state;
    }
}
const startAC = (timer) => ({ type: START_WATCH, timer});
const pauseAC = () => ({ type: PAUSE_WATCH});
const resetAC = () => ({ type: RESET_WATCH});

export default CounterReducer;