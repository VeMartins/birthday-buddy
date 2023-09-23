import data from "./data";
import { useState } from "react";
import People from "./People";

const App = () => {
  const [people, setPeople] = useState(data);
  const handleClearData = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} People</h3>
        <People people={people} />
        <button
          type="button"
          onClick={handleClearData}
          className="btn btn-block"
        >
          Clear List
        </button>
      </section>
    </main>
  );
};
export default App;
