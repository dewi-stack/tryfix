import React, { Component, useEffect, useState } from "react";

export const MasterTable = ({ model, stringUrl }) => {
  const [state, setState] = useState({
    records: [],
    keywords: "",
    perPage: model.perPage,
  });

  useEffect(() => {
    if (stringUrl) {
      console.log("I am in");
    } else {
      let newRecords = model.records;
      if (newRecords) {
        newRecords = searchRecords(newRecords);
        newRecords = newRecords.slice(0, state.perPage);
        setState((prevState) => ({
          ...prevState,
          records: newRecords,
        }));
      }
    }
  }, [state.keywords, state.perPage]);

  const searchRecords = (records) => {
    if (!state.keywords) return records;
    return records.filter((record) => {
      let isMatch = false;
      model.columns.forEach((column) => {
        if (isMatch) return;
        const value = record[column.field];
        if (
          typeof value === "string" &&
          value.toLowerCase().includes(state.keywords)
        ) {
          isMatch = true;
        }
      });

      return isMatch;
    });
  };

  const handleSearch = (keywords) => {
    setState((prevState) => ({
      ...prevState,
      keywords,
    }));
  };

  const handleChangePerPage = (perPage) => {
    console.log(perPage);
    setState((state) => ({
      ...state,
      perPage,
    }));
  };

  return (
    <div className="admin-table">
      <div className="admin-table-header">
        <div className="input-group flex-nowrap mb-2">
          <span className="input-group-text" id="addon-wrapping">
            <em className="fas fa-search"></em>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search..."
            aria-describedby="addon-wrapping"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="admin-table-body">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                {model.columns.map((column, index) => {
                  return <th key={index}>{column.header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {state.records.map((record) => (
                <tr key={record.id}>
                  {model.columns.map((column, indexJ) => (
                    <td key={`${record.id}-${column.field}`}>
                      {record[column.field]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="admin-table-footer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="select-max-row" style={{ width: "64px" }}>
          <select
            className="form-select form-select-sm"
            aria-label="Default select example"
            value={state.perPage}
            onChange={(event) => handleChangePerPage(event.target.value)}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="_blank">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="_blank">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="_blank">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="_blank">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="_blank">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MasterTable;
