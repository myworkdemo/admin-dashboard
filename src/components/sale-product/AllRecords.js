import React from "react";
import MainCard from "../custom-component/MainCard";
import PaperContainer from "../custom-component/PaperContainer";
import DataTableComponent from "../custom-component/datatable/DataTableComponent";
import DataTable2 from "../custom-component/datatable/DataTable2";

const AllRecords = () => {

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

      const deleteRecord = (id) =>{
          alert('deleteRecord : '+id)
      }

  return (
    <>
      <MainCard title="All Sale Products">
        <PaperContainer className="sale-product" paperTitle="">
           <DataTable2 deleteRecord={deleteRecord}/>
        </PaperContainer>
      </MainCard>
    </>
  );
};

export default AllRecords;
