import React from "react";

function App() {
  return <Navbar />;
}

export default App;

function Navbar() {
  return (
    <div className="container-center-horizontal">
      <div className="navbarscreen">
        <div className="ellipse-2"></div>
        <div className="rectangle-4"></div>
        <div className="rectangle-3"></div>
        <div className="ellipse-1"></div>
        <div className="rectangle-2"></div>
      </div>
    </div>
  );
}
