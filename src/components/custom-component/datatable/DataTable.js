import React, { useState, useEffect, useRef } from "react";
import "./datatable.css";

const DataTable2 = ({ deleteRecord }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);

  const scrollElement = useRef(null);

  const scrollRight = (value) => {
    scrollElement.current.scrollLeft += parseInt(value);
  };

  const scrollLeft = (value) => {
    scrollElement.current.scrollLeft -= parseInt(value);
  };

  const columns = [
    {
      field: "id",
      header: "Id",
      selector: row => row.id,
      sortable: true
    },
    {
      field: "title",
      header: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      field: "year",
      header: "Year",
      selector: row => row.year,
      sortable: true
    },

    {
      field: "action",
      header: "Action",
      Cell: ({ value }) => (
        <div>
          <button onClick={() => alert(value)}>Edit</button>
        </div>
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
    },
    {
      id: 3,
      title: "Ram",
      year: "1984"
    },

    {
      id: 4,
      title: "Beetlejuice",
      year: "1988"
    },

    {
      id: 5,
      title: "Ghostbusters",
      year: "1984"
    },
    {
      id: 6,
      title: "Ram",
      year: "1984"
    },
    {
      id: 7,
      title: "Beetlejuice",
      year: "1988"
    },

    {
      id: 8,
      title: "Ghostbusters",
      year: "1984"
    },
    {
      id: 9,
      title: "Ram",
      year: "1984"
    },
    {
      id: 10,
      title: "Beetlejuice",
      year: "1988"
    },

    {
      id: 11,
      title: "Ghostbusters",
      year: "1984"
    },
    {
      id: 12,
      title: "Ram",
      year: "1984"
    },
    {
      id: 13,
      title: "Ram",
      year: "1984"
    },
    {
      id: 14,
      title: "Ram",
      year: "1984"
    },
    {
      id: 15,
      title: "Ram",
      year: "1984"
    },
    {
      id: 11,
      title: "Ghostbusters",
      year: "1984"
    },
    {
      id: 12,
      title: "Ram",
      year: "1984"
    },
    {
      id: 13,
      title: "Ram",
      year: "1984"
    },
    {
      id: 14,
      title: "Ram",
      year: "1984"
    },
    {
      id: 15,
      title: "Ram",
      year: "1984"
    },
    {
      id: 11,
      title: "Ghostbusters",
      year: "1984"
    },
    {
      id: 12,
      title: "Ram",
      year: "1984"
    },
    {
      id: 13,
      title: "Ram",
      year: "1984"
    },
    {
      id: 14,
      title: "Ram",
      year: "1984"
    },
    {
      id: 15,
      title: "Ram",
      year: "1984"
    }
  ];

  useEffect(() => {
    setFilteredData(data);
  }, []);

  useEffect(() => {
    const filtered = filterDataHandler(search);
    setFilteredData(filtered);
    pagination(currentPage);
    // getPageNo(filtered);
  }, [search]);

  const getPageNo = filtered => {
    
    const pageCount = filtered ? Math.ceil(filtered.length / pageSize) : 0;
    console.log("pageCount : ", pageCount);
    setTotalPages(pageCount);
    let pageNoArray = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNoArray.push(i);
    }
    setPageNumbers(pageNoArray);
   
  };

  const filterDataHandler = search => {
    const filtered = data.filter(entry =>
      Object.values(entry).some(
        val =>
          typeof val === "string" &&
          val.toLowerCase().includes(search.toLowerCase())
      )
    );
    return filtered;
  };

  const pagination = pageNo => {
   
    const filtered = filterDataHandler(search);

    const startIndex = (pageNo - 1) * parseInt(pageSize);
    const endIndex = parseInt(startIndex) + parseInt(pageSize);
    console.log("startIndex : ", startIndex, " endIndex ", endIndex);
    const list = filtered.slice(startIndex, endIndex);
    setFilteredData(list);
    getPageNo(filtered);
    setCurrentPage(pageNo);

    if(list.length === 0){
        const pageCount = Math.ceil(filtered.length / pageSize);
      pagination(pageCount);
      console.log("##pagination() calling...");
    }
    
    // console.log("##list.length: ", list.length, ', filteredData.length: ',filteredData.length);
  };

  useEffect(() => {
    pagination(currentPage);
    // const list2 = (search)? filteredData : data;
    // getPageNo(list2);
  }, [pageSize]);

  return (
    <div className="table-container">
      <div class="grid-container-3">
        <div class="grid-item">
          <span className="rows-per-page-label">Rows per page </span>
          <select
            name="rowsPerPage"
            id="rowsPerPage"
            className="rows-per-page"
            onChange={e => setPageSize(e.target.value)}
          >
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="grid-item">
          <input
            type="serach"
            className="input-field"
            placeholder="Serach"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="table-child-container">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {columns.map(col => (
                  <td>
                    {col.field === "action" ? (
                      <div className="table-btn-container">
                        <button
                          type="button"
                          className="btn btn-icon btn-info tooltip"
                         
                          onClick={() => console.log("ROW : " + row["id"])}
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                          <span class="tooltiptext">Edit</span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-icon btn-dengar tooltip"
                          onClick={() => deleteRecord(row["id"])}
                        >
                          <i class="fa-solid fa-trash-can"></i>
                          <span class="tooltiptext">Delete</span>
                        </button>
                      </div>
                    ) : (
                      row[col.field]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav className="pagination-container">
      <button className="pagination-btn" onClick={()=>{scrollLeft(250); pagination(1)}}>First Page</button>
      <button className={`btn-scroll tooltip ${(totalPages < 7 || currentPage === 1) ? 'disabled' : ''}`} onClick={()=>{scrollLeft(35); pagination(currentPage-1)}}>
      <i class="fa-solid fa-angles-left"></i>
      <span class="tooltiptext">Previous</span>
      </button>
        <div className="scroll-menu-container">
       
        <div className="scroll-menu" ref={scrollElement}>
         
        <ul className="pagination">
          {
              pageNumbers.map((pageNo, index) => (
            <li
              className={
                `${pageNo === currentPage ? "page-item active" : "page-item"}`
              }
              onClick={() => pagination(pageNo)}
            >
              <p className="page-link">{pageNo}</p>
            </li>
          ))}
          
        </ul>
        </div>
        </div>
        <button className={`btn-scroll tooltip ${totalPages < 7 ? 'disabled' : ''}`} onClick={()=>{scrollRight(35); pagination(currentPage+1)}}>
        <i class="fa-solid fa-angles-right"></i>
        <span class="tooltiptext">Next</span>
        </button>
        <button className="pagination-btn" onClick={()=>{scrollRight(250); pagination(totalPages)}}>Last Page</button>
      </nav>
    </div>
  );
};

export default DataTable2;
