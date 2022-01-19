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
