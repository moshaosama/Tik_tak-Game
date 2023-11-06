import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Choose from "./Choose";

function Game() {
  const [Chosse, setChoose] = useState("X");
  return (
    <>
      <div id="Page">
        <Container
          style={{
            border: " 10px solid",
            borderRadius: "35px",
            padding: "1pc",
          }}
        >
          <Row>
            <Col>
              <button
                id="1"
                style={{
                  borderRadius: "20px",
                  border: "1px solid",
                  boxShadow: "3px 4px 18px #ccc",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (Chosse == "X") {
                    setChoose("O");
                  } else if (Chosse == "O") {
                    setChoose("X");
                  }
                  document.getElementById("1").innerText = Chosse;

                  if (
                    document.getElementById("1").innerText ==
                      document.getElementById("2").innerText &&
                    document.getElementById("2").innerText ==
                      document.getElementById("3").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("1").innerText ==
                      document.getElementById("4").innerText &&
                    document.getElementById("4").innerText ==
                      document.getElementById("7").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("1").innerText ==
                      document.getElementById("5").innerText &&
                    document.getElementById("5").innerText ==
                      document.getElementById("9").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  }
                }}
              >
                Enter
              </button>
            </Col>
            <Col>
              <button
                id="2"
                style={{
                  borderRadius: "20px",
                  border: "1px solid",
                  boxShadow: "3px 4px 18px #ccc",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (Chosse == "X") {
                    setChoose("O");
                  } else if (Chosse == "O") {
                    setChoose("X");
                  }
                  document.getElementById("2").innerText = Chosse;

                  if (
                    document.getElementById("1").innerText ==
                      document.getElementById("2").innerText &&
                    document.getElementById("2").innerText ==
                      document.getElementById("3").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("2").innerText ==
                      document.getElementById("5").innerText &&
                    document.getElementById("5").innerText ==
                      document.getElementById("8").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  }
                }}
              >
                Enter
              </button>
            </Col>
            <Col>
              <button
                id="3"
                style={{
                  borderRadius: "20px",
                  border: "1px solid",
                  boxShadow: "3px 4px 18px #ccc",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (Chosse == "X") {
                    setChoose("O");
                  } else if (Chosse == "O") {
                    setChoose("X");
                  }
                  document.getElementById("3").innerText = Chosse;

                  if (
                    document.getElementById("1").innerText ==
                      document.getElementById("2").innerText &&
                    document.getElementById("2").innerText ==
                      document.getElementById("3").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("3").innerText ==
                      document.getElementById("6").innerText &&
                    document.getElementById("6").innerText ==
                      document.getElementById("9").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("3").innerText ==
                      document.getElementById("5").innerText &&
                    document.getElementById("5").innerText ==
                      document.getElementById("7").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  }
                }}
              >
                Enter
              </button>
            </Col>
          </Row>

          <Row>
            <Col>
              <button
                id="4"
                style={{
                  borderRadius: "20px",
                  border: "1px solid",
                  boxShadow: "3px 4px 18px #ccc",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (Chosse == "X") {
                    setChoose("O");
                  } else if (Chosse == "O") {
                    setChoose("X");
                  }
                  document.getElementById("4").innerText = Chosse;

                  if (
                    document.getElementById("4").innerText ==
                      document.getElementById("5").innerText &&
                    document.getElementById("5").innerText ==
                      document.getElementById("6").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("1").innerText ==
                      document.getElementById("4").innerText &&
                    document.getElementById("4").innerText ==
                      document.getElementById("7").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  }
                }}
              >
                Enter
              </button>
            </Col>
            <Col>
              <button
                id="5"
                style={{
                  borderRadius: "20px",
                  border: "1px solid",
                  boxShadow: "3px 4px 18px #ccc",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (Chosse == "X") {
                    setChoose("O");
                  } else if (Chosse == "O") {
                    setChoose("X");
                  }
                  document.getElementById("5").innerText = Chosse;

                  if (
                    document.getElementById("4").innerText ==
                      document.getElementById("5").innerText &&
                    document.getElementById("5").innerText ==
                      document.getElementById("6").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("2").innerText ==
                      document.getElementById("5").innerText &&
                    document.getElementById("5").innerText ==
                      document.getElementById("8").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("1").innerText ==
                      document.getElementById("5").innerText &&
                    document.getElementById("5").innerText ==
                      document.getElementById("9").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("3").innerText ==
                      document.getElementById("5").innerText &&
                    document.getElementById("5").innerText ==
                      document.getElementById("7").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  }
                }}
              >
                Enter
              </button>
            </Col>
            <Col>
              <button
                id="6"
                style={{
                  borderRadius: "20px",
                  border: "1px solid",
                  boxShadow: "3px 4px 18px #ccc",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (Chosse == "X") {
                    setChoose("O");
                  } else if (Chosse == "O") {
                    setChoose("X");
                  }
                  document.getElementById("6").innerText = Chosse;

                  if (
                    document.getElementById("4").innerText ==
                      document.getElementById("5").innerText &&
                    document.getElementById("5").innerText ==
                      document.getElementById("6").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("3").innerText ==
                      document.getElementById("6").innerText &&
                    document.getElementById("6").innerText ==
                      document.getElementById("9").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  }
                }}
              >
                Enter
              </button>
            </Col>
          </Row>

          <Row>
            <Col>
              <button
                id="7"
                style={{
                  borderRadius: "20px",
                  border: "1px solid",
                  boxShadow: "3px 4px 18px #ccc",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (Chosse == "X") {
                    setChoose("O");
                  } else if (Chosse == "O") {
                    setChoose("X");
                  }

                  document.getElementById("7").innerText = Chosse;
                  if (
                    document.getElementById("7").innerText ==
                      document.getElementById("8").innerText &&
                    document.getElementById("8").innerText ==
                      document.getElementById("9").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("1").innerText ==
                      document.getElementById("4").innerText &&
                    document.getElementById("4").innerText ==
                      document.getElementById("7").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("3").innerText ==
                      document.getElementById("5").innerText &&
                    document.getElementById("5").innerText ==
                      document.getElementById("7").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  }
                }}
              >
                Enter
              </button>
            </Col>
            <Col>
              <button
                id="8"
                style={{
                  borderRadius: "20px",
                  border: "1px solid",
                  boxShadow: "3px 4px 18px #ccc",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (Chosse == "X") {
                    setChoose("O");
                  } else if (Chosse == "O") {
                    setChoose("X");
                  }

                  document.getElementById("8").innerText = Chosse;

                  if (
                    document.getElementById("7").innerText ==
                      document.getElementById("8").innerText &&
                    document.getElementById("8").innerText ==
                      document.getElementById("9").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("2").innerText ==
                      document.getElementById("5").innerText &&
                    document.getElementById("5").innerText ==
                      document.getElementById("8").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  }
                }}
              >
                Enter
              </button>
            </Col>
            <Col>
              <button
                id="9"
                style={{
                  borderRadius: "20px",
                  border: "1px solid",
                  boxShadow: "3px 4px 18px #ccc",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (Chosse == "X") {
                    setChoose("O");
                  } else if (Chosse == "O") {
                    setChoose("X");
                  }

                  document.getElementById("9").innerText = Chosse;

                  if (
                    document.getElementById("7").innerText ==
                      document.getElementById("8").innerText &&
                    document.getElementById("8").innerText ==
                      document.getElementById("9").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("3").innerText ==
                      document.getElementById("6").innerText &&
                    document.getElementById("6").innerText ==
                      document.getElementById("9").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  } else if (
                    document.getElementById("1").innerText ==
                      document.getElementById("5").innerText &&
                    document.getElementById("5").innerText ==
                      document.getElementById("9").innerText
                  ) {
                    document.getElementById("Win").style.display = "flex";
                  }
                }}
              >
                Enter
              </button>
            </Col>
          </Row>
        </Container>
        <div>
          <h1
            id="Win"
            className="text-primary"
            style={{
              // display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bolder",
              height: "15pc",
              display: "none",
            }}
          >
            Win
          </h1>
        </div>
      </div>
    </>
  );
}
export default Game;
