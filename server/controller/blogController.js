const conn = require("../config/db.js");
const mysql = require("mysql");

// Read/:id
exports.read = (req, res) => {
  const id = req.params.id;
  conn.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    res.json(results);
  });
};

// Read All Item
exports.list = (req, res) => {
  conn.query("SELECT * FROM `users`", (err, results, fields) => {
    try {
      res.json(results);
    } catch (err) {
      res.status(500).send("Server Error");
      console.log(err);
    }
  });
};

//POST Item
exports.create = (req, res) => {
  const { fname, lname, username, password, avatar } = req.body;
  conn.query(
    "INSERT INTO users (fname,lname,username,password,avatar) VALUES (?,?,?,?,?)",
    [fname, lname, username, password, avatar],
    (err, results) => {
      try {
        res.json(results);
      } catch (err) {
        res.status(500).send("Server Error");
        console.log(err);
      }
    }
  );
};

//Update Item
exports.update = (req, res) => {
  const id = req.params.id;
  const { fname, lname, username, password, avatar } = req.body;
  conn.query(
    "UPDATE users SET fname = ? , lname = ? , username = ? , password = ? , avatar = ?  WHERE id = ?",
    [fname, lname, username, password, avatar, id],
    (err, results) => {
      try {
        res.send("User Updated Successfully");
      } catch (err) {
        res.status(500).send("Server Error");
        console.log(err);
      }
    }
  );
};

exports.remove = (req, res) => {
  const id = req.params.id;
  conn.query(" DELETE FROM users WHERE id = ? ", [id], (err, results) => {
    try {
      res.send("User Delete Successfully!");
    } catch (err) {
      res.status(500).send("Server Error");
      console.log(err);
    }
  });
};
