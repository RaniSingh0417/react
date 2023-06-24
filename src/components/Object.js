import { useState } from "react";

const Object = () => {
  const [bio, setBio] = useState({
    name: "Rani Singh",
    course: "B.Tech",
    Batch: "2025",
    Branch: "ECE",
    college: "MMMUT,GORAKHPUR",
  });

  const [color, setcolor] = useState({
    backgroundColor: "",
    textcolor: "",
  });

  const handleUpdateBio = () => {
    if (bio.name === "Rani Singh") {
      const newBio = {
        name: "Soumya Singh",
        course: "B.Tech",
        Batch: "2024",
        Branch: "ME",
        college: "IIT,BOMBAY",
      };
      const newColor = {
        backgroundColor: "lightyellow",
        textcolor: "brown",
      };
      setcolor(newColor);
      setBio(newBio);
    } else if (bio.name === "Soumya Singh") {
      const newBio1 = {
        name: "Rani Singh",
        course: "B.Tech",
        Batch: "2025",
        Branch: "ECE",
        college: "MMMUT,GORAKHPUR",
      };
      const newColor = {
        backgroundColor: "grey",
        textcolor: "White",
      };
      setcolor(newColor);
      setBio(newBio1);
    }
  };
  const handleUpdateBranch = () => {
    if (bio.Branch === "CSE") {
      const updatedObject = { ...bio };
      updatedObject.Branch = "ECE";
      setBio(updatedObject);
    } else if (bio.Branch === "ECE") {
      const updatedObject = { ...bio };
      updatedObject.Branch = "CSE";
      setBio(updatedObject);
    }
  };
  return (
    <>
      <h2
        style={{
          backgroundColor: color.backgroundColor,
          color: color.textcolor,
        }}
      >
        Hi! My name is {bio.name} and I am currently pursuing {bio.course} from{" "}
        {bio.college}. My branch is {bio.Branch} and my passing out year is{" "}
        {bio.Batch}.
      </h2>
      <button
        className="btn"
        type="button"
        onClick={() => {
          handleUpdateBio();
        }}
      >
        Update Bio
      </button>
      <button
        className="btn"
        type="button"
        onClick={() => {
          handleUpdateBranch();
        }}
      >
        Update Branch
      </button>
    </>
  );
};
export default Object;
