import { useState } from "react";
// import AddIcon from "@mui/icons-material/AddOutlined";
import DataSaverOnTwoToneIcon from "@mui/icons-material/DataSaverOnTwoTone";

// import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

let Counter = () => {
  const [counter, setcounter] = useState(0);
  // const [level, setlevel] = useState("LOW");
  // if (counter < 5) {
  //   setlevel("LOW");
  // } else if (counter >= 5 && counter < 20) {
  //   setlevel("MEDIUM");
  // } else {
  //   setlevel("HIGH");
  // }
  let level = "LOW";

  if (counter < 5 && counter >= 0) {
    level = "LOW";
  } else if (counter < 20 && counter >= 0) {
    level = "MEDIUM";
  } else if (counter >= 0) {
    level = "HIGH";
  } else {
    level = "NIL";
  }
  return (
    <>
      <div className="profile">
        <h1>{level}</h1>
        <hr />
        <h2>{`Current Count is ${counter}`}</h2>
        <button className="btn" onClick={() => setcounter(counter + 1)}>
          Increment
          <DataSaverOnTwoToneIcon />
        </button>
        <button className="btn" onClick={() => setcounter(counter - 1)}>
          Decrement <RemoveCircleIcon />
        </button>
      </div>
    </>
  );
};
export default Counter;
