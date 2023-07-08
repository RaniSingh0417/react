const programminglang = ["c", "c++", "Python", "Java", "Javascript"];
const num = [27, 84, 94, 36];
console.log(programminglang);

const filtereditems = programminglang.filter((a, i) => a[0] != "J");
console.log(filtereditems);

const filtereditems1 = num.filter((a, i) => a < 50);
console.log(filtereditems1);

const students = [
  { name: "Rani", batch: 2025, college: "MMMUT" },
  { name: "Soumya", batch: 2024, college: "MMMUT" },
  { name: "Nikita", batch: 2023, college: "KIET" },
  { name: "Priyanshu", batch: 2025, college: "VIT" },
];

const filterstudent = students.filter((a, i) => a.college != "MMMUT");
console.log(filterstudent);
