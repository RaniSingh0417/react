import { useState } from "react";
const Array = () => {
  const [toggle, settoggle] = useState(true);
  const [city, setCity] = useState([
    "Varanasi",
    "Allahabad",
    "Gorakhpur",
    "Lucknow",
    "Jaipur",
  ]);
  const handlecityUpdate = () => {
    if (toggle) {
      setCity(["Jaipur", "Lucknow", "Gorakhpur", "Allahabad", "Varanasi"]);
    } else {
      setCity(["Varanasi", "Allahabad", "Gorakhpur", "Lucknow", "Jaipur"]);
    }
    settoggle(!toggle);
  };

  const removeGkp = () => {
    const newCity = [...city];
    let index = newCity.indexOf("Gorakhpur");
    for (let candidate of newCity) {
      if (candidate === "Gorakhpur") {
        newCity.splice(index, 1);
      }
    }

    setCity(newCity);
  };
  return (
    <>
      <p>This is the list of fruits</p>
      <ul>
        <li>{city[0]}</li>
        <li>{city[1]}</li>
        <li>{city[2]}</li>
        <li>{city[3]}</li>
        <li>{city[4]}</li>
      </ul>
      <button type="button" onClick={() => handlecityUpdate()}>
        Update List
      </button>
      <button type="button" onClick={() => removeGkp()}>
        Remove GORAKHPUR
      </button>
    </>
  );
};
export default Array;
