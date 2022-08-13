import React, { useState } from "react";
import "./home.css";
import MainCard from "../custom-component/MainCard";
import Paper from "../custom-component/PaperContainer";

const Home = () => {
  return (
    <>
      <MainCard title="Home">
        <Paper className="home">
          <div class="grid-container">
            <div className="grid-row">
              <div className="grid-col">
                <div className="grid-item">
                  <span>Bill No.</span>
                  <input />
                </div>
                <div className="grid-item">
                  <span>First Name</span>
                  <input />
                </div>
                <div className="grid-item">
                  <span>Last Name</span>
                  <input />
                </div>
              </div>

              <div className="grid-col">
                <div className="grid-item">
                  <span>Address</span>
                  <input />
                </div>
                <div className="grid-item">
                  <span>Mobile No.</span>
                  <input />
                </div>
                <div className="grid-item">
                  <span>1</span>
                  <input />
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </MainCard>
    </>
  );
};

export default Home;
