import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const dispatchFn = useDispatch();
  const userState = useSelector((state) => state.user)

  return (
    <div className="App">
      {userState.email ? userState.email : "Hello world "}
    </div>
  );
}

export default App;
