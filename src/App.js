import './App.css';
import {useReducer, useRef} from "react";

const App=()=> {

    const catName=useRef();
    const dogName=useRef();


    const reducer=(state, action)=> {
        let catId;

        switch (action.type) {
            case 'CAT':
                state.cats.length? catId = state.cats.at(-1).id+1 : catId=1;
                return {...state,cats:[...(state.cats), {id:catId,name:catName.current.value}]}

            case 'DOG':
                return {...state,dogs:[...state.dogs,dogName.current.value]}

            default:
                return {...state}
        }

    }

    const initValue=()=>({ cats:[],dogs:[] })

    const [state,dispatch]= useReducer(reducer,null, initValue)

    return (
    <div className="App">
        <div className={'Pets'}>
            <div className={'cats'}>

                <div className={'catInput'}>
                    <div>Cat:</div>
                    <input type="text" placeholder={'catName'} ref={catName}/>
                    <button onClick={()=>dispatch({type:'CAT'})}>Add Cat</button>
                </div>

                <div className={'catsOutput'}>
                    {state.cats.map((cat)=>{
                        return (
                            <div>
                                {cat.id}. {cat.name}
                            </div>
                        )})
                    }

                </div>

            </div>

            <div className={'dogs'}>
                <div>Dog:</div>
                <input type="text" placeholder={'dogName'} ref={dogName}/>
                <button onClick={()=>dispatch({type:'DOG'})}>Add Cat</button>
            </div>
        </div>


    </div>
  );
}

export {App};
