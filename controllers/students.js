import { v4 as uuidv4 } from "uuid";

let students = [
  {
    id: "1",
    name: "Anas",
    grade: 50,
  },
  {
    id: "2",
    name: "Ali",
    grade: 97,
  },
  {
    id: "3",
    name: "Mohammed",
    grade: 75,
  },
];

export const getStudents = (request, response) => {
  response.json(students);
};

export const getStudent = (request, response) => {
  const id = request.params.id;
  const student = students.find((student) => student.id === id);
  if (student) {
    response.json(student);
  } else {
    response.send("student not found");
  }
};

export const deleteStudent = (request, response) => {
  const id = request.params.id;
  students = students.filter((student) => student.id !== id);
  response.json(students);
};

export const addStudent = (request, response) => {
  const student = request.body;
  const studentWithId = { ...student, id: uuidv4() };
  students.push(studentWithId);
  response.send(`Student with id ${studentWithId.id} has been added`);
};

export const updateStudent = (request, response) => {
  const id = request.params.id;
  const { name, grade } = request.body;
  let student = students.find((student) => student.id === id);
  if (name) {
    student.name = name;
  }
  if (grade) {
    student.grade = grade;
  }
  response.send(`Student with id ${id} has been updated`);
};
