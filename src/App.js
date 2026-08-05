import React from 'react'
import Test from './Test'
const App = () => {
  const obj = {
    name: "saman",
    age: 24
  };
  return (
    <div>
      <Test name={obj.name} age={obj.age} />
    </div>
  )
}

export default App
