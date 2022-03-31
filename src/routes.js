import { Routes, Route, Link } from "react-router-dom";
import StyleTestComponent from "./pages/styledTest";
import TemplateTestComponent from "./pages/templateTest";
import { LayoutContainer } from "./styles/container";

const IndexComponent = () => {
  return (
    <LayoutContainer>
      <p>
        <Link to={"/style-test"}>Style Test Page</Link>
      </p>
      <p>
        <Link to={"/template-style-test"}>Template Test Page</Link>
      </p>
    </LayoutContainer>
  );
};

const router_list = [
  { path: "/", element: <IndexComponent /> },
  { path: "/style-test", element: <StyleTestComponent /> },
  { path: "/template-style-test", element: <TemplateTestComponent /> },
];

const AppRouter = (props) => {
  return (
    <Routes>
      {router_list.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routes>
  );
};

export default AppRouter;
