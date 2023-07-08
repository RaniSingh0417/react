import { useState } from "react";

const Studentmanag = () => {
  const [studinfo, setstudinfo] = useState([]);
  const [name, setname] = useState("");
  const [branch, setbranch] = useState("");
  const [batch, setbatch] = useState("");
  const [cgpa, setcgpa] = useState("");
  const [Package, setpackage] = useState("");

  const handleAdd = () => {
    const oldStudents = [...studinfo];
    let newStudents = {
      Name: name,
      Branch: branch,
      Batch: batch,
      CGPA: cgpa,
      Pacakge: Package,
    };

    oldStudents.push(newStudents);
    setstudinfo(oldStudents);
  };

  const handleDelete = (index) => {
    const oldStudents = [...studinfo];
    const newStud = oldStudents.filter((v, i) => i !== index);
    setstudinfo(newStud);
  };

  const handleUpdateLPA = (index) => {
    const oldStudents = [...studinfo];

    for (let i = 0; i < oldStudents.length; i++) {
      if (i === index) {
        oldStudents[i].Pacakge = "43lpa";
      }
    }
    setstudinfo(oldStudents);
  };
  return (
    <>
      <h1>Students Information Management</h1>
      <label>Name: </label>
      <input
        value={name}
        onChange={(e) => setname(e.target.value)}
        type="text"
      />
      <br />
      <br />
      <label>Branch:</label>

      <input
        value={branch}
        onChange={(e) => setbranch(e.target.value)}
        type="text"
      />
      <br />
      <br />
      <label>Batch:</label>
      <input
        value={batch}
        onChange={(e) => setbatch(e.target.value)}
        type="text"
      />
      <br />
      <br />
      <label>CGPA:</label>
      <input
        value={cgpa}
        onChange={(e) => setcgpa(e.target.value)}
        type="text"
      />
      <br />
      <br />
      <label>Package:</label>
      <input
        value={Package}
        onChange={(e) => setpackage(e.target.value)}
        type="text"
      />
      <br />
      <br />

      <button type="button" onClick={() => handleAdd()}>
        Register
      </button>

      <div>
        {studinfo.map((v, i) => {
          return (
            <div key={i}>
              <ul>
                <li type="none">Student Name: {v.Name}</li>
                <li type="none">Branch: {v.Branch}</li>
                <li type="none">Passing Out Year: {v.Batch}</li>
                <li type="none">CGPA:{v.CGPA}</li>
                <li type="none">Package:{v.Pacakge}</li>
                <button type="button" onClick={() => handleDelete(i)}>
                  Remove
                </button>
                <button type="button" onClick={() => handleUpdateLPA(i)}>
                  Edit Package
                </button>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Studentmanag;
