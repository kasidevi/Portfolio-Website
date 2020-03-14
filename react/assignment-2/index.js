// Write your React Code here
/*global ReactDOM*/
/* global React*/
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCarRunning: false,
            accelerate: 0,
            startStopClassName: 'start-button',
            accelerateClassName: 'accelerate',
        };
        this.carId = this.props.id;
        this.removeCar = this.props.deleteCar;
    }
    onStartOrStop = () => {
        this.setState(state => ({ accelerateClassName: 'accelerate' }));
        this.setState(state => ({ isCarRunning: !state.isCarRunning }));
        this.setState(state => ({ startStopClassName: 'start-button' }));
        if (!this.state.isCarRunning) {
            this.setState(state => ({ accelerate: 0 }));
            this.setState(state => ({ startStopClassName: 'stop-button' }));
        }
    }
    displayStatusText = () => {
        if (this.state.isCarRunning && this.state.accelerate === 0) {
            return <span>Running</span>;
        }
        else if (this.state.isCarRunning) {
            return <span>Running with speed {this.state.accelerate}kmph</span>;
        }
        else {
            return <span>Stopped</span>;
        }
    }
    onAccelerate = () => {
        this.setState(state => ({ accelerateClassName: 'accelerate-onclick' }));
        if (this.state.isCarRunning) {
            this.setState(state => ({ accelerate: state.accelerate + 10 }));
        }
        this.displayStatusText();
    }

    onApplyBrake = () => {
        this.setState(state => ({ accelerateClassName: 'accelerate' }));
        if (this.state.accelerate > 0) {
            this.setState(state => ({ accelerate: state.accelerate - 10 }));
        }
        this.displayStatusText();
    }
    render() {
        return (
            <div className='intial-car'>
            <div className='car1'>
            <p>Car:{this.props.id}</p>
            <button className='delete-button' onClick={()=>this.removeCar(this.carId)}>X</button>
            </div>
            <div className='car-properties'>
            <button className={this.state.startStopClassName} onClick={this.onStartOrStop}>{this.state.isCarRunning?'Stop':'Start'}</button>
            <p className='display-status-text'>Status: {this.displayStatusText()}</p>
            <div className='accelerate-applybreak'>
            <button className={this.state.accelerateClassName} onClick={this.onAccelerate}>Accelerate</button>
            <button className='apply-break' onClick={this.onApplyBrake}>Apply Break</button>
            </div>
            </div>
            <div className='border'></div>
       </div>
        );
    }
}
class CarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { carsList: [1] };
    }
    addCarToCarsList = () => {
        this.setState(state => ({ carsList: state.carsList = [...state.carsList, state.carsList.length + 1] }));
        //console.log(this.state.carsList);
    }
    removeCarFromCarsList = (index) => {
        //    this.setState(state => ({ carsList: state.carsList = [...state.carsList, state.carsList.length + 1] }));  
        //let index1 = parseInt(index);
        let array = [...this.state.carsList];
        let index1 = array.indexOf(parseInt(index))
        array.splice(parseInt(index1), 1);
        this.setState({
            carsList: array
        });

    }
    renderCarsList = () => {}
    render() {
        return (
            <div>
           <button onClick={this.addCarToCarsList} className='add-car'>Add Car</button>
          <div> {this.state.carsList.map((carId)=><Car id={carId.toString()} deleteCar={this.removeCarFromCarsList}/>)}</div>
        </div>);
    }
}
ReactDOM.render(<CarList />, root);
