const redColourSkeleton = document.getElementById('red');
const greenColourSkeleton = document.getElementById('green');
const blueColourSkeleton = document.getElementById('blue');

class colorObject {
    constructor(red, green, blue) {
        this.redColourSkeleton = red;
        this.greenColourSkeleton = green;
        this.blueColourSkeleton = blue;
    }
    redColor() {
        this.redColourSkeleton = 'On';
        this.greenColourSkeleton = 'Off';
        this.blueColourSkeleton = 'Off';
        return this;
    }
    greenColor() {
        this.redColourSkeleton = 'Off';
        this.greenColourSkeleton = 'On';
        this.blueColourSkeleton = 'Off';
        return this;
    }
    blueColor() {
        this.redColourSkeleton = 'Off';
        this.greenColourSkeleton = 'Of';
        this.blueColourSkeleton = 'On';
        return this;
    }
}

const colorObjectInstance = new colorObject();

setInterval(() => {

}, 3000);
