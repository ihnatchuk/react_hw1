import React, {useEffect, useState} from 'react';

const FunctionalComponent = (props) => {

    console.log('constructor');

    const [state,setState]=useState({a:0, b:25});
    const inc=()=>{
        setState(prev=>({a:prev.a+1,b:prev.b-1}))
    }

    useEffect(()=>{
        console.log('componentDidMount');
        return ()=>{console.log('componentWillUnmount');}
    },[])

    useEffect(()=>{
        console.log('componentDidUpdate');
    },[state])

    return (
        <div>
            {console.log('render')}
            <div>
                <div>A:{state.a}</div>
                <div>B:{state.b}</div>
                <div>Name:{props.name}</div>
                <button onClick={()=>inc()}>Inc</button>
            </div>
        </div>
    );
};

export {FunctionalComponent};