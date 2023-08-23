import React from "react";
import MasterTable from "./MasterTable";
import { useTable } from "./useTable";

function Table() {
  // Data admin
  const admin = [
    // ... data admin Anda
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: 61,
      start_date: "2011-04-25",
      salary: "$320,800",
    },
    {
      id: 2,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: 63,
      start_date: "2011-07-25",
      salary: "$170,750",
    },
  ];

  // Menggunakan useTable hook untuk mengelola state tabel
  const model = useTable({
    columns: [
      {
        header: "Name",
        field: "name",
      },
      {
        header: "Position",
        field: "position",
      },
      {
        header: "Office",
        field: "office",
      },
      {
        header: "Age",
        field: "age",
      },
      {
        header: "Start Date",
        field: "start_date",
      },
      {
        header: "Salary",
        field: "salary",
      },
    ],
  });

  // Fungsi untuk menghandle edit record
  const handleEdit = (record) => {
    console.log("Info: Come from handledit");
    console.log(record);
  };

  // Fungsi untuk menghandle delete record
  const handleDelete = (record) => {
    console.log("Info: Come from handleDelete");
    console.log(record);
  };

  // Fungsi untuk merender aksi admin pada setiap baris tabel
  const adminAction = (record) => (
    <div>
      <button
        className="btn btn-sm btn-primary mx-2"
        onClick={() => handleEdit(record)}
      >
        <em className="fas fa-edit"></em>
      </button>
      <button
        className="btn btn-sm btn-warning"
        onClick={() => handleDelete(record)}
      >
        <em className="fas fa-trash"></em>
      </button>
    </div>
  );

  // Merender komponen tabel dengan model dan aksi admin yang sudah diatur
  return (
    <div className="container py-4">
      <h1>Table Admin</h1>
      <MasterTable
  model={model}
  stringUrl="mysql://u7688813_simklinik:M3ndututara12@45.13.255.61:3306/u7688813_kliniks"
/>

    </div>
  );
}

export default Table;
