/*global React*/
let idCount = 0;
class Todos extends React.Component {
    constructor(props) {
        super(props);
        // alert(this.props.userInput);
    }
    removeList = () => {
        alert('remove');
    }
    render() {
        return (<div className='checkbox-input-delete'> <input className='check-box' type='checkbox'/>
        <input className='user-text' type='text' value={this.props.userInput}/>
        <button onclick={this.removeList}>X</button>
        </div>);
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        //  this.state = {inputValues: [], id: [0]} ;
        this.state = { inputValues: [] };
    }
    enterKey = (event) => {
        let input = event.target.value;
        if (event.key === 'Enter' && input.trim() !== '') {
            this.setState(state => ({ inputValues: state.inputValues = [...state.inputValues, input] }));
            //   this.setState(state => ({ inputid: state.id = [...state.id, state.id.length + 1] }));
            event.target.value = "";
        }
    }
    render() {
        return (<div  className='header-div'>
        <h1>todos</h1>
        <input className='user-input-field' type='text' placeholder='What needs to be done?' onKeyDown={this.enterKey}></input>
        <div> {this.state.inputValues.map((todo)=><Todos userInput={todo} />)}</div>
        {/*<div> {this.obj.map((todo)=><Todos userInput={todo} />)}</div>*/}
        </div>);
    }
}

React.DOM(<TodoList />, document.getElementById('root'));
