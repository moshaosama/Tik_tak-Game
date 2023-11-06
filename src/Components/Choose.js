import { Link } from "react-router-dom";

function Choose() {
  return (
    <>
      <div>
        <button
          type="button"
          style={{
            height: "100px",
            width: "100px",
            margin: "15pc 28pc",
            border: "transparent",
            borderRadius: "30px",
            fontSize: "30px",
            fontWeight: "bolder",
          }}
        >
          X
        </button>
        <button
          type="button"
          style={{
            height: "100px",
            width: "100px",
            border: "transparent",
            borderRadius: "30px",
            fontSize: "30px",
            fontWeight: "bolder",
          }}
        >
          O
        </button>
      </div>
      <div
        className="btn btn-outline-primary"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "-5pc 40pc",
        }}
      >
        <Link to={"Game"}>Start Game</Link>
      </div>
    </>
  );
}

export default Choose;
