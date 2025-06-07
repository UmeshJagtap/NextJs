// Ref : https://codepen.io/tonkec/pen/aRMaWR
import React from "react";
import "./Proto2.css";

const Proto2 = () => {
  return (
    <div>
      <main style={{ border: "1px solid red", margin: "1rem", padding: "120px" }}>
        <h1>
          Fullscreen menu
          <span> with cool links </span>
        </h1>
        <input type="checkbox" id="myInput" />
        <label htmlFor="myInput">
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </label>
        <aside>
          <div className="aside-section aside-left">
            <div className="aside-content">
              <p> Some text that will make you click the cta </p>
              <button className="button"> CTA </button>
            </div>
          </div>
          <div className="aside-section aside-right">
            <ul className="aside-list">
              <li>
                <a href="" className="aside-anchor">
                  Link
                </a>
              </li>
              <li>
                <a href="" className="aside-anchor">
                  Link
                </a>
              </li>
              <li>
                <a href="" className="aside-anchor">
                  Link
                </a>
              </li>
              <li>
                <a href="" className="aside-anchor">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Proto2;
