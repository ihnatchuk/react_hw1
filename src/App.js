import './App.css';
import {useReducer} from "react";

const App=()=> {


    const reducer=(state, action)=> {

        switch (action.type) {
            case 'INC1':
                return {...state,count1:state.count1+1}
            case 'DEC1':
                return {...state,count1:state.count1-1}
            case 'INC2':
                return {...state,count2:state.count2+1}
            case 'DEC2':
                return {...state,count2:state.count2-1}
            case 'RESET':
                return {count1:action.payload,count2:action.payload}

            default:
                return {...state}

        }

    }

    const initValue=()=>({ count1:0,count2:0 })

    const [state,dispatch]= useReducer(reducer,null, initValue)
  return (
    <div className="App">
        <div>Count1: {state.count1}</div>
        <button onClick={()=>dispatch({type:'INC1'})}>Inc1</button>
        <button onClick={()=>dispatch({type:'DEC1'})}>Dec1</button>

        <div>Count2: {state.count2}</div>
        <button onClick={()=>dispatch({type:'INC2'})}>Inc2</button>
        <button onClick={()=>dispatch({type:'DEC2'})}>Dec2</button>

        <hr/>

        <button onClick={()=>dispatch({type:'RESET',payload:25})}>Reset</button>

    </div>
  );
}

export {App};
