/* global React*/
/*global ReactDOM*/
let state = {
    count: 0
};
Object.assign(state, state.count = state.count + 1, state.count = state.count + 1, state.count = state.count + 1);
console.log("js->" + state.count);
class NewClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countCB: 0
        };
    }
    buttonStyle = {
        backgroundColor: "red",
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
        console.log("1->" + this.state.count);
        this.setState({ count: this.state.count + 1 });
        console.log("2->" + this.state.count);
        this.setState({ count: this.state.count + 1 });
        console.log("3->" + this.state.count);
        //here batching will be done and em avvali ani chusi chivariki okasri chesi answer 1 isthundhi
    }
    onIncrement = () => {
        this.setState(prevState => ({ countCB: prevState.countCB + 1 }));
        console.log("1CB->" + this.state.countCB);
        this.setState(prevState => ({ countCB: prevState.countCB + 1 }));
        console.log("2CB->" + this.state.countCB);
        this.setState(prevState => ({ countCB: prevState.countCB + 1 }));
        console.log("3CB->" + this.state.countCB);
        //batching avvi oka array loki velthay first console.log execute ayyi aa tarwata motham callbacks ani execute avuthay, previouos dani use cheyydaniki callback us echestham
    }
    render() {
        console.log("parent");
        return (
            <div>
               <ChildCounter onClick={this.increment} count={this.props.count}/>
         
            <button style={this.buttonStyle} onClick={this.onIncrement}>Click Me</button>
            <p>{this.state.countCB}</p>
            </div>
        );
    }

}
class ChildCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childCounterOne: 0,
            childCounterTwo: 0
        };
    }
    buttonStyle = {
        backgroundColor: "red",
    }
    onIncrement = () => {
        this.props.onClick();
        this.setState({ childCounterOne: this.state.childCounterOne + 1 });
    }
    render() {
        console.log("child");
        return (<div>
           <button style={this.buttonStyle} onClick={this.onIncrement}>Click Me</button>
            <p>{this.state.childCounterOne}</p></div>);
    }
}
ReactDOM.render(<NewClass />, root);
