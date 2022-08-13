import React from "react";
import "./saleProduct.css";
import MainCard from "../custom-component/MainCard";
import PaperContainer from "../custom-component/PaperContainer";

const SaleProduct = () => {
  return (
    <>
      <MainCard title="Sale Product">
        <PaperContainer className="sale-product" paperTitle="Add Sale Product">
          <form action="#">
            <div class="grid-container-3">
              <div class="grid-item">
                <span className="field-label">Bill No.</span>
                <input type="number" className="input-field" required />
              </div>
            </div>

            <div class="grid-container-3">
              <div class="grid-item">
                <span className="field-label">First Name</span>
                <input type="text" className="input-field" required />
              </div>
              <div class="grid-item">
                <span className="field-label">Last Name</span>
                <input type="text" className="input-field" required />
              </div>
              <div class="grid-item">
                <span className="field-label">Address</span>
                <textarea
                  className="textarea-field"
                 
                  id="aboutDescription"
                  data-role="none"
                ></textarea>
              </div>
            </div>

            <div class="grid-container-3">
              <div class="grid-item">
                <span className="field-label">Mobile No.</span>
                <input type="text" className="input-field" required />
              </div>
              <div class="grid-item">
                <span className="field-label">Name</span>
                <input type="text" className="input-field" required />
              </div>
              <div class="grid-item">
                <span className="field-label">Name</span>
                <input type="text" className="input-field" required />
              </div>
            </div>

            <div class="grid-container-1">
            <div class="divider"><span>Add Sale Products</span></div>
            </div>

            <div class="grid-container-3">
              <div class="grid-item">
                <span className="field-label">Mobile No.</span>
                <input type="text" className="input-field" required />
              </div>
              <div class="grid-item">
                <span className="field-label">Name</span>
                <input type="text" className="input-field" required />
              </div>
              <div class="grid-item">
                <span className="field-label">Name</span>
                <input type="text" className="input-field" required />
              </div>
            </div>

            <div class="grid-container-3">
              <div class="grid-item">
                <span className="field-label">Mobile No.</span>
                <input type="text" className="input-field" required />
              </div>
              <div class="grid-item">
                <span className="field-label">Name</span>
                <input type="text" className="input-field" required />
              </div>
              <div class="grid-item">
                <span className="field-label">Name</span>
                <input type="text" className="input-field" required />
              </div>
            </div>

            <div class="grid-container-3">
              <div class="grid-item btn-container">
                <button type="button" className="btn btn-hover btn-success">
                  Save
                </button>
                <button type="reset" className="btn btn-hover btn-info">
                  Clear
                </button>
              </div>
            </div>
          </form>
        </PaperContainer>
      </MainCard>
    </>
  );
};

export default SaleProduct;
