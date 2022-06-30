# React

material design for react<br>
automation testing using selenium<br>


<pre>
React js VS React Native?


<b>React Native.</b> React Native is an open-source JavaScript framework used for developing a mobile application for iOS Android, and Windows. 
It uses only JavaScript to build a cross-platform mobile app. React Native is same as React, but it uses native components instead of using web components as building blocks.

<b>React JS</b> - often simply referred to as just “React” - is a JavaScript library designed for developing the view layer for mobile and web-based applications. 
</pre>

React & Devops first<br>
Selenium in the end.

<h3>Naresh It course material</h3>
<pre>
ReactJS Course Content
Top-Level Content

    JavaScript – Basics and In-depth
    React – Basics and In-depth
    Node – Basics
    React with Node

JavaScript

    Basics of JavaScript.
    JavaScript in depth.
        Creating classes
        Creating private/public/global fields
        Creating private/public/global functions
        Dynamic rendering with JavaScript
        Events

React

    Introduction to React
    Original DOM vs Virtual DOM
    React Components
    React Components with JSX
    React Components with ES6
    Props and state

Node

    Basics of Node and Installation.
    Introduction to Npm
    Adding and removing modules
React with Node

    Creating an application using Create React App.
    Life Cycle
    Debugging
    Default values
    SetState in depth
    Creating Forms
    Creating Table
    Handling Events
    Applying Filters
    JSX in depth
    Validations
    Applying Styles
    Backend calls
    Stateful Components
    Stateless Components
    Local Storage
    Routing
        Basic Routing and Passing Params
        Hyperlinks
    Master Pages
    Reconciliation
    Creating Reusable Components
    React.Component vs React.pure Component
    Composition vs Inheritance
    Code Reusability and Optimization
    Fragments
    Bundling
    Deploying
Integration of 3rd party Modules

    Google Maps
    Bootstrap Controls
    Material UI
    Toast Messages for notifications

Others

    Other Debugging Options
    Developer Tools
    Current Applications developed in React
    Future of React.
    Introduction to Starter Kits
    Integration with other libraries
</pre>

<h1>Reactjs</h1>

[<h2>1 Introduction</h2>](#one)

------------------------------------------------------------------------------------------------------------------------------------------------

<a name="one"><h2>1.1 Course Description</h2></a><br>

Npm vs Npx?
<p>
They are package manager just like pip in python. Npx does not save packages it run only once but npm save packages inside our computer.</p>
<p>app.js is not html it is jsx(javascript syntax extension).</p>

<h3>Creating React App</h3>
<pre>
npx create-react-app my-app
cd my-app

//starting app
npm start
</pre>

<h3>To add bootstrap in react</h3>
<pre>
Just include the script and css of bootstrap inside index.html
We can also use bootstrap react website: https://react-bootstrap.github.io/getting-started/introduction
</pre>

<h3>Creating Components</h3>
<pre>
Step1: remove the default react code in App.js and replace it with empty tags
<>
</>

Step2: inside (src) -> create (MyComponents) folder -> Headers.js
Create a navbar of your website

Step3: include this newly created component (Headers) inside App.js 
import Headers from "./MyComponents/Headers"
Also inside the App() function
<>
   &lt;Headers/&gt;
</>
</pre>

<h3>Run React App</h3>
To run the application use:
go inside the app and use $ npm-start

<h3>Short cut in vs code</h3>
Use rfc for react functional component
User rafc for react arrow functional component
any one of them and press enter

<h3>Props in react:</h3>
<p>This is used to pass data from parent component to child component</p>
<pre>
App.js
&lt;Headers title="MyTodos"/&gt;

To pass this title in Headers component we'll use props

Headers.js
step1: 
pass props inside the parameter 
export default function Headers(props)

Step2:
where ever we need this title we can use props.title:
&lt;a class="navbar-brand" href="#"&gt;{props.title}&lt;/a&gt;

O/p: this will change the title whic we give in App.js in our Header.js
</pre>

<h3>Passing boolean value</h3>
<pre>
Suppose there is a requirement where we need to show searchbar in Headers component only when it is true in App.js

App.js
&lt;Headers title="MyTodos" searchBar={true}/&gt;

Header.js
props.searchBar? &lt;form class="d-flex"&gt;
        &lt;input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/&gt;
        &lt;button class="btn btn-outline-success" type="submit"&gt;Search&lt;/button&gt;
      </form>: ""}
      
Here if it is true show the form which is after questionmark that stmt is true and if false show nothing the invertedcomma ""
</pre>

<h3>Type checking(using propTypes)</h3>
<pre>
step1: import it
import PropTypes from 'prop-types'

Step2: outside the return statement of Header.js

Headers.prototype = {
  title: PropTypes.string
}

Step3: 
&lt;Headers title={45} /&gt;


O/p: this will show the warning in console that we've created title string type and gave number
So it does the type checking, we can avoid it at local env so it does'nt create problem at production.
</pre>

<h3>Default value(using defaultProps)</h3>
<pre>
App.js
&lt;Headers /&gt;
App.js has no title value given here, if here no title is given we can give the default title

Headers.defaultProps = {
  title: "AddTitle"
}

always give default value on top of type checking, or may overwrite the values. 

O/p: now it'll show AddTitle instead of no value.
</pre>

<h3>To make a field required</h3>
<pre>
Headers.prototype = {
  title: PropTypes.string.isRequired
}

Now we made title required if we don't give its value in App.js we'll get warning on console.
</pre>

<h3>Running the react file</h3>
can be run using npm start or yarn start

<h3>How react app works:</h3>
<p>First index.html run and it search for elements which has id=root, so we have root in index.js and then ReactDOM.render which is present inside index.js renders/run App.js and in App.js we can have many different components</p>

using the rfce(react functional component with exports helps us to create basic code for functional component with extension). Or rafce(for arrow function).

Understanding this simple component:
<pre>
A component should have these 3 things

Step1: this import is not required in 17.0.2 version and i am using this version
// this is usefull for jsx, jsx(javascript syntax extension), the html type look is called as jsx.
import React from 'react';

Step2:
// it should have a function which returns a jsx
function App() {
  return <div></div>;
}

Step3:
// to import it in html file
export default App;

</pre>

<h3>What is jsx?</h3>
<p>It means ab hum html jaise dikhne wale part me javascript b use kar skte h.</p>
<pre>
Rules in jsx:

1)It always return a single element it can be div or react fragment(&lt;React.Fragment&gt; &lt;/React.Fragment&gt; OR &lt;&gt;).
cuz we can only return one element using jsx and we can either use div or blank this &lt;&gt; &lt;/&gt;

so this function can return only one div or blank this &lt;&gt;
export default function Footer() {
  return &lt;div&gt;hey</div>;
}


This function will return error
we cannot write like 
 return &lt;div&gt;hey&lt;/div&gt; &lt;div&gt;hey&lt;/div&gt;;
 
But we can take div inside the main div, like this: this'll run with no error.
&lt;div&gt;
	&lt;div&gt;hey&lt;/div&gt;
&lt;/div&gt;

2)class should be className
cuz class is already reserver in javascript in oops.

3)Tags which does not have closing tag as in img
this tags should be closed using &lt;/img&gt; or simple add slash / at the end of the tag.

3)use camelcase for attributes
some attributes as in classname,onclick these should be className, onClick
second letter must be capital

</pre>

<h3>Nested Component</h3>
<pre>
Here we created a function which is basically a component

export default function Footer() {
  return <>
  hey <MyName />
  </>;
}

const MyName = () => {
    return <h1>Fareen Ansari</h1>
}

Likewise we can create many components, just like this 
</pre>

<h3>Creating new app</h3>
<p>npx create-react-app app_name</p>

<h3>Adding style</h3>
In this we cannot use the inline styling like we do in inline css instead we can do 2nd Method for inline style.
<pre>
Method 1:
using the css and className
// here ./ referes to current folder like . for root folder in python

import "./style.css"

export const Restorant = () => {
  return <div className="menustyle">Restorant works</div>;
};


Method 2:
  return <div style={{color:"red"}}>Restorant works</div>;

Method 3:
export const Restorant = () => {
  const myStyle = {color:"red"}
  return <div style={myStyle}>Restorant works</div>;
};

</pre>


<pre>
react document


Npm vs Npx?
<p>
They are package manager just like pip in python. Npx does not save packages it run only once but npm save packages inside our computer.</p>


Extra:
Developer tool

Project:
E-commerce
Resume making

Some basic functionality:
CRUD
Component
Authentication(login/logout)
Reading data using API
Session


----------------------------------------------------------------------

<h3>Components in react</h3>
<pre>
In react everything is component. 

<b>Basic structure of the react app</b>
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<>
	
	</>
);


<b>Creating a basic component</b>
Rule: EVery component must start with capital letter.

Step 1:
inside src create a component Header.js

Step 2: create a code for component
using normal function:

import React from 'react';

function Header(){			//Header must be same as your component name
	return
	<h1>This is header component</h1>;
}

Step 3: to make this component visible 
To use this component in index.js then we should export it and import it in App.js

export default Heading;

Step 4: import it in App.js
import Header from "./Header"

ReactDOM.render(
	<>
		<Header></Header>
		     OR
		<Header />
	</>;

Complete code:
<pre>
import React from 'react';

function Header(){		
	return (
		<h1>This is header component</h1>
	);
}

export default Heading;

</pre>
 
</pre>

<h1>Props</h1>
<pre>
1)props short for property, also allow component dynamic
2)if we want to share the name in header components we can use props
3)It is just an object which contain attribute and values which is paased in parent component
4)A component can have many props

Consider it as a function where we create object and pass props for accessing


Step 1: in App.js
function App() {
  return (
    <>
    <Header name="Created by Fareen" /> 
    <Header name="Created by Annu" /> 
    </>
  );
}

Step 2: to retrive these values
in Header component

function Header(props){	
	console.log(props)	
	return (		
		<div>
			<h1>Component {props.name}</h1>			
		</div>
	);
}


<b>Passing multiple props</b>
App.js
<Header name="Created by Fareen" age="23" /> 

Header.jsx
<h1>Component {props.name} & age is {props.age}</h1>			


<b>Passing child property</b>
App.js
<Header name="Created by Fareen" age="23" > 
      <p>This is only for component created by Fareen</p>
</Header>
    
Header.jsx
<h1>Component {props.name} & age is {props.age}</h1>
<p>{props.children}</p>	    
    
    
<b>Using class components</b>    
App.js
<Header name="Created by Fareen" age="23" />

Header.jsx
class Welcome extents Component {
	render(){
		<h1>Component {this.props.name} & age is {this.props.age}</h1> 
    	}
}
export default Welcome    
    
NOTE: props are immutable, its value cannot be changed

Complete code:
<pre>
App.js
function App() {
  return (
    <> 
    <Header name="Created by Fareen" age="23" > 
      <p>This is only for component created by Fareen</p>
    </Header>
    <Header name="Created by Annu" /> 
    <Footer />
    </>
  );
}

function Header(props){	
	console.log(props)	
	//props.name = "Annu"		will throw an error cause its immutable
	return (		
		<div>
			<h1>Component {props.name} & age is {props.age}</h1>			
		</div>
	);
}

</pre>
</pre>

<h1>States</h1>
<pre>
props vs state:

Example we want to change the value from Welcome visitor to thanks for subscribing on click of the button we'll use state cuz,
Once the props passed as welcome visitor it can never be changed

1)It is maintained inside the same component where we have to use it.
2)<b>You can't use Hooks inside a class component</b>, but you can definitely mix classes and function components with Hooks in a single tree. Whether a component is a class or a function that uses Hooks is an implementation detail of that component.
3)<b>Don't call Hooks inside loops, conditions, or nested functions.</b> Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders.

Note: always remember to import useState hook

Syntax:
const [count, setCount] = userState(4)
count: current state
setCount: update state

Example: increment and decrement the values on click of the button:

First way:
//this will run every time our component render on browser
function InitiaCount() {
	console.log('run function')
	return 4
}


Second way:
function StateHook(){	
	const [count, setCount] = useState(InitiaCount())
	
//this will run only once when component render
function StateHook(){	
	const [count, setCount] = useState(() => {
		console.log('run function')
		return 4
})

So if we want to run only once when our component renders, then use Second way

Complete code:
<pre>
import { useState } from 'react';


//this will run every time our component render on browser
/*
function InitiaCount() {
	console.log('run function')
	return 4
}
*/

function StateHook(){	
	const [count, setCount] = useState(4)	
	const [theme, setTheme] = useState('blue')

	function decrementCount(){
		/*setCount(count - 1)  //this is not the correct way we can use function os setCount
		
		//if we use again nothing happens
		setCount(count - 1)  
		*/
		setCount((prevCount) => prevCount -1 )

		//if we use again we get 2 minus
		setCount((prevCount) => prevCount -1 )
	}

	function IncrementCount(){
		setCount((prevCount) => prevCount + 1)
		setTheme('red')
	}

	return (		
		<div>
			<button onClick={decrementCount}>-</button>
			<span>{count} {theme}</span>
			<button onClick={IncrementCount}>+</button>
		</div>
	);
}
</pre> 	


diagram:
<pre>


<h1>Higher Order Component(HOC)</h1>
<pre>
To pass one component as props of another component
Consider the above example, if we have 3 counters all of 3 in different color
So if i give :
<span style={{backgroundColor: "red"}}>{count} </span>

then all 3 will have red color, if i want all 3 in different color then i can use HOC

EXample:
</pre>


<h1>HTTP(this need forms and routing & hooks first)</h1>
<pre>
Axios is javascript library can be used with anything not just with react
There are libraries for http requests as in Axios, FetchApi etc

<b>Making a get request using axios package</b>
Step 1: install package
$ npm install axios

Step 2: import axious package
import axios from 'axios'

Step 3:
</pre>

<h1>React Hooks</h1>
<pre>
1)useState Hooks: this is used to change the state of the web page as in if data changes change it accordingly on the web page.
In vanilla js we have to get element and do all the stuff but in react we have state hook which does the same for us.

If we do normal counter which counts the value on click of the button it wont changes the value on count tho if we console log it'll change, we can solve this useing state hook

Creating stateehook
const [initialVal, function] = useState(initialVal);
function accept one parameter which is keep updating
Example:
const [initialVal, updateFun] = useState(0);
for(i in [1,2,3]{ 
	updateFun(i)
}


2)useReducer Hook: it is alternative/replacement of stateHook, it is usefull when we have many states on the same function 

Example: useReducerHook in react git
In this example we want to use two states at the same onclick, 
when clicked:
1)The value increment by 1 &
2)The value of 2nd state change alternate(on click display and hide and this repeats).

useState Hook is usefull when we have many states at the same click

3)useEffect Hook: called whenever page rerender
Whenever a page renders show hello world on console. Usually used when the page is render first

Example: use api to get data and display when page renders, in useEffectHook example:
when we the page renders useEffectHook called twice this is bcoz it first takes the initial value which is "initial email" and then it calls the useEffect and it render the api called.
So to avoid this use empty array 

4)useRef Hook: usefull in accessing the current values of the input and manuplauting the data inside input box as in clear the data inside the input on click of the button or focus on input box on click of the button etc.

It return the object as in {current: input}
So to access the property of input box
n1Ref.current 
n1Ref.current.value  //to access value

5)useLayout Hook: to layout something when page renders it is kind of similar to useEffect hook

useEffect VS useLayoutEffect 
useLayout is called before useEffect called
Conside the example useLayout hook to understand: 
We've useEffect which change the current value of the inputbox
Also we've useLayoutEffect which just console.log the current value of the inputbox 
So when page renders it first called useLayoutEffect and console the current value and then it call useEffect and changed the value of input box.

6)useImperativeHandler hook:
this is usefull when we called a ref from parent component, as in there is a button in child component which is getting called from parent component

7)Context Hook: useful when we have many states, we can't pass all of them as props(we can but its not a good idea) one way is using context hook
It hepls to maintains state v. easily
A context is a collection of states

Example:
one component takes the value from inputbox
and other component display the value of the inputbox

8)Memo hook: it is useful when we have to compute some thing example: 
we have called an api which calls longest comment from the all comments using computation logic we've written
And a toggle button 
so whenever we click the toggle button everything recomputed the findlongestname also run every time 
toggle runs eventho toggle is not even related to findlongestname still it is calculating everything

In the example whenever we click the toggle button it returns this was computed on console which is written inside the findlongestname 
To avoid findlongestname to run again and again w ecan use memo hook


9)useCallback hook:
This is same as usememo the difference is we're storing the function and not the data

Using the call back hook the function does not called every time a state changes, it only called when data changes. 

A FUNCTION IS RE-CREATED EVERY TIME A STATE CHANGE.

</pre>


<h1>React Routing</h1>
<pre>
We need react routing package install it usnig: 
$ npm install react-router

Make sure tht react version is added  inside package.json if not install again restart project do whatever.

For history/ navigation we have to use useNavigate hook
</pre>


<b>react-router vs react-router-dom</b>
<p>
eact-router contains all the common components between react-router-dom and react-router-native. When should you use one over the other? If you're on the web then react-router-dom should have everything you need as it also exports the common components you'll need. If you're using React Native, react-router-native should have everything you need for the same reason. So you'll probably never have to import anything directly from react-router. 
</p>


<h1>Redux</h1>
<pre>
It is used to manage the state of the app
1)When we have complex hirarchy where the down component needs a state so we cannot pass state in lowest level of hirarchy we can but it'll be complex process

2)And redux create a state store where all the states are stored as global and any component can access them and it's created on highest level on hirarchy.

3)
App.js
|
|
 ---->Login.js
 ---->Profile.js
 
 They are siblings of each other
 It is not possible to pass data from one component to another, we can using props but redux is easy. To make it work without redux: we have uname and pswd in Login.js so that all we can pass as props to App.js and then from App.js as props to Profile.js. 
 But with using redux we store state as global so any components can access it.
 
4)All the states will be in index.js, which will be global and can be accessed by any components. We'll create a single store which will contain all the states.
 
Step 1: install redux
$ npm install redux react-redux @reduxjs/toolkit

This means we are installing two packages(react-redux @reduxjs/toolkit) that is the way installing more than 2 libraries in react 

Step 2:

every component inside the Provider will have access to the store

NOte: dont forget to restart the server

PENDING

diagram:
name: redux
</pre>

<h1>Virtual DOM</h1>
<pre>
1)In big projects we use large amount of DOM manupulation which slows the performace of the app. To address this prob we use virtual DOM.
2)Virtual DOM is just the blueprint of the Actual DOM as in moving a bed from the hall to bedroom in blueprint but not actually.
3)Virtual DOM object has the same power and has properties and methods like the DOM object.
4)Manupaluating a Actual DOM is slower but manupaluating the Virtual DOM is much faster than actual DOM.

diagram:
Conside a Actual DOM in blue image and React Dom(virtual dom) in yellow
 whenever any component changes it updates the entire virtual DOM it does it very quickly.
 
Once the virtual dom updated it compares the actual dom's snapshot(blue image) with pink image(virtual dom)

React maintain two virtual DOM one with updated state virtual DOM and other previous state virtual DOM and then it react see the actual dom and change only those elements which are changed.

React can only update the necessary part of the DOM.

diagram:
This process is called as reconciliation
name: virtual dom
 
</pre>


<h1>Lifecycle methods in react js</h1>
<pre>

</pre>

import React, { useState } from 'react'
import { Axios } from 'axios';


export const AxiosGet = () => {
    const [joke, setJoke] = useState("");

        function getJokes() {
            fetch("https://icanhazdadjoke.com/")
            .then((response)=> response.json())
            .then((data) => {
                    setJoke(data.joke);
                });
            };    
                return (
                    <div>
                        <h1>{joke}</h1> <br/>
                        <button onClick={getJokes}>Next</button>
                    </div>
                );
        };

   
   
To uninstall the pacjage in react
Same like we install a package
$ npm uninstall react-router


Applying stylesheet:(remove alredy give style notes on git and add this)
Method 1: using external stylesheet

create a style.css in .src
.primary{
    color:blue
}
.bg-color{
    background-color: red;
}

import './style.css'

&lt;h1 className="primary bg-color"&gt;Products&lt;/h1&gt;

Method 2: inline stylesheet
we give this as an object

below the imports write
const mystyle={
    fontSize: '190px',
    backgroundColor: 'yellow'
}

&lt;h1 className="primary bg-color" style={mystyle}&gt;Products&lt;/h1&gt;

OR 

&lt;div style={{color:"red"}}&gt;

Here both external and inline have background color property defined, so inline will get the priority and bg color will be yellow

Method 3:using style modules

Example: we have style.css defined in App component so that style can be used with all the child components. So if we define same class it may conflict to avoid that we can use css module. Using css module we can use that class for that particular component only.

App.js
import styles from './appStyle.module.css'


Create appStyle.module.css on the same location where App.js is
.success{
    color: green
}

App.js
&lt;h1 className={style.success}&gt;Products&lt;/h1&gt;

If i use className={style.success} in another component it'll give error so we cant use styles.success in another components

Remember to gave name which ends with .module.css

Public images:
In your component just give image path. By default react will know its in public directory.

&lt;img src="/image.jpg" alt="image" /&gt;


Creating react app:
npx create-react-app my-app
</pre>
</pre>
</pre>


What is props in react?
<pre>
What are props in React? We use props in React to pass data from one component to another (from a parent component to a child component(s)). Props is just a shorter way of saying properties.
</pre>

What are states in react?
<pre>
This is used to change the state of the web page as in if data changes change it accordingly on the web page.A component's state can change over time; whenever it changes, the component re-renders.
In functional component we can use useState hook for state maintaining.
</pre>

What is JSX?
<pre>
JavaScript XML
</pre>

Can web browsers read JSX directly? 
<pre>
For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel
</pre>

What is the virtual DOM?
<pre>
React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.
</pre>

Why is there a need for using keys in Lists?
<pre>
A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists
It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered
</pre>

Components in react?
<pre>
1)React appln is created with different components
2)There are 2 components functional and class.
</pre>

What is the use of render() in React?
<pre>
It is required for each component to have a render() function. This function returns the HTML, which is to be displayed in the component.
It is for class component.
</pre>

What is a higher-order component in React?
<pre>
A higher-order component acts as a container for other components. This helps to keep components simple and enables re-usability. They are generally used when multiple components have to use a common logic.
</pre>

Explain the lifecycle methods of components.
<pre>

</pre>

QUESTIONS ON REDUX:

What is Redux?
<pre>
Redux is an open-source, JavaScript library used to manage the application state.
It is used for the entire application’s state management
When we have components all the end of the hirerchy calling state from topmost component is a bit difficult so we can use redux in that case.
</pre>

What is React Router?
<pre>
1)React Router is a routing library built on top of React, which is used to create routes in a React application. 
2)Also used for building single page appln.
3)Using react-router, firse there will be Router and the Routes and then Route
</pre>

Styles in React?
<pre>
1))Using external stylesheet by giving class name, this is same like we use in css.

2)Styles given on top eg:
const mystyle ={
	prop: "val",
	}

3)Inline styles eg: style={{prop: "val"}}
4)Using style module

</pre>

Why React uses className over class attribute?
<pre>
class is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principal reason why React uses className instead of class. Pass a string as the className prop.
</pre>
