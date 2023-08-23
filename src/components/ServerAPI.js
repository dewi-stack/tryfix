const express = require("express");
const mysql = require("mysql2/promise"); // Gunakan versi promise dari mysql2
const app = express();
const port = 3001;

// Konfigurasi koneksi database
const dbConnection = mysql.createConnection({
  host: '45.13.255.61',
  port: 3306,
  user: 'u7688813_kliniks',
  password: 'u7688813_simklinik',
  database: 'M3ndututara12',
});

// Endpoint untuk mengambil data admin
app.get("/admin", async (req, res) => {
  try {
    const [rows] = await dbConnection.query("SELECT * FROM admin");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching admin data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});