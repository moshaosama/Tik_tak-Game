import { Routes, Route } from "react-router-dom";
import Choose from "./Choose";
import Game from "./Game";
function Router_Pages() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Choose />}></Route>
          <Route path="/Game" element={<Game />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default Router_Pages;
