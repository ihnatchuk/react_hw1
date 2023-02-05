import React, {Component} from 'react';

class ClassComponent extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state={a:0, b:25}
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (Math.abs(prevState.a-prevState.b)<2){
            return 'a near b'
        }else {
            return 'a far from b'
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log('prevProps: ',prevProps);
        console.log('prevState: ',prevState);
        console.log('snapshot: ',snapshot);

    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    inc(){
        this.setState(prev=>({a:prev.a + 1, b:prev.b-1}))
    }

    render() {
        console.log('render');
        return (
            <div>
                <div>A:{this.state.a}</div>
                <div>B:{this.state.b}</div>
                <div>Name:{this.props.name}</div>
                <button onClick={()=>this.inc()}>Inc</button>
            </div>
        );
    }
}

export {ClassComponent};