import { useState } from "react";

export const useTable = ({ columns, records, perPage }) => {
  // Menginisialisasi state dengan nilai default untuk columns dan records
  const [state, setState] = useState({
    columns: columns || [],
    records: records || [],
    perPage: perPage || 10,
  });

  // Fungsi untuk mengatur records
  const setRecords = (newRecords) => {
    setState((prevState) => ({
      ...prevState,
      records: newRecords,
    }));
  };

  // Mengembalikan state dan fungsi setRecords
  return { ...state, setRecords };
};
