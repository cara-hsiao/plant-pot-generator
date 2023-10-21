import "./App.css";
import "./Fonts.css";
import MyRenderer from "./Renderer";
import data from "./downloader";

import { FaPrint } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

import * as React from "react";
import save from "save-file";

const App = () => {
  return (
    <div style={{ backgroundColor: "#ADCB8E" }}>
      <div className="App">
        <h1 className="header" style={{ color: "#22370D" }}>
          {" "}
          Planter STL Generator
        </h1>
        <div style={{ className: "wrapper" }}>
          <div
            style={{
              height: 380,
              width: "50%",
              float: "left",
              backgroundColor: "white",
              borderRadius: "10px 0px 0px 10px"
            }}
          >
            <h2 style={{ textAlign: "center" }}>STL Preview</h2>
            <MyRenderer />
          </div>
          <div
            style={{
              height: 380,
              width: "50%",
              float: "right",
              backgroundColor: "#7CA553",
              borderRadius: "0px 10px 10px 0px"
            }}
          >
            <h2 style={{ textAlign: "center" }}>Parameters</h2>
            <div>
              <form>
                <div
                  style={{
                    paddingLeft: "25%",
                    paddingTop: "1%",
                    textAlign: "left"
                  }}
                >
                  <input
                    type="radio"
                    style={{ accentColor: "#D8ABCB" }}
                    id="inches"
                    name="inches"
                  />
                  <label htmlFor="inches">Inches</label>
                  <input
                    type="radio"
                    style={{ accentColor: "#D8ABCB" }}
                    id="centimeters"
                    name="centimeters"
                  />
                  <label htmlFor="centimeters">Centimeters</label>
                  <br />
                  <input type="text" id="topdiam" name="topdiam" required="" />
                  <label
                    htmlFor="topdiam"
                    style={{ lineHeight: 2, paddingLeft: "3%" }}
                  >
                    Top Outer Diameter
                  </label>
                  <br />
                  <input type="text" id="botdiam" name="botdiam" required="" />
                  <label
                    htmlFor="botdiam"
                    style={{ lineHeight: 2, paddingLeft: "3%" }}
                  >
                    Bottom Inner Diameter
                  </label>
                  <br />
                  <input
                    type="text"
                    id="potheight"
                    name="potheight"
                    required=""
                  />
                  <label
                    htmlFor="potheight"
                    style={{ lineHeight: 2, paddingLeft: "3%" }}
                  >
                    Height
                  </label>
                  <br />
                  <input type="text" id="wall" name="wall" required="" />
                  <label
                    htmlFor="wall"
                    style={{ lineHeight: 2, paddingLeft: "3%" }}
                  >
                    Wall Thickness
                  </label>
                  <br />
                  <label className="switch">
                    <input type="checkbox" id="drainage" />
                    <span className="slider round" />
                  </label>
                  <label
                    htmlFor="holenum"
                    style={{ lineHeight: 2, paddingLeft: "3%" }}
                  >
                    Drainage Holes
                  </label>
                  <br />
                  <div id="div01">
                    <input type="text" id="holediam" name="holediam" />
                    <label
                      htmlFor="holediam"
                      style={{ lineHeight: 2, paddingLeft: "3%" }}
                    >
                      Drainage Hole Diameter
                    </label>
                    <br />
                  </div>
                </div>
                {/* submit */}
                <div style={{ textAlign: "center", paddingTop: "5%" }}>
                  <input
                    onclick="createfile()"
                    type="submit"
                    defaultValue="Render"
                    className="render"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="wrapper2" style={{ textAlign: "center" }}>
          <button
            className="button"
            onClick={async () => await save(await save(data, "planter.stl"))}
          >
            <i /> <FaDownload /> Download STL
          </button>

          <button className="button">
            <i /> <AiFillHeart /> Support{" "}
          </button>

          <button className="button">
            <i /> <FaPrint /> Print on Demand
          </button>
        </div>

        <footer>
          <p style={{ color: "#22370D" }}>
            Problems or Requests? Fill out this{" "}
            <a href="https://forms.gle/rzUAMtanYpqGdt1o9">feedback form</a>!
          </p>

          <p style={{ color: "#22370D" }}>
            <a href="https://github.com/cara-hsiao">CH 2023</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
