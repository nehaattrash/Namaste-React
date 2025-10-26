import React from "react";
import ReactDOM from "react-dom/client";

//React Element -> Js Object -> render function -> converts js obj to html and push it to browser
const heading = React.createElement("h1",{id:"heading"},"Hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);

//Jsx - HTML like or JSX like syntax
//JSX is not pure JS , it is neither understood by the browser nor React
//JSX is transpiled(converted) before it reaches to the browser
//JSX-> Babel ->React.createElement() -> ReactElement -> JS Obj -> render(JS Obj) -> HTML
const jsxHeading = <h1 className="heading" tabIndex="0">Hello World from JSX</h1>;
console.log(jsxHeading);

//React Functional Components 
const Title = () =>{
    return <h1>Title Component</h1>;
};
const HeadingComponent = () =>{
    return (
    <div id="container">
        <Title/>
        <Title></Title>
        {Title()}
        {elem}
        <h1>Hello World from Functional Component</h1>
    </div>
    );
};
const elem = (
    <div>
        <Title/>
        <h1>React Element</h1>
    </div>
);
console.log(HeadingComponent());
root.render(<HeadingComponent/>);