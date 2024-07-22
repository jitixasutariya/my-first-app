// import logo from "./logo.svg";
import "./App.css";
import HeadingH1 from "./Heading";

function App() {
  return (
    <>
      <HeadingH1 />

      <div className="container">
        <p style={{ color: "red" }}>List Of Five Best Movie's on Netflix</p>
        <nav>
          <li>Damsel</li>
          <li>The Mother</li>
          <li>Don't Look Up</li>
          <li>Red Notice </li>
          <li>The Adam Project</li>
        </nav>
      </div>
    </>
  );
}

export default App;
