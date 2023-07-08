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
  const [display, setDisplay] = useState("none");
  const handlecityShuffle = () => {
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

  const removeVns = () => {
    const newCity = [...city];
    let index = newCity.indexOf("Varanasi");
    for (let candidate of newCity) {
      if (candidate === "Varanasi") {
        newCity.splice(index, 1);
      }
    }

    setCity(newCity);
  };
  const removeLko = () => {
    // const newCity = [...city];
    // let index = newCity.indexOf("Lucknow");
    // for (let candidate of newCity) {
    //   if (candidate === "Lucknow") {
    //     newCity.splice(index, 1);
    //   }
    // }
    const oldCity = [...city];
    const newCity = oldCity.filter((candidate, i) => candidate != "Lucknow");
    setCity(newCity);
  };
  const removeAllahabad = () => {
    // let index = newCity.indexOf("Allahabad");
    // for (let candidate of newCity) {
    //   if (candidate === "Allahabad") {
    //     newCity.splice(index, 1);
    //   }
    // }
    const oldCity = [...city];
    const newCity = oldCity.filter((candidate, i) => candidate != "Allahabad");

    setCity(newCity);
  };

  const removeJp = () => {
    const oldCity = [...city];
    // let index = newCity.indexOf("Jaipur");
    // for (let candidate of newCity) {
    //   if (candidate === "Jaipur") {
    //     newCity.splice(index, 1);
    //   }
    // }
    let newCity = oldCity.filter((candidate, i) => candidate !== "Jaipur");

    setCity(newCity);
  };

  const addCity = () => {
    const addCity = [...city];
    addCity.push("Haldwani");
    addCity.push("Bangalore");
    setDisplay("");
    setCity(addCity);
  };
  const removecity = () => {
    const rmcity = [...city];
    rmcity.pop();
    setCity(rmcity);
  };

  return (
    <>
      <p>This is the list of Cities</p>
      <ul>
        {city.map((v) => {
          return <li>{v}</li>;
        })}
        {/* <li>{city[0]}</li>
        <li>{city[1]}</li>
        <li>{city[2]}</li>
        <li>{city[3]}</li>
        <li>{city[4]}</li>
        <li style={{ listStyle: display }}>{city[5]}</li>
        <li style={{ listStyle: display }}>{city[6]}</li> */}
      </ul>
      <button type="button" onClick={() => handlecityShuffle()}>
        Shuffle List
      </button>
      <button type="button" onClick={() => removeGkp()}>
        Remove GORAKHPUR
      </button>
      <button type="button" onClick={() => removeVns()}>
        Remove Varanasi
      </button>
      <button type="button" onClick={() => removeLko()}>
        Remove Lucknow
      </button>
      <button type="button" onClick={() => removeAllahabad()}>
        Remove Allahabad
      </button>
      <button type="button" onClick={() => removeJp()}>
        Remove Jaipur
      </button>
      <button
        type="button"
        onClick={() => {
          addCity();
        }}
      >
        Add City
      </button>
      <button
        type="button"
        onClick={() => {
          removecity();
        }}
      >
        Remove City
      </button>
      <button type="button" onClick={() => setCity([""])}>
        Empty
      </button>
    </>
  );
}
export default Array;
