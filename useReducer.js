// Below code acts like store, ContextProvider.js
import React, { createContext, useReducer } from 'react'


export const CounterContext = createContext();
const CounterProvider = ({ children }) => {
  console.log('Children --------', children);
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === 'incr'){
      return state = state + 1;
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
}

export default CounterProvider


// App.js
import React from 'react'
import CounterProvider from './CounterProvider'
import Counter from './hooks/Counter';

const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  )
}

export default App


// Counter.js
import React, { useContext } from 'react'
import { CounterContext } from ".././CounterProvider";

const Counter = () => {
  const {state, dispatch} = useContext(CounterContext);
  return (
    <div>
      <h1>State: {state}</h1>
      <button style={{ backgroundColor: 'skyblue' }} onClick={() => {dispatch({ type: 'incr' })}}>Click to increment</button>
    </div>
  )
}

export default Counter

// Its benefit is we are uisng state and updating state from of different component without the use of props. Which saves us from props drilling.
