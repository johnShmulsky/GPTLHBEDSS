import React from 'react';

function App() {
  const {value} = fetch(`/api/test`).json();
  return <div>Hello {value}</div>;
}

export default App;
