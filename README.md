# React.js Learning Roadmap

## 1. Introduction to JavaScript and ES6

Before diving into React, ensure you have a solid understanding of JavaScript fundamentals, including:

- **Variables and Data Types**
- **Functions**
  - Arrow functions
  - Regular functions
- **Arrays and Objects**
- **Loops and Conditionals**
- **DOM Manipulation**
- **ES6 features**
  - let/const
  - Arrow functions
  - Template literals
  - Destructuring
  - Spread/rest operators
  - Classes
  - Modules

## 2. React Basics

- **What is React?**: Learn the purpose and advantages of React in building user interfaces.
- **JSX**: Understand JSX syntax (mix of JavaScript and HTML).
- **Components**: Learn about functional and class components.
- **Props**: Learn how to pass data between components using props.
- **State**: Learn about the concept of state, managing component data, and how to update it using `useState`.
- **Event Handling**: Understand how to handle user interactions like clicks, input changes, etc.

## 3. Intermediate React Concepts

- **useEffect Hook**: Understand side-effects and how to use the `useEffect` hook for fetching data, subscriptions, or manually interacting with the DOM.
- **Conditional Rendering**: Learn how to conditionally render components.
- **Lists and Keys**: Rendering lists of data using the `map()` method and managing unique keys for list items.
- **Forms**: Learn how to work with forms, handle form submission, and manage input fields.

## 4. Advanced React Concepts

- **Context API**: Learn how to manage global state in your app without prop drilling.
- **useReducer Hook**: Understand when and how to use the `useReducer` hook for complex state management.
- **Refs**: Learn how to access and manipulate DOM elements directly with `useRef`.
- **React Router**: Learn how to implement client-side routing using React Router for multiple pages.
- **Error Boundaries**: Learn how to handle JavaScript errors in components with error boundaries.

## 5. Performance Optimization

- **React.memo**: Learn how to prevent unnecessary re-renders with `React.memo`.
- **useMemo and useCallback**: Understand how to optimize the performance of complex components.
- **Code Splitting**: Learn how to split your application into smaller, more manageable pieces (e.g., using `React.lazy`).

## 6. Styling in React

- **CSS-in-JS**: Learn about styled-components or emotion for styling components in React.
- **CSS Modules**: Learn how to scope CSS in React using CSS modules.
- **Inline Styles**: Learn how to use inline styles for dynamic styling in React.

## 7. React Hooks (Deep Dive)

- **Custom Hooks**: Learn how to create your own reusable hooks.
- **useLayoutEffect**: Understand when to use `useLayoutEffect` over `useEffect`.
- **useContext**: Learn how to access values in context without wrapping components in consumers.

## 8. State Management

- **Redux**: Understand state management with Redux (actions, reducers, store, middleware).
- **Redux Toolkit**: Learn how to use the Redux Toolkit to simplify the Redux workflow.
- **MobX**: Learn alternative state management solutions like MobX (optional).
- **Recoil**: Learn Recoil, an alternative for state management in React (optional).

## 9. Testing

- **Unit Testing**: Learn how to write unit tests for React components using libraries like Jest and React Testing Library.
- **Test-Driven Development (TDD)**: Understand the TDD approach in React apps.

## 10. Deploying React Applications

- **Build Process**: Learn how to bundle and optimize your React app using Webpack or other build tools.
- **Deployment**: Learn how to deploy React applications on platforms like Netlify, Vercel, AWS, or Firebase.
- **CI/CD**: Integrate Continuous Integration and Continuous Deployment pipelines.

## 11. React Ecosystem and Advanced Topics

- **Next.js**: Learn how to build server-side rendered (SSR) React applications with Next.js.
- **Gatsby**: Learn how to build static websites with React using Gatsby (optional).
- **GraphQL with React**: Learn how to interact with GraphQL APIs in React applications.
- **React Native**: Learn how to build mobile applications using React Native (optional).

## 12. Build Projects

- **To-Do App**: Start with a simple to-do list app to practice basic React concepts.
- **Blog App**: Build a blog app with React, using state, forms, and routing.
- **E-commerce App**: Create an e-commerce site to dive deeper into state management, routing, and more.
- **Real-time Chat App**: Use WebSockets or Firebase to create a real-time messaging app with React.

## 13. Material Design

<hr>

# Installation
- REquired: Node.js(download lts), npm
- node -v, npm -v
- React provides a command-line tool called Create React App to quickly set up a new project with a pre-configured environment. <b>npx create-react-app my-app</b>
- cd my-app
- npm start
- Naming convention recommened: In the React ecosystem and JavaScript in general, project names tend to follow the lowercase with hyphen style, as seen in popular repositories.

# React Intro
- It is not framework it is library.
- It is all about components.

# Project Structure.
- This is basically like vue we get id root from index.html and render(show) its content on dom.
- index.js takes the root element from publick folder of index.html and render it, also index.js has imported App.js content.

# Vs Code entensions
- Javascript ES6 code snippet.
- ES7 react/redux/GraphQl/React-Native snippets.
- rafce(react arrow function with with default in vs code will give component.

# Components
A component should have:
1. We dont need import this after version 17 of react. <b>import React from 'react'</b> In react we can make use of html with js with the help of react module imported above component. Which is called as jsx.
2. Any one functional component.
3. It should always return something.
4. We exporting it so that we can use it on index.js.
```javascript
// Eg
import React from 'react'	// Not needed

const App = () => {
  return (
    <div>
      Hello world
    </div>
  )
}

export default App
```
5. Two components cannot have same name.

<b>Nested Component</b>
```javascript
const App = () => {
  return (
    <div>
      <h1>This is starting page</h1>
      <Loading/>
    </div>
  )
}


const Loading = () => {
  return (
    <div>
      <h1>Loading ...</h1>
    </div>
  )
}

export default App
```

# JSX(JavaScript XML)
Rules:
1. Always return a single element. Below code is not valid. It can be div, section or any element as parent but only one. Or it can be <React.Fragment></React.Fragment> or just <></>
```javascript
import React from 'react'

const App = () => {
  return (
    <div></div>
    <p></p>
  )
}

export default App
```
2. For adding style using class we cant use class as it is reserved in react by oops. we can use className.
3. We need to close every tag in jsx for example <img></img> or <img src="" />. Anyhow it should be closed.
4. For every attribute use camel case, like className which are combination of two words.
5. Auto complete for jsx in vs code -> setting -> top right corner -> editor icon, add following line <b>"emmet.includeLanguages": {"javascript": "javascriptreact"},</b>

# Style
- It is recommended to have seperate style for each component, cuz one single file for every component will clash style name if two component using same style but different body.
- To add inline style we have to use it inside 2 curley braceses and it should also pascal case, i.e backgroundColor.
```html
<h1 className="header" style={{ backgroundColor: "red" }}>This is headers...</h1>
```
- Add bootstrap in react project, go to index.html and add the cdn of bootstrap of css and js.

# useState Hook
- It stores and holds the data/state.
- The useState hook is a fundamental hook in React used to manage state within functional components.
```javascript
const [state, setState] = useState(initialState);

/*
state: This is the current state value. Initially, it will be the value passed to useState().
setState: This is a function used to update the state. You call setState whenever you want to update the state value.
initialState: This is the value you want to initialize the state with.
It can be any data type like number, string, boolean, array, object, or even null.
*/
```
- Example
```javascript
const App = () => {
  const [count, setCount] = useState(1)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Increment </button>
      <h3>Incrememt: {count}</h3>
    </div>
  )
}
```

# useEffect hook
- By default, useEffect runs after every render, but you can control when it runs by providing a second argument, the dependency array.
- Empty dependency array: component will run only once regardless of any state change.
- No dependency array at all: component will render each time any state changes.
```javascript
useEffect(() => {
  console.log("Runs on every render");
});
```
- Syntax:
```javascript
useEffect(() => {
  // Your side-effect logic here

  return () => {
    // Cleanup logic (optional)
  };
}, [dependencies]);
```
- Example:
```jaavscript
useEffect(() => {
  // This runs after every render
  console.log('Component rendered!');
});


// In above code we might see useEffect calling twice and console.log twice, this is cuz of react strict used in index.html
// React Strict Mode is a development-only feature that intentionally calls certain lifecycle methods twice (including useEffect) to help identify potential side effects or issues in your code.
// We can stop this by commenting React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


useEffect(() => {
  // This runs only once when the component mounts
  console.log('Component mounted!');
}, []);  // Empty array means run only once


useEffect(() => {
  console.log('Count updated:', count);
}, [count]);	// Calls every time count value changes.
```

# Calling api and use of map
```javascript
const Vendor = () => {
  const [vendor, setVendot] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/vendor_with_skills/')
      .then((response) => {
        console.log('Response.....', typeof(response.data));
        setVendot(response.data);
      }).catch((error) => {
        console.log('Error.....', error);
      })
  }, []);


  return (
    <div>
      <h1>Response is:</h1>
      <ul>
        {vendor.map((val) => (
          <li key={val.id}>Name: {val.name}</li>
        ))}
      </ul>
    </div>
  )
}
```

# Props
- Props (short for properties) are used to pass data from one component to another in React. They allow components to communicate and share information with each other. Props are read-only and are passed from a parent component to a child component.
- Can pass anything as a props, str, array, object, function etc.
- Always Props are Passed from Parent to Child.
```javascript
// Below ({ vendor }) is destructuring, it takes value from parent as assign it as object to vendor

// VendorCard Component
const VendorCard = ({ vendor }) => {
  return (
    <div>
      <ul>
        {vendor.map((val) => (
          <li key={val.id}>Name: {val.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Vendor Component
const Vendor = () => {
  const [vendor, setVendor] = useState([]); // Fixed typo (setVendot -> setVendor)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/vendor_with_skills/')
      .then((response) => {
        console.log('Response.....', typeof(response.data));
        setVendor(response.data); // Corrected to setVendor
      }).catch((error) => {
        console.log('Error.....', error);
      });
  }, []);

  return (
    <div>
      <h1>Response is:</h1>
      <VendorCard vendor={vendor} /> {/* Pass vendor as a prop */}
    </div>
  );
};
```
- <b>Prop drilling problem</b>:
	- `App` (Parent)
	  - `ComponentA` (Child)
	    - `ComponentB` (Grandchild)
	      - `ComponentC` (Great-Grandchild)
- Now, if you want to pass a piece of data from App to ComponentC, you would need to pass it through ComponentA and ComponentB, even though these two components don't need the data. This can make the code harder to maintain and understand.
- Prop drilling can be handle via Context Api or Redux.
- Passing more than one prop.
```javascript
<Counter counterFunction={incrementCounter} person={person} />
const Counter = ({ counterFunction, person }) => {
  return (
    <div>
      <button onClick={counterFunction}>Click</button>
      <h1>{person.name}</h1>
    </div>
  );
}
```

# useReducer Hook
- The useReducer hook in React is an alternative to useState for managing state in a component. It is particularly useful when the state logic is complex, involves multiple sub-values, or depends on the previous state.
- Syntax & Example:
```javascript
const [state, dispatch] = useReducer(reducer, initialState);

/*
reducer: A function that specifies how the state should be updated based on an action. It takes two arguments:
state: The current state.
action: An object that describes the update.
initialState: The initial state value.
dispatch: A function used to send actions to the reducer. i.e dispatch()

We need to define reducer function which takes state, action parameter.
const reducer = (state, action) => {} 
*/

// Example
const App = () => {
  const reducer = (state, action) => {
    if (action.type === 'incr'){
      return state + 1;
    }else{
      return 0;
    }
  };
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state}</h1>
      <button onClick={() => dispatch({ type:'incr'})}>Click to increment</button>
    </div>
  )
}
```
- For a single component, choose one method for state management to keep the logic straightforward.
- While useReducer is for component-level state, it can be combined with useContext for managing global state.

# contextApi and useContext Hook
- It is used to access the data/state provided by the Context in any component that is a descendant of the Provider.
- So, the Context API sets up the storage and sharing mechanism, while useContext is the tool for accessing that shared data within the component tree.
- For context (heh, get it), useContext is a hook that allows access to data and functions from a parent component within a child component without having to pass props down through layers of children components (aka prop drilling).
- In below code createContext is a contextApi.
- See example here to make use of contextApi with useReducer: https://github.com/fareen341/React/blob/main/useReducer.js
- We can make use of contextApi with normal useState also.
```javascript
// Create a new file with any name, creating store using Context Api

import { createContext, useState } from "react";

// Step 1
export const CounterContext = createContext();      // It is like a warehouse

// Step 2
export const CounterProvider = ({ children }) => {
    // It is storage, which store for example: mobile, laptop, headset etc
    // All the data and all the state of entire project should be here.
    // console.log('Children....', children);
    const [counter, incrStateCounter] = useState(0);
    const increment = () => incrStateCounter(counter + 1);
    return <CounterContext.Provider value={{ counter, increment }}>{ children }</CounterContext.Provider>
}

// Accessing store using useContext hook.
const Home = () => {
  const {counter, increment} = useContext(CounterContext);

  return (
    <>
        <h1>Counter: {counter}</h1>
        <button style={{'backgroundColor': 'pink'}} onClick={increment}>Increment</button>
    </>
  )
}

const App = () => {
  return (
    <CounterProvider>
      <Home/>
    </CounterProvider>
  )
}
```
- In the Context API, children is a special prop that represents the child components nested inside a component. This allows you to wrap components inside a Provider and pass them as children.
- The name of the prop passed from context api and its accessing should be same.

# useMemo Hook
- The useMemo hook in React is used to memoize the result of a computation to optimize performance. It ensures that a computationally expensive operation is recomputed only when its dependencies change, rather than on every render.
- It is used to remember the value and not function unlike useCallBack.
- <b>Avoiding Unnecessary Renders:</b> When a component passes computed data to its children, useMemo ensures that the computed value is not recreated unnecessarily, preventing child components from re-rendering.
- The useMemo hook does not stop re-rendering, but it helps optimize performance by memoizing the results of a computation so that it only recalculates when certain dependencies change.
- Example:
```javascript
// parent component
const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <Counter/>
      <button onClick={increment}>Click</button>
      <h1>Number of times a button clicked {count}</h1>
    </div>
  );
}

// child component
const ExpensiveComponent = () => {
    console.log('This component render...');		// this will run every time cuz, memo hook stores the value not the function	 
    const sum = () => {
        console.log('Sum function called...');		// This will run only once		
        let i = 0;
        for (i=0; i <= 10000000; i++){
            i = i + 1;
        }
        return i;
    }
    // const total = sum();	// when dont use useMemo the function will calculate every time
    const total = useMemo(() => sum(), []);
    return <p>Sum: {total}</p>
};
```

# useCallback
- useCallback is a React hook that returns a memoized version of a callback function. It ensures the function is only re-created when its dependencies change, which can help improve performance in components where passing or re-creating functions might cause unnecessary re-renders.
- It prevent un-necessaru rerendering, be caution using it, cuz if we have code which needs rendering along with rerender, render code wont run cuz it stop re-rendeing.
- The child component only render when the dependency array changes.
- We have to use useCallback with useMemo or React.memo to stop a function re-render, but it is not necessary to use it with them unless you pass function as a props. The function is computationally expensive or its recreation causes unnecessary re-renders.
- Example:
```javascript
// parent
const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Counter handleClick={increment} />
    </div>
  );
};

// child
const Counter = React.memo(({ handleClick }) => {
  console.log('Button re-rendered');
  return <button onClick={handleClick}>Click Me</button>;
});
```

# useRef Hook
- useRef is used to get the refrence of the form, like we do in document.getElementById.
- Example:
```javascript
const App = () => {
  const username = useRef(null);
  const password = useRef(null);
  const saveFornData = (e) => {
    e.preventDefault();
    // Old way
    // const uname = document.getElementById('username');
    // const pswd = document.getElementById('password');

    // New way using ref
    console.log(`Uname: ${username.current.value}, Pswd: ${password.current.value}`);
  }

  return (
    <div>
      <form>
        <input type='text' id="username" ref={username} /><br />
        <input type='text' id="password" ref={password} /><br />
        <button type='submit' onClick={saveFornData}>Save</button>
      </form>
    </div>
  );
}
```

# Difference between React.memo and useMemo
- React.memo checks for the props, if the props REFRENCE changesd then the component re-renders. Every time state changes component re-renders and when it re-render it pass the props which is part of parent component.
- It only change when we pass OBJECT as a props. Cuz object refrences changes on every state changes.
- useMemo and React.memo does not re-renders component unless dependency array changes and in case of React.memo when props changes.
```javascript
// React.memo fails when we pass object in props, in that case we can use useMemo
const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const obj = {
    name: 'mobile',
    price: 1200
  }

  return (
    <div>
      <ExpensiveComponent obj={obj} />
      <button onClick={increment}>Click</button>
      <h1>Number of times a button clicked {count}</h1>
    </div>
  );
}


// child
const ExpensiveComponent = React.memo(({ obj }) => {
  const sum = () => {
      console.log('Sum function called...');
      let i = 0;
      for (i=0; i <= 10000000; i++){
          i = i + 1;
      }
      return i;
  }
  const total = sum();	// when dont use useMemo the function will calculate every time
  // const total = useMemo(() => sum(), []);
  return <p>Sum: {total}</p>
});


// It's rendering even tho we have used React.memo
```

# Difference Between useMemo and useCallback
- useMemo: Memoizes a value.
- useCallback: Memoizes a function reference.

# useLayoutEffect Hook
- useEffect is called when DOM render. useLayoutEffect called before useEffect. This is like created hook in vue js.
- Changing styles or updating the layout before the user sees them.
- useEffect is asynchronious, useLayoutEffect is synchronious.
- When we have more than one useEffect, it'll run in first to last order, if we give useLayoutEffect it'll first run and then complete the sequence from first to last i.e to to bottom.
- Example:
```javascript
const App = () => {
  useEffect(() => {
    console.log('This is first...');
  });

  useLayoutEffect(() => {
    console.log('This is third...');
  });

  useEffect(() => {
    console.log('This is second...');
  });

  return (
    <>
    <h1>App</h1>
    </>
  );
}
```

# React Filter Api Data Example
- In below code use ```javascript onClick={() => filterDesignation(item)} ``` use function inside arrow function, cuz we need to call this function only when click event occurs.
```javascript
import React, { useEffect, useState } from 'react'
import axios from "axios";

const Vendor = () => {
  const [vendor, setVendot] = useState([]);       // initially store the api reponse here, so that when filter it does not change the response data
  const [filteredVendor, setFilteredVendor] = useState([]);    // store filtered data.

  const designation = [...vendor.map((item) => item.profession), 'All'];
  // const designation = ['IT', 'Graphic', 'Dr']
  const filterDesignation = (desg) => {
    if(desg === 'All'){
      setFilteredVendor(vendor);
      return;
    }
    const updatedVendor = vendor.filter((item) => {
      return item.profession === desg;
    });
    setFilteredVendor(updatedVendor);

  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/vendor_with_skills/')
      .then((response) => {
        setVendot(response.data);
        setFilteredVendor(response.data);
      }).catch((error) => {
        console.log('Error.....', error);
      })
  }, []);


  return (
    <div>
      <h1>Response is:</h1>
      <p>
        {designation.map((item) => (
          <span style={{marginRight: '10px', border: '1px solid black', padding: '10px'}} key={item} onClick={() => filterDesignation(item)}>
            {item}
          </span>
        ))}
      </p>

      <ul>
          {filteredVendor.map((val) => (
          <li key={val.id}>Name: {val.name}</li>
          ))}
      </ul>
    </div>
  )
}

export default Vendor
```

# Redux
- It is used for state management.
- In react data flows from parent to child. It has State, Action, Reducer.
- You can only have <b>single store</b> in a redux application.
- Every redux store has a single root render function.
- Installation <b>npm i redux react-redux</b>
- To debug redux app we can use Redux Dev Tools. See below in extensions topic.
- So basically we get state from store object, and we use dispatch to pass updatedState to redux store.
- In main index.js we need to attach redux with out react app. The <Provider> component in Redux plays a crucial role in connecting your React application to the Redux store. Here’s a detailed explanation.
- By passing the store as a prop, the <Provider> ensures: Any component in the component tree can access the store without needing to pass it manually as a prop.

- Example:
```javascript
// Step 1:
// Create folder actions, reducers.

// Step 2: inside actions create index.js
// Here we give all the actions our application need like incr and decr.
export const incr = (num) => {
    return {
      type: 'increment',
      payload: num
    }
}


export const decr = (num) => {
  return {
    type: 'decrement',
    payload: num
  }
}




// Step 3: Create incrDecr.js
// This takes actions and tell how to do it, basically a function which perform based on actions.
const initialState = 0;

const changeNumber = (state = initialState, action) => {
    switch (action.type){
        case 'increment': {
            console.log('actions......', action);
            console.log('actions......', action.payload);
            return state + action.payload
        };
        case 'decrement': return state - 1;
        default: return state;
    }
}

export default changeNumber;




// Step 4: create store.py
/*
This basically stores the state of entire application.
So whenever or wherever we need state we can fetch it from store.
*/
import { combineReducers } from 'redux';
import { loginForm } from './actions/actions';

const rootReducer = combineReducers({
  login: loginForm, // Add your other reducers here
});

export default rootReducer;




// Step 5: index.js
import { Provider } from 'react-redux';
import rootReducer from './redux/store';
import { createStore } from 'redux';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Optional Redux DevTools support
);
// store.subscribe(() => console.log(store.getState()));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);





// Step 6: inside App.js or any component, make use of state from store.
/*
useSelector: To fetch data from store.
dispatch: dispatch is a method that is used to send or "dispatch" actions to the Redux store. Like a dispatch in real time delivery from amazon.
*/
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incr } from './react_redux/actions';

const App = () => {
  // Get data from store
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {myState}</h1>
      <button style={{ backgroundColor: 'pink' }} onClick={ () => dispatch(incr(5)) }>Incrememt</button>
      <button style={{ backgroundColor: 'skyblue' }}>Decrement</button>
    </div>
  )
}

export default App
```

# Redux Saga and Thung
- Both are middleware used in Redux for handling asynchronous function calls.
- <b>Thunk</b>: Redux Thunk is a middleware that allows you to write action creators that return functions instead of plain objects. This is useful for handling asynchronous operations, such as API calls, in Redux.
- <b>Saga</b>: Redux Saga is a middleware library for handling side effects (like API calls) in Redux. It uses generators for managing asynchronous operations, making complex workflows and side effects easier to test and manage.
- Thung uses basic api call for asynchronous function like api call. Saga uses generators and use yield keyword.
- We need to pass thung and saga in our store object.
- Saga uses the same generators logic which we use in python.
```javascript
// Thung
export const fetchVendors = () => async (dispatch) => {
    dispatch(fetchVendorsRequest());
    try {
        const response = await axios.get(baseUrlMain + `/api/vendor_with_skills/`);
        dispatch(fetchVendorsSuccess(response.data));
    } catch (error) {
        dispatch(fetchVendorsFailure(error.message));
    }
};

// In our logic of form, we'll call fetchVendors directly in useEffect, based on that it'll handle sucess and failour.



// Saga
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchVendorsRequest, fetchVendorsSuccess, fetchVendorsFailure } from './actions';

// API call function
const fetchVendorsApi = () => axios.get('https://api.example.com/vendors');

// Worker saga: Performs the async operation and dispatches actions
function* fetchVendorsSaga() {
    try {
        // Dispatching a request action before starting the API call
        yield put(fetchVendorsRequest());

        // Pauses here and waits for the result of the API call
        const response = yield call(fetchVendorsApi);

        // Once the API call is successful, dispatch the success action with the response data
        yield put(fetchVendorsSuccess(response.data));
    } catch (error) {
        // If an error occurs during the API call, dispatch the failure action
        yield put(fetchVendorsFailure(error.message));
    }
}

// Watcher saga: Watches for the FETCH_VENDORS_REQUEST action
function* watchFetchVendors() {
    yield takeEvery('FETCH_VENDORS_REQUEST', fetchVendorsSaga);
}

export default watchFetchVendors;
```

# Lifecycle hook in function component.
1. <b>Mounting (Component Creation)</b>: This phase occurs when the component is rendered for the first time. You can use useEffect with an empty dependency array ([]) to run code only once when the component mounts.
2. <b>Updating (State or Props Changes)</b>: This phase occurs when the component's state or props change. Use useEffect with specific dependencies to run code whenever those dependencies change.
3. <b>Unmounting (Component Removal)</b>: This phase occurs when the component is removed from the DOM. Use the cleanup function returned by useEffect to handle tasks like removing event listeners or canceling timers.
```javascript
// component mount
useEffect(()) => {

, []};

// State change or update
useEffect(()) => {

, [state]};

// component unmount, cleanup phase
useEffect(()) => {

  return(() =>{
  });	
, [state]};
```

# React DOM Real Vs Virtual
- React does not directly change the real dom, it first create virtual dom and make changes in virtual dom and it compares real dom with virtual and make only those changed changes in real dom.

# React - Router - DOM
- This is independent of react, react is different library and react-router is different, although we can combine both together.
- Install: npm install react-router-dom
- We can use nav to give link and routes to give path.
- Create a protected router which check if token is exists else navigate to login page.
- Create login page which has login function which gets and sets the token.
- Create a seperate file which has all the links and routes.
```javascript
// Login
const Login = () => {
    const login = () => {
        localStorage.setItem('login', true);
    };
    return (
        <div>
            <button onClick={login}>click to login</button>
        </div>
    )
}


// ProtectedRoute, which checks for token before giving access.
const ProtectedRoute = ({ component }) => {
  const navigate = useNavigate();
  useEffect(() =>{
    const login = localStorage.getItem('login');
    if (!login){
      navigate('/login');
    }
  });

  return (
    <div>This is protected view...</div>
  )
}

// App.js
const User = () => {
  // To pass query string
  const [searchParams] = useSearchParams();
  const category = searchParams.get('company_policy') || 'all';
  const price = searchParams.get('price') || 'any';

  // To pass id
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
};

const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/user/123">User</Link> */}
      <Link to="/about?company_policy=new&price=high">View Policy</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);

```

# Icons
https://react-icons.github.io/react-icons/<br>

# Packages required
1. <b>Axios:</b> npm install axios
2. <b>Bootstrap React:</b> https://react-bootstrap.netlify.app/docs/getting-started/introduction
3. <b>React-Router-Dom</b>: react-router-dom
4. <b>React-Datatable:</b> npm install react-data-table-component


# Extensions
- For <b>React</b> use chrome extension, react dev tools.
- For <b>Redux</b> use chrome extension, redux dev tools from https://github.com/reduxjs/redux-devtools/tree/main/extension, it also have documentation of how to use it. Also we need to attach it to our store give instruction in https://github.com/reduxjs/redux-devtools/tree/main/extension#installation. 


# React - Datatable
- Doc link: https://react-data-table-component.netlify.app/?path=/docs/getting-started-intro--docs
- Installation: npm install react-data-table-component.
- Example code of search and print functionality.
```javascript
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Data filtered by search
  const [searchTerm, setSearchTerm] = useState("");
  const [pending, setPending] = useState(true);

  // Fetch data from API
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data); // Initialize filteredData with the full dataset
        setPending(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setPending(false);
      });
  }, []);

  // Handle search input
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter the data based on the search term
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.email.toLowerCase().includes(value) ||
        item.phone.toLowerCase().includes(value) ||
        item.website.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };

  // Handle print
  const handlePrint = () => {
    window.print();
  };

  // Define table columns
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Website",
      selector: (row) => row.website,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>React DataTable with Print and Search</h2>

      {/* Search Bar */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "300px",
          }}
        />
        <button
          onClick={handlePrint}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Print
        </button>
      </div>

      {/* DataTable */}
      <DataTable
        title="User List"
        columns={columns}
        data={filteredData} // Use filteredData to display the filtered results
        progressPending={pending}
        pagination
        highlightOnHover
        responsive
      />
    </div>
  );
};

export default App;
```

# What is React's reconciliation process?
- When the state or props of a React component change, React creates a new virtual DOM tree (a lightweight JavaScript representation of the actual DOM).

# What is the difference between controlled and uncontrolled components or inputs?
- Controlled means it's completely handled by react, uncontrolled means we are not using react type but using normal JavaScript.
- Controlled example using states which is controlled by react. Uncontrolled means using DOM i.e getting value uisng document.getElementById or using useRef hook.
- useRef can be associated with uncontrolled components in React because it allows you to directly interact with the DOM without relying on React's state management system.
- It is recommended to use react controlled form.
- Example Uncontrolled form:
```javascript
const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(`Name: ${username}, password: ${password}`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' id='username' /><br />
        <input type='text' id='password' /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}
```
- Example controlled form:
- i. Note: if we dont give onChange it'll conside the input as read-only and we cant type anything in input. This is bcoz now this form is controlled cuz we are using react state which is part of react and this form become controlled.
```javascript
const App = () => {
  const [username, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${username}`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' id='username' value={username} onChange={handleChange} /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

// To check uncontrolled error remove value attribute. And this is just warning not an error. We still can get value.
```

# Explain the concept of higher-order components (HOCs).
- A Higher-Order Component (HOC) is a design pattern in React that allows you to reuse component logic. It is a function that takes a component and returns a new component with additional props or behavior.


# What is the purpose of strict mode in React?
- React's Strict Mode is a tool for highlighting potential problems in an application during development. It helps identify components with unsafe lifecycle methods, deprecated APIs, and other issues that may cause problems in future versions of React. Strict Mode only works in development mode and does not affect production builds.
- This is reason we see console twice when page dom fisrt load.
- We get it by default in react, we can remove this but not recommenede.
```javascript
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
```


# What is pure function?
- Deterministic: Given the same input, a pure function will always return the same output. It does not rely on any external state or variables that might change between calls. The function's output is solely determined by the input parameters.
```jaavscript
// Pure function example
const add = (a, b) => a + b;

// Same inputs will always give the same output
console.log(add(2, 3)); // Output: 5
```
- No Side Effects: A pure function does not produce any side effects. It does not modify any external state, variables, or data outside the scope of the function. This means it doesn't alter global variables, interact with the DOM, perform asynchronous tasks, or mutate its input values.
```javascript
let counter = 0;

// Impure function example (modifies external state)
const incrementCounter = () => {
  counter += 1;  // Side effect: modifies external state
  return counter;
};

console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2

// This is changing the state and dom thats why impure
```

# React Interview Questions
1. Why do we use map and not foreach when rendering element in ui?
- Bcoz map return new array it does not touch original, where as forEach works with original array. We use map in React because it returns a new array of JSX elements, which can be directly rendered in the UI.
2. What are the tags changes in react?
- Every tag should be closed.
- class -> className
- a href="#" -> link
- onclick -> onClick
- label for -> htmlFor
- In React: You cannot use <meta> tags directly in JSX. Instead, use a package like react-helmet to manage the head section.
```jaavscript

import { Helmet } from 'react-helmet';
<Helmet>
  <meta name="description" content="My React app" />
</Helmet>
```
3. What is higher order components HOC?
- A Higher-Order Component (HOC) in React is a function that takes a component and returns a new component with additional props or functionality. HOCs are a pattern used to enhance or modify the behavior of a component without directly modifying it.
```javascript
import React from 'react';

// The HOC function
function withMessage(Component) {
  return function EnhancedComponent(props) {
    return <Component {...props} message="Hello from HOC!" />;
  };
}

// A simple component to display the message
function DisplayMessage({ message }) {
  return <div>{message}</div>;
}

// Another component that uses the same HOC
function AnotherMessage({ message }) {
  return <div>{message} - This is another component!</div>;
}

// Wrapping both components with the HOC
const DisplayMessageWithHOC = withMessage(DisplayMessage);
const AnotherMessageWithHOC = withMessage(AnotherMessage);

function App() {
  return (
    <div>
      <h1>Multiple Components Using HOC</h1>
      <DisplayMessageWithHOC />
      <AnotherMessageWithHOC />
    </div>
  );
}

export default App;
```
4. React, Redux, versions?
- React: 19.0.0
- Redux: 9.2.0
  
5. Npm vs npx?
- Imagine toolbox example: npm is for keeping tools, and npx is for borrowing them when you need them!. npx is a tool that comes with npm (version 5.2.0 and later). It is used to execute Node packages without globally installing them.
- Npx saves disk space by running packages directly from the npm registry.

6. Redux Saga, Redux Thunk explain?

8. What is named and default exports.
- Use named exports when exporting multiple constants or utilities. Example constants.
- Use a default export when exporting a single main functionality or value. Example component.
```javascript
// Named exports, like we do for constants
export const baseUrlMain = 'http://127.0.0.1:8000';

// import
import { baseUrlMain } from "./ProtectedRoute";

// Default exports, live we do for components
const baseUrlMain = 'http://127.0.0.1:8000';
export default baseUrlMain;

// import
import App from './App';
```

8. Why useReducer when we have useState?
- useState is used when we have simple states. When we have complex state use useReducer.

9. What is child props or childrens when we work with context api or other?
- In React, children is a special prop that allows you to pass elements or components as the content of another component. It is particularly useful when you want to create reusable components that can wrap around other content.
- It is used to pass component as props.

10. Controlled/uncontrolled component Or input?
11. What is the purpose of the key attribute in react list?
12. What is react fragment and why they usefull?
13. What is virtual dom and how does react use it to improve performance?
14. React lifecycle method?
15. Explain usestate and useEffect hook?
16. What is ContextApi?, how it is differ from useState?
17. What is HOC?
- HOC example is we have a component which prints hello world and we take that component and enhance it like take hello world and add bye to it, i.e hello world, bye.
18. What is strict mode in react?
19. What is mapStateToProps, mapDispatchToProps?
- They were older version of react, new version support useDispatch: To send action, useSelector: To get state.
20. Without using redux saga. Can we call api?
- Yes, when we use redux thunk we call api using services, function passed to reducer. Without it we call api using useEffect.


21. How do you optimize performance in a React app?
- use React.Memo, useMemo, useCallback.
- Pagination
- use Production build
- so use lazy loading and load only the content required in the web page.
- improve the backend api performance, cuz eventually data will be fetch from apis only.
- use cache data to avoid hiting apis to improve performance.

22. What is Diffing?
- Diffing is the algorithm used during reconciliation to efficiently compare two trees (previous and current Virtual DOM trees).

23. What is React Suspense and Lazy Loading? Or Code Splitting in React?
- Both React Suspense and Lazy Loading are powerful features in React that help with optimizing the loading of components and improving performance by deferring the loading of non-critical content until it is actually needed.
```javascript
import React, { Suspense } from 'react';

// Lazy loading the Profile component
const Profile = React.lazy(() => import('./Profile'));

function App() {
  return (
    <div>
      <h1>Welcome to the App!</h1>
      <Suspense fallback={<div>Loading Profile...</div>}>
        <Profile />
      </Suspense>
    </div>
  );
}
```
- Basically use it to render component only when needed.

24. What is an Error Boundary in React?
- An Error Boundary in React is a component that catches JavaScript errors anywhere in its child component tree and displays a fallback UI instead of crashing the entire component tree.

25. React Fiber?
- React Fiber is indeed the new reconciliation algorithm used by React to manage and update the user interface (UI). The reconciliation process is how React decides what parts of the UI need to be updated when the state or props of a component change.

26. Why we use keys?
- So we use keys to keep track of which item is updated and render/update only that part only on ui.

28. Difference in redux and context api?
- Redux is 3rd party library used for complex state manitainance. Context api is built-in feature of react.
- Use redux for large application, context api for small to medium app.

29. How do you handle navigation programmatically in React?
- We can use useNavigation.
```javascript
const navigate = useNavigate();  // Hook to get the navigate function

const handleClick = () => {
  navigate('/new-page');  // Navigate to a new route programmatically
};
```

30. How to pass id from a component via query string, params?
```javascript
<Router>
  <Routes>
    {/* ListPage route */}
    <Route path="/" element={<ListPage />} />
    
    {/* DetailPage route with dynamic ID */}
    <Route path="detail/:id" element={<DetailPage />} />
  </Routes>
</Router>
```
# Points To Remember:
1. When calling a function always use arrow function, if we want a function with parameters and we use like show(person), it'll invote directly when page load. To make it get called only when click event occured wrapped it in arrow function.
```javascript
const App = () => {
  const person = {
    name: 'Fareen',
    age: 27
  }

  const show = ({ name,age }) => {      // Destructuring
    console.log(`Name: ${name}, Age: ${age}`);
  };
  return (
    <div>
      <button onClick={() => show(person)}>Click to get</button>
      {/* <button onClick={show()}>Click to get</button>   This will get invoke directly when page load*/}
    </div>
  )
}
```

# Examples:
1. Increment Decrement counter in one like condition.
```javascript
const Counter = () => {
    const [counter, stateIncCounter] = useState(10);

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button style={{backgroundColor: 'pink'}} onClick={() => {stateIncCounter(counter + 1)}}>Increment</button>
            <button style={{backgroundColor: 'pink'}} onClick={() => counter > 0? stateIncCounter(counter - 1): 0}>Decrement</button>
        </>
    )
}
```

# PWA (Prograssive Web App)
- PWA is used to make a website looks native to each platform, for eg if we see it on mobile it'll look like mobile app.

<b>Stuff needed to make a website acts as PWA</b>:
- Responsive
- Work in offline mode
- Looks like native mobile app
- Push Notification just like mobile app
- Update data in backgroun after it comes online from offline
- Can use GPS and access hardware component.
- 


