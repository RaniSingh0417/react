import { useState } from "react";

const ArrayOfObject = () => {
  const [students, setstudents] = useState([
    { name: "Rani", batch: 2025, college: "MMMUT" },
    { name: "Soumya", batch: 2024, college: "MMMUT" },
    { name: "Nikita", batch: 2023, college: "KIET" },
    { name: "Priyanshu", batch: 2025, college: "VIT" },
  ]);
  const handledeletestudent1 = (v) => {
    const oldStudents = [...students];
    const newStudents = oldStudents.filter(
      (candidate, i) => candidate.name !== v.name
    );
    setstudents(newStudents);
  };
  return (
    <>
      <h1>This is students data</h1>

      {students.map((a, i) => {
        return (
          <div key={i}>
            <ul>
              <li>{a.name}</li>
              <li>{a.batch}</li>
              <li>{a.college}</li>
              <button type="button" onClick={() => handledeletestudent1(a)}>
                Delete {a.name}
              </button>
            </ul>
          </div>
        );
      })}
    </>
  );
};
export default ArrayOfObject;
