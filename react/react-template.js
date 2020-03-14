/*global ReactDOM*/
// const rootElement = document.getElementById("root");
// const element = <div>Hello React!
//        <h1>hello devi</h1>
//       </div>;
// ReactDOM.render(element, rootElement); // Write your JSX code here  ReactDOM.render(element, rootElement);

const rootElement = document.getElementById('root');
const name = 'devi';
const element = <div>
<h1>List of items</h1>
<p  className='userName'>hello {name}! (this line styling done by "className")</p> {/*create className to apply styles in css*/}
<p>creating {2+2} lists</p>
<ul>
<li style={{color:'red'}}>hello this is devi (apply red color in inline)</li>
{/*<li>use the syntax to wrap around the comment text</li>*/}
<li>hello this <br/>is sri (here using 'br/' tag)</li>
</ul>
</div>;
ReactDOM.render(element, rootElement);
