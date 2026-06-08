const express = require("express");

const app = express();

app.use(express.json());

const students = [
  /*array*/
  {
    id: 1 /*objects*/,
    name: "Anshika",
    subject: "Mathematics",
    progress: 75,
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Student Management API is Running."
});

app.get("/students", (req, res) => {
  res.status(200).json(students);
});

app.get("/students/:id",(req,res) => {

  const id = parseInt(req.params.id);

  const student = students.find(
    (student) => student.id === id
  );
  
  id(!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});

app.post("/students", (req, res) => {
  const { id, name, subject, progress } = req.body;

  if (!id || !name || !subject) {
    return res.status(400).json({
      message: "ID, Name and Subject are required",
    });
  }

  if (progress < 0 || progress > 100) {
    return res.status(400).json({
      message: "Progress must be between 0 and 100",
    });
  }

  const existingStudent = students.find(
    (student) => student.id === id
  );

  students.push({
    id,
    name,
    subject,
    progress,
  });

  res.status(201).json({
    message: "Student Added Successfully",
  });
});

app.delete("/students/:id",(req,res) => {

  const id = parseInt(req.params.id);

  const index = students.findIndex(
    (student) => student.id ===id
  );

  id(index === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const deletedStudent = students[index];

  students.splice(index,1);

  res.status(200).json({
    message: "Student deleted successfully",
    deletedStudent
  });
});

app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});
