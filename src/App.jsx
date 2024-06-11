import { useState } from "react";
import text from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [num, setNum] = useState(1);
  const [lorem, setLorem] = useState(text.slice(0, num));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLorem(text.slice(0, num));
    // console.log(lorem);
  };
  return (
    <>
      <section className="section-center">
        <h4>Lorem ipsum</h4>
        <form className="lorem-form" action="#" onSubmit={handleSubmit}>
          <label htmlFor="in">text :</label>
          <input
            id="in"
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
              // console.log(num);
            }}
            type="number"
            min={1}
            max={8}
          />
          <button className="btn">Generate</button>
        </form>

        <div className="lorem-text">
          {lorem.map((txt) => {
            return <p key={nanoid()}>{txt}</p>;
          })}
        </div>
      </section>
    </>
  );
};
export default App;
