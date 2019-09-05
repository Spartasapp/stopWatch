import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { startStopWatchThunkAC ,stopStopWatchThunkAC,resetStopWatchThunkAC} from './redux/counterReducer';

const App = (props) => {
  return (
    <div className="App">
      <div className='buttons'>
      <div className='start' onClick={props.startSecundomer}>Start</div>
      <div className='start' onClick={props.pauseSecundomer}>Pause</div>
      <div className='start' onClick={props.resetSecundomer}>Reset</div>
      </div>
      <div className='screen'>{props.seconds}</div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    seconds: state.counter.seconds
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    startSecundomer: () => {
      let thunk = startStopWatchThunkAC();
      dispatch(thunk);
    },
    pauseSecundomer: () => {
      let thunk = stopStopWatchThunkAC();
      dispatch(thunk);
    },
    resetSecundomer: ()=>{
      let thunk = resetStopWatchThunkAC();
      dispatch(thunk);
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
