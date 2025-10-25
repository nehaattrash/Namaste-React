import React from "react";
import ReactDOM from "react-dom/client";
   const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React");

    /** Nested div
    * <div id="parent">
    *   <div id="child">
    *       <h1>I'm h1 tag</h1>
    *   </div>
    * </div>
    */

   const ele = React.createElement("div",{id:"parent"},
   React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"I'm h1 tag")));

    /** Siblings inside div
    * <div id="parent">
    *   <div id="child1">
    *       <h1>I'm h1 tag</h1>
    *        <h2>I'm h2 tag</h2>
    *   </div>
    *   <div id="child2">
    *       <h1>I'm h1 tag</h1>
    *        <h2>I'm h2 tag</h2>
    *   </div>
    * </div>
    */

   const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[React.createElement("h1",{id:"h11"},"I'm h1 tag"),React.createElement("h2",{id:"h12"},"I'm h2 tag")]),
    React.createElement("div",{id:"child2"},[React.createElement("h1",{id:"h21"},"I'm h1 tag"),React.createElement("h2",{id:"h22"},"I'm h2 tag")])
]);
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(parent);