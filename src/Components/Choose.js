import { Link } from "react-router-dom";

function Choose() {
  return (
    <>
      <div>
        <button type="button" id="Btn1">
          X
        </button>
        <button id="Btn2" type="button">
          O
        </button>
      </div>
      <div
        id="Start"
        className="btn btn-outline-primary"
        
      >
        <Link to={"Game"}>Start Game</Link>
      </div>
    </>
  );
}

export default Choose;
