import AuthLayouts from "@/layout";
import Login from "@/pages/login";
import Register from "@/pages/register";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const MyRoutes = () => {
  useEffect(() => {
    //  console.log('knlk', Home)
  }, []);
  return (
    <BrowserRouter>
      <Routes>
      <Route
          element={
            <AuthLayouts>
              <Outlet />
            </AuthLayouts>
          }
        >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
