import React, { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";

const DataTableComponent = ({ header, body }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [col, setCol] = useState([]);

  useEffect(() => {
    let _temp = [];
    header.map(val => {
      _temp.push({
        name: val.name,
        selector: row => row.title,
        sortable: true
      });
    });

_temp.push({
    name: "Action",
    cell: row => (
      <button className="btn" onClick={() => alert(row.id)}>
        Edit
      </button>
    )
  })
    setCol(_temp);
  }, []);

  createTheme(
    "solarized",
    {
        border:{
            
        },

      text: {
        primary: "#F10086",
        secondary: "#2aa198"
      },
      background: {
        default: "#F582A7"
      },
      context: {
        background: "#FFDDEE",
        text: "#F10086"
      },
      divider: {
        default: "#073642"
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)"
      }
    },
    "dark"
  );

  const columns = [
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Year",
      selector: row => row.year,
      sortable: true
    },
    {
      name: "Action",
      cell: row => (
        <button className="btn" onClick={() => alert(row.id)}>
          Edit
        </button>
      )
    }
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988"
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984"
    }
  ];

  useEffect(() => {
    setFilteredData(data);
  }, []);

  useEffect(() => {
    const result = data.filter(val => {
      return val.year.toLowerCase().match(search.toLowerCase());
    });
    setFilteredData(result);
  }, [search]);

  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
  return (
    <>
      <DataTable
        columns={col}
        data={filteredData}
        // selectableRows
        expandableRowsComponent={ExpandedComponent}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        highlightOnHover
        responsive
        subHeader
        paginationRowsPerPageOptions={[1, 10, 50, 100]}
        dense={true}
        subHeaderComponent={
          <input
            type="text"
            placeholder="Serach"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        }
        // subHeaderAlign="left"
      />
    </>
  );
};

export default DataTableComponent;
