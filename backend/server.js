const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const db = require("./init/db.js");
const multer = require("multer");
const path = require("path");

const app = express();
const router = express.Router(); // Use express.Router() for defining routes

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", router); 


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "public", "Images")); // Ensure the path is correct
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname; // Use file.originalname for the original filename
    cb(null, file.fieldname + "_" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.json("Welcome to Student Management System");
});

// Use upload.single() if you expect a single file upload
router.post("/addstudent",
  upload.fields([{ name: "adharcard" }, { name: "photo" }, { name: "lasttc" }]),
  (req, res) => {
    console.log(req.body); // Log the request body to see its contents
    const adharCardFile = req.files["adharcard"]
      ? path.basename(req.files["adharcard"][0].path)
      : null;
    const photoFile = req.files["photo"]
      ? path.basename(req.files["photo"][0].path)
      : null;
    const lastTcFile = req.files["lasttc"]
      ? path.basename(req.files["lasttc"][0].path)
      : null;

    console.log("Adhar Card File Name:", adharCardFile);
    console.log("Photo File Name:", photoFile);
    console.log("Last TC File Name:", lastTcFile);

    const sql =
      "INSERT INTO student (fname, lname, fatname, motname,dob,gender,address,city,state,\
    pincode ,mobile_no, phone_no, telephone,class,  fees, adhar_card, photo, last_tc) \
     VALUES (?,?,?, ?, ?, ?,?,?,? ,?,?,?,?,?, ? ,?,? , ?)";
    const values = [
      req.body.firstname,
      req.body.lastname,
      req.body.fatname,
      req.body.motname,
      req.body.dob,
      req.body.gender,
      req.body.address,
      req.body.city,
      req.body.state,
      req.body.pincode,
      req.body.mobile,
      req.body.phone_no,
      req.body.telephone,
      req.body.class,
      req.body.fees,
      adharCardFile, 
      photoFile, 
      lastTcFile, 
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Database error:", err); 
        return res.status(500).json({ error: "Database error occurred" });
      }
      return res.json(result);
    });
  }
);

router.get("/show_Student", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, result });
  });
});

router.get("/student_count", (req, res) => {
  const sql = "SELECT COUNT(id) AS count FROM student"; // Add 'AS count' for clarity
  db.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error", err });
    return res.json({ Status: true, count: result[0].count }); // Access the count
  });
});

router.get("/student_total", (req, res) => {
    const sql = "SELECT SUM(fees) AS feesStu FROM student"; // Correct aliasing
    db.query(sql, (err, result) => {
      if (err) return res.json({ Status: false, Error: "Query Error", err });
      
      // Access the feesStu property instead of count
      return res.json({ Status: true, result: [{ feesStu: result[0].feesStu }] }); 
    });
  });


  router.get('/showClass', (req, res) => {
    const sql = "SELECT class AS class, COUNT(*) AS count FROM student GROUP BY class;";
    db.query(sql, (err, result) => {
      if (err) return res.json({ Status: false, Error: "Query Error", err });
      return res.json({ Status: true, result });
    });
  });

  // Update Route
  router.get('/admin/dashboard/show_Student/update_Student/:id', (req, res) => {
    // console.log(req.params.id);
});

  router.put('/admin/dashboard/show_Student/update_Student/:id', (req, res) => {
    const sql = "UPDATE student SET fname = ?, lname = ?,  mobile_no = ?, class = ?, fees = ? WHERE id = ?";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.mobile,
        req.body.class,
        req.body.fees,
        req.params.id 
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Database error:", err); 
            return res.status(500).json({ error: "Database error occurred" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Student not found" });
        }
        return res.json({ message: "Student updated successfully", result });
    });
});

  router.delete('/formDelete/:id', (req, res) => {
    const id = req.params.id; // Get the id from the URL parameters
    const sql = "DELETE FROM student WHERE id = ?"; 
    db.query(sql, [id], (err, result) => { // Pass id as a parameter to prevent SQL injection
      if (err) return res.json({ Status: false, Error: "Query Error", err });
      return res.json({ Status: true, result });
    });
  });

app.listen(8081, () => {
  console.log("Server is listening on port 8081");
});
