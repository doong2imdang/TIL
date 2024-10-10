import React, { useState } from "react";
import "./App.css";

function App() {
  let [user, setUser] = useState("kim");

  return (
    <div>
      <h4>안녕하십니까</h4>
      <Profile name="철수"></Profile>
    </div>
  );
}

function Profile(props: { name: string }): JSX.Element {
  return <div>{props.name}입니다.</div>;
}

export default App;

