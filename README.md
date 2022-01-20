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
