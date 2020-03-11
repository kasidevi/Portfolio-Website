const carStartOrStopButton = document.getElementById('startOrStop');
const carRunningOrStoppedStatus = document.getElementById('carRunningOrStopped');
const carAccelerate = document.getElementById('accelarate');
const carDecelerate = document.getElementById('decelerate');
const addCars = document.getElementById('addCar');
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
let accelarateOfReplica = 0;
addCars.onclick = () => {
    const divs = document.getElementById('divs');
    const carReplica = document.createElement('div');
    const startOrStop = document.createElement('button');
    const divForstatus = document.createElement('div');
    const carStatus = document.createElement('span');
    const isCarRunning = document.createElement('span');
    const accelarate = document.createElement('button');
    const decelerate = document.createElement('button');
    const accelarateAndDecelerate = document.createElement('div');
    startOrStop.className = 'start-stop';
    accelarateAndDecelerate.className = 'footer-buttons';
    carReplica.className = 'calculate-car-speed';
    accelarate.className = 'accelarate';
    decelerate.className = 'decelerate';
    startOrStop.innerHTML = `Start`;
    accelarate.innerHTML = 'Accelerate';
    decelerate.innerHTML = 'Decelerate';
    carStatus.innerHTML = `Status:`;
    isCarRunning.innerHTML = `Stopped`;
    divForstatus.appendChild(carStatus);
    divForstatus.appendChild(isCarRunning);
    accelarateAndDecelerate.appendChild(accelarate);
    accelarateAndDecelerate.appendChild(decelerate);
    carReplica.appendChild(startOrStop);
    carReplica.appendChild(divForstatus);
    carReplica.appendChild(accelarateAndDecelerate);
    divs.appendChild(carReplica);
    accelarate.disabled = true;
    decelerate.disabled = true;
    startOrStop.onclick = () => {
        let buttonColor = window.getComputedStyle(startOrStop, '').backgroundColor;
        if (buttonColor === 'rgb(0, 128, 0)') {
            startOrStop.style.backgroundColor = '#cc0000';
            startOrStop.style.border = '2px solid red';
            startOrStop.innerHTML = 'Stop';
            accelarate.disabled = false;
            isCarRunning.innerHTML = "Running";
            accelarate.style.backgroundColor = "blue";
        }
        else {
            startOrStop.style.backgroundColor = 'green';
            startOrStop.style.border = '2px solid lightgreen';
            startOrStop.innerHTML = 'Start';
            accelarate.style.backgroundColor = "lightgrey";
            decelerate.style.backgroundColor = "lightgrey";
            decelerate.disabled = true;
            accelarateOfReplica = 0;
            accelarate.disabled = true;
            isCarRunning.innerHTML = "Stopped";
            accelarate.style.backgroundColor = "lightgrey";
        }
    };
    accelarate.onclick = () => {
        let buttonColor = window.getComputedStyle(accelarate, '').backgroundColor;
        if (buttonColor === 'rgb(0, 0, 255)') {
            accelarateOfReplica += 10;
            isCarRunning.innerHTML = ` Running with speed ${accelarateOfReplica} Kmph`;
            if (accelarateOfReplica !== 0) {
                decelerate.style.backgroundColor = "blue";
                decelerate.disabled = false;
            }
            else {
                decelerate.style.backgroundColor = "lightgrey";
                decelerate.disabled = true;
            }
        }
    };

    decelerate.onclick = () => {
        if (accelarateOfReplica >= 10) {
            accelarateOfReplica -= 10;
            decelerate.style.backgroundColor = "blue";
            if (accelarateOfReplica !== 0) {
                isCarRunning.innerHTML = ` Running with speed ${accelarateOfReplica} Kmph`;
                decelerate.style.backgroundColor = "blue";
                decelerate.disabled = false;
            }
            else {
                decelerate.style.backgroundColor = "lightgrey";
                decelerate.disabled = true;
                isCarRunning.innerHTML = ` Running`;
            }
        }
    };
};

//Write your javascript logic here
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
