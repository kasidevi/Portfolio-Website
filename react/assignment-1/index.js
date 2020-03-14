// Write your React Code here
/*global ReactDOM*/
const rootElement = document.getElementById('root');

//problem-1
const strikeThrough = {
    text: 'ReactJs is not widely used',
};

function Strikethrough(props) {
    return <p className={props.className}>{props.text}</p>;
}
const givenEle = <Strikethrough className = "strike-through" text={strikeThrough.text}/>;
ReactDOM.render(givenEle, rootElement);

//problem-2
const rootElement1 = document.getElementById('root1');

let images = {
    imageUrl: 'assets/koru-sprial-shape.jpg'
}

function StandardImageView(props) {
    return <img className='standard-img' src={images.imageUrl}/>;
}

function RoundedCornersImageView(props) {
    return <img className='rounded-img' src={images.imageUrl}/>;
}

function CircularImageView(props) {
    return <img className='circular-img' src={images.imageUrl}/>;
}

function ImageViews() {
    return (<div className='bunch-of-images'>
    <StandardImageView /> 
    <RoundedCornersImageView />
    <CircularImageView />
    </div>);
}
const differentImages = (
    <ImageViews />
);
ReactDOM.render(differentImages, rootElement1);

//problem3
const rootElement2 = document.getElementById('root2');

function SuccessMessage() {
    return <div className='success-message'>success Message</div>;
}

function WarningMessage() {
    return <div className='warning-message'> warning Message</div>;
}

function InfoMessage() {
    return <div className='info-message'>info Message</div>;
}

function ErrorMessage() {
    return <div className='error-message'>error Message</div>;
}

function AlertMessage(props) {
    return (<div className='all-messages'>
    <SuccessMessage />
    <WarningMessage />
    <InfoMessage />
    <ErrorMessage />
    </div>);

}
const messages = (
    <AlertMessage />
);
ReactDOM.render(messages, rootElement2);
