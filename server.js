const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

// Serve static files from the 'src' folder
app.use(express.static(path.join(__dirname, "src")));

// Sample data
const universities = [
  {
    id: 1,
    name: "Superior University",
    departments: [
      {
        id: 1,
        name: "Department of Computer Science",
        specializations: [
          {
            id: 1,
            name: "Data Science",
            students: [
              {
                id: 1,
                name: "John Doe",
                email: "johndoe@example.com",
                age: 20,
              },
              {
                id: 2,
                name: "Jane Doe",
                email: "janedoe@example.com",
                age: 22,
              },
            ],
          },
          {
            id: 2,
            name: "Software Engineering",
            students: [
              {
                id: 3,
                name: "Bob Smith",
                email: "bobsmith@example.com",
                age: 25,
              },
            ],
          },
          {
            id: 3,
            name: "Artificial Intelligence",
            students: [
              {
                id: 4,
                name: "Alice Johnson",
                email: "alicejohnson@example.com",
                age: 21,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Department of Mathematics",
        specializations: [
          {
            id: 4,
            name: "Pure Mathematics",
            students: [
              {
                id: 5,
                name: "Mike Brown",
                email: "mikebrown@example.com",
                age: 24,
              },
            ],
          },
          {
            id: 5,
            name: "Applied Mathematics",
            students: [
              {
                id: 6,
                name: "Emily Davis",
                email: "emilydavis@example.com",
                age: 23,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Punjab University",
    departments: [
      {
        id: 3,
        name: "Department of Languages",
        specializations: [
          {
            id: 6,
            name: "English",
            students: [
              {
                id: 7,
                name: "David Lee",
                email: "davidlee@example.com",
                age: 26,
              },
            ],
          },
          {
            id: 7,
            name: "Urdu",
            students: [
              {
                id: 8,
                name: "Ayesha Khan",
                email: "ayeshakhan@example.com",
                age: 22,
              },
            ],
          },
          {
            id: 8,
            name: "Spanish",
            students: [
              {
                id: 9,
                name: "Sofia Rodriguez",
                email: "sofiarodriguez@example.com",
                age: 25,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "University of Lahore",
    departments: [
      {
        id: 4,
        name: "Department of Computer Science",
        specializations: [
          {
            id: 9,
            name: "Data Science",
            students: [
              {
                id: 10,
                name: "Ahmed Ali",
                email: "ahmedali@example.com",
                age: 24,
              },
            ],
          },
          {
            id: 10,
            name: "Software Engineering",
            students: [
              {
                id: 11,
                name: "Fatima Hassan",
                email: "fatimahassan@example.com",
                age: 23,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "COMSATS",
    departments: [
      {
        id: 5,
        name: "Department of Computer Science",
        specializations: [
          {
            id: 11,
            name: "Data Science",
            students: [
              {
                id: 12,
                name: "Muhammad Khan",
                email: "muhammadkhan@example.com",
                age: 25,
              },
            ],
          },
          {
            id: 12,
            name: "Software Engineering",
            students: [
              {
                id: 13,
                name: "Ayesha Ahmed",
                email: "ayeshaahmed@example.com",
                age: 22,
              },
            ],
          },
        ],
      },
    ],
  },
];

// API endpoint to get universities data
app.get("/api/universities", (req, res) => res.json(universities));

// Start the server
app.listen(port, () =>
  console.log(`Backend running on http://localhost:${port}`)
);
