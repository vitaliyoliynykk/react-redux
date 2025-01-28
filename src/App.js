import React from "react";
import store from "./store";

function App() {
  // useEffect(() => {
  //   console.log(store.getState());
  // }, []);

  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example!</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2></h2>
      </section>
    </div>
  );
}

export default App;
