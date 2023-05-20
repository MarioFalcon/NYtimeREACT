import type { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../../views/Dashboard";


const Router: FC = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Navigate replace to="/dashboard" />} />
         </Routes>
      </BrowserRouter>
   );
}; 


export default Router;