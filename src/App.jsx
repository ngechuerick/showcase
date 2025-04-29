import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import ResponsiveCards from "./pages/ResponsiveCards";
import Protected from "./components/Protected";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Layout />
            </Protected>
          }
        >
          <Route element={<Main />}>
            <Route path="/todos" element={<Todo />} />
            <Route path="/responsive" element={<ResponsiveCards />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
