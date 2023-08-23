import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Menggunakan variabel apiUrl untuk mengirim permintaan ke API
    axios
      .get('http://localhost:127.0.0.1/admin')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {/* Render data yang diterima dari API */}
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default AdminTable;
