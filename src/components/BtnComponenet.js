import React from "react";

function BtnComponent(props) {
    return (
      <>
      <div>
        {(props.status === 0)? 
             <button className="btn-start btn" onClick={props.start}>Start</button> : ""
        }
        {(props.status === 1)? 
        <div>
             <button className="btn-stop btn" onClick={props.stop}>Stop</button>
             <button className="btn-reset btn" onClick={props.reset}>Reset</button>
             </div>: ""
        }

        {(props.status === 2)? 
        <div>
             <button className="btn-resume btn" onClick={props.resume}>Resume</button>
             <button className="btn-reset btn" onClick={props.reset}>Reset</button>
             </div>: ""
        }
     
      </div>
      </>
    );
  }
  
  export default BtnComponent;