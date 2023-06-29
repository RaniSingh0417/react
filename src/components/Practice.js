import { useState } from "react";
const Practice = () => {
  const [ispractice, setisPractice] = useState(false);
  return (
    <>
      {ispractice ? (
        <div>
          <p>"Yay!Veryyy Good you have practised"</p>
        </div>
      ) : (
        <div>
          {" "}
          <p>"Not Done! you have to practice daily"</p>
          <button type="button" onClick={() => setisPractice(true)}>
            {" "}
            not Prac
          </button>
        </div>
      )}
    </>
  );
};
export default Practice;
