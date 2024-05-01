

const heading1 = React.createElement("h1", { id: "jik" }, 'Hello Ayya family');
const root4 = ReactDOM.createRoot(document.getElementById('root'));
root4.render(heading1);
console.log(heading1);

const heading2 = React.createElement("h1", {}, 'Hello Ayya family');
const root2 = ReactDOM.createRoot(document.getElementById('root1'));
root2.render(heading2);
/*Nested */
/*
<div id="parent"><div>
    <div id="child1"><div>
        <h1>I will suceeded or atleat i will try</h1>
        <h3>I will suceeded or atleat i will try</h3>
    </div>
     <div id="child2"><div>
        <h1>I will suceeded or atleat i will try</h1>
        <h3>I will suceeded or atleat i will try</h3>
    </div>
 <div>

*/
/**REpresented as an object */
/**[] =>Reprsents   array of object */


/*  VVVI

IF SUPPOSE ANY CONTENTS PRESENT INSIDE THE DIV(ROOT),IT REPLEACE THE CONTENT WHAT WE ADD.
IT JUST GIVE SOME DEVELOPER METHODS ,THAT IS HELP IN  CREATING FASTER APPPLICATION.
REACT CAN INJECT IN EXIST PIECE OF APPLICATION
CREATEELEMENT NOTHING BUT AN OBJECT.
 */

const parent1 = React.createElement("div", { id: "parent" },
[
    React.createElement("div", { id: "child1" },
       [React.createElement("h1", {}, "I will succeed or at least I will try"),React.createElement("h3", {}, "I will succeed or at least I will try")]
    )],
    [
        React.createElement("div", { id: "child2" },
           [React.createElement("h1", {}, "I will succeed or at least I will try"),React.createElement("h3", {}, "I will succeed or at least I will try")]
        )]
);
const root3 = ReactDOM.createRoot(document.getElementById("root2"));
root3.render(parent1);
