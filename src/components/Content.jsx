import { Route, Routes } from "react-router-dom";
import { routers } from "../router";
import PrivateRoute from "../router/PrivateRoute";

function Content() {
  return (
    <Routes>
      {routers.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              route.isPrivate ? (
                <PrivateRoute>{route.element}</PrivateRoute>
              ) : (
                route.element
              )
            }
          />
        );
      })}
    </Routes>
  );
}

export default Content;
