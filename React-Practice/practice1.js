/*global ReactDOM*/
/*global React*/

// function formatName(user) {
//   alert('formatName');
//   return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
//   if (user) {
//     alert('greetings');
//     return <h1>Hello,{formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// const user = {

//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {getGreeting(user)}  gi!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
//_________________________
// const user = {
//   avatarUrl: '../js-assignments/assignment-3/assets/on.png'
// };
// const element = <img className='image' src={user.avatarUrl} />;
// ReactDOM.render(element, document.getElementById('root'));
//_________________________

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);
//_________________________

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Devi" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
//_________________________

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Devi" />
//       <Welcome name="Saru" />
//       <Welcome name="Jaya" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
//__________________________

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img
//           className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Devisri',
//     avatarUrl: 'https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=fabian-irsara-67l-QujB14w-unsplash.jpg',
//   },
// };
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//   document.getElementById('root')
// );

//above code divided into functions
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img
//       className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">{props.user.name}</div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//   document.getElementById('root')
// );
//__________________________________

// let count = 0;
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };

//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     count += 1;
//     alert(count);
//     this.setState({
//       date: new Date()
//     });
//     if (count === 5) {
//       this.componentWillUnmount();
//     }

//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// function FormattedDate(props) {
//     return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// class Clock extends React.Component {
//     constructor(props) {
//         //alert('constructor');
//         super(props);
//         // this.state = { date: new Date() };
//         this.state = { counter: 1 };
//     }


//         componentDidMount() {
//             //    alert('mount');
//             this.timerID = setInterval(
//                 () => this.tick(),
//                 1000
//             );
//         }

//     //     componentWillUnmount() {
//     //         clearInterval(this.timerID);
//     //     }

//     //     tick() {
//     //         //      alert('tick');
//     //         this.setState({
//     //             date: new Date()
//     //         });
//     //     }

//     render() {

//         //     alert('render');
//         return (
//             <div>
//         <h1>Hello, world!{this.state.counter}</h1>
//         {/*<FormattedDate date={this.state.date} />*/}
//       </div>
//         );
//     }

//     this.setState(function(state, props) {
//         return {
//             counter: state.counter + props.increment
//         };
//     });


// }

// ReactDOM.render(
//     <Clock increment={1} />,
//     document.getElementById('root')
// );
//______________________________

//ERROR HANDLINGS
// function ActionLink() {
//     alert('o');

//     function handleClick(e) {
//       //  alert('i');
//         //  e.preventDefault();
//         console.log('The link was clicked.');
//     }

//     return (
//         <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//     );
// }
// ReactDOM.render(<ActionLink />, root);
//______________________________

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//      //   alert('constructor');
//         this.state = { isToggleOn: true };

//         // This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//      //   alert('handleClick');
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }

//     render() {
//   //     alert('re');
//         return (
//             <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//         );
//     }
// }

// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );
//__________________________
// class LoggingButton extends React.Component {
//     handleClick() {
//         console.log('this is:', this);
//     }

//     render() {
//         // This syntax ensures `this` is bound within handleClick
//         return (
//             <button onClick={() => this.handleClick()}>
//         Click me
//       </button>
//         );
//     }
// }
// ReactDOM.render(
//     <LoggingButton />,
//     document.getElementById('root')
// );
//______________

// function UserGreeting(props) {
//     return (<div><h1>Welcome back!</h1>
//   <h1>devisri</h1></div>);
// }

// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }

// ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// );
//_______________________
//DOUBT 
// class LoginControl extends React.Component {

//         constructor(props) {

//                 //  alert('logincontrol constructor ');
//                 super(props);
//                 this.handleLoginClick = this.handleLoginClick.bind(this);
//                 this.handleLogoutClick = this.handleLogoutClick.bind(this);
//                 this.state = { isLoggedIn: false };
//         }

//         handleLoginClick() {
//                 //   alert('handleLoginClick');
//                 this.setState({ isLoggedIn: true });
//         }

//         handleLogoutClick() {
//                 //    alert('handleLogoutClick');
//                 this.setState({ isLoggedIn: false });
//         }

//         render() {
//                 //    alert('render');
//                 const isLoggedIn = this.state.isLoggedIn;
//                 console.log(isLoggedIn);
//                 let button;

//                 if (isLoggedIn) {
//                         //    alert('if');
//                         button = <LogoutButton onClick={this.handleLogoutClick} />;
//                 }
//                 else {
//                         //     alert('else');
//                         button = <LoginButton onClick={this.handleLoginClick} />;
//                         console.log(button);
//                 }

//                 return (
//                         <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//                       </div>
//                 );
//         }
// }

// function UserGreeting(props) {
//         return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//         //  alert('else greetings');
//         return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//         //    alert('greetings');
//         const isLoggedIn = props.isLoggedIn;
//         if (isLoggedIn) {
//                 //      alert('if greetings');
//                 return <UserGreeting />;
//         }
//         return <GuestGreeting />;
// }

// function LoginButton(props) {
//         //  alert('LoginButton');
//         return (
//                 <button onClick={props.onClick}>
//               Login
//             </button>
//         );
// }

// function LogoutButton(props) {
//         //   alert('LoginButton');
//         return (
//                 <button onClick={props.onClick}>
//               Logout
//             </button>
//         );
// }

// ReactDOM.render(
//         <LoginControl />,
//         document.getElementById('root')
// );

// function WarningBanner(props) {
//     // console.log(props.warn);
//     if (!props.warn) {
//         return null;
//     }

//     return (
//         <div className="warning" style={{backgroundColor:'red'}}>
//       Warning!
//     </div>
//     );
// }

// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { showWarning: true };
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }

//     handleToggleClick() {
//         this.setState(prevState => ({
//             showWarning: !prevState.showWarning
//         }));
//     }

//     render() {
//         return (
//             <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Page />,
//     document.getElementById('root')
// );

//js exam2
function welcome(firstName) {
    if (firstName == ["Ricky"]) {
        return "Hey Welcome";
    }
    else {
        return "Who are you?";
    }
}
console.log(welcome(["Ricky"]));
