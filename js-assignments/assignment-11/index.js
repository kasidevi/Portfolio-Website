//Write your javascript logic here
/*const carState = document.getElementById('startOrStop');
class Car {
    constructor() {
        this.carState = "STOPPED";
        this.carSpeed = 0;
    }
    start() {
        this.carState = "STOPPED";
        return this;
    }
    stop() {
        this.carState = "STARTED";
        return this;
    }
    applyAccelerator() {
        if (this.carState === 'STARTED') {
            this.speed += 10;
        }
    }
    applyBreak() {
        if (this.carState === "STARTED" && this.speed > 0) {
            this.speed -= 10;
        }
    }
    applyUI() {
        switch (this.carState) {
            case 'STARTED':
                break;
            case 'STOPPED':
                break;
            default:
                throw Error('Invalid value ' + Car.carState);
        }
    }
}


const carStatusUpdate = new Car();

carState.onclick = () => {
    carStatusUpdate.stop();
};
carAccelerate.onclick = () => {
    carStatusUpdate.carAccelerateFn();
};

carDecelerate.onclick = () => {
    carStatusUpdate.carDecelerateFn();
};

*/

const carStartOrStopButton = document.getElementById('startOrStop');
const carRunningOrStoppedStatus = document.getElementById('carRunningOrStopped');
const carAccelerate = document.getElementById('accelarate');
const carDecelerate = document.getElementById('decelerate');
carAccelerate.disabled = true;
carDecelerate.disabled = true;
class Car {
    constructor() {
        this.carStartOrStopButton = 'Start';
        this.carRunningOrStoppedStatus = 'Stopped';
        this.carAccelerate = 0;
        this.cardecelerate = 0;
    }
    startOrStopFn() {
        let buttonColor = window.getComputedStyle(carStartOrStopButton, '').backgroundColor;
        if (buttonColor === 'rgb(0, 128, 0)') {
            carStartOrStopButton.style.backgroundColor = '#cc0000';
            carStartOrStopButton.style.border = '2px solid red';
            carStartOrStopButton.innerHTML = 'Stop';
            carAccelerate.disabled = false;
        }
        else {
            carStartOrStopButton.style.backgroundColor = 'green';
            carStartOrStopButton.style.border = '2px solid lightgreen';
            carStartOrStopButton.innerHTML = 'Start';
            carAccelerate.style.backgroundColor = "lightgrey";
            carDecelerate.style.backgroundColor = "lightgrey";
            carDecelerate.disabled = true;
            this.carAccelerate = 0;
            carAccelerate.disabled = true;
        }
    }
    carRunningOrStoppedStatusFn() {
        let buttonColor = window.getComputedStyle(carStartOrStopButton, '').backgroundColor;
        if (buttonColor === 'rgb(0, 128, 0)') {
            carRunningOrStoppedStatus.innerHTML = " Stopped";
            carAccelerate.style.backgroundColor = "lightgrey";
        }
        else {
            carRunningOrStoppedStatus.innerHTML = " Running";
            carAccelerate.style.backgroundColor = "blue";
        }
    }
    carAccelerateFn() {
        let buttonColor = window.getComputedStyle(carAccelerate, '').backgroundColor;
        if (buttonColor === 'rgb(0, 0, 255)') {
            this.carAccelerate += 10;
            carRunningOrStoppedStatus.innerHTML = ` Running with speed ${this.carAccelerate} Kmph`;
            if (this.carAccelerate !== 0) {
                carDecelerate.style.backgroundColor = "blue";
                carDecelerate.disabled = false;
            }
            else {
                carDecelerate.style.backgroundColor = "lightgrey";
                carDecelerate.disabled = true;
            }
        }
    }
    carDecelerateFn() {
        if (this.carAccelerate >= 10) {
            this.carAccelerate -= 10;
            carDecelerate.style.backgroundColor = "blue";
            if (this.carAccelerate !== 0) {
                carRunningOrStoppedStatus.innerHTML = ` Running with speed ${this.carAccelerate} Kmph`;
                carDecelerate.style.backgroundColor = "blue";
                carDecelerate.disabled = false;

            }
            else {
                carDecelerate.style.backgroundColor = "lightgrey";
                carDecelerate.disabled = true;
                carRunningOrStoppedStatus.innerHTML = ` Running`;
            }
        }
    }

}
const carStatusUpdate = new Car();

carStartOrStopButton.onclick = () => {
    carStatusUpdate.startOrStopFn();
    carStatusUpdate.carRunningOrStoppedStatusFn();
};
carAccelerate.onclick = () => {
    carStatusUpdate.carAccelerateFn();
};

carDecelerate.onclick = () => {
    carStatusUpdate.carDecelerateFn();
};
