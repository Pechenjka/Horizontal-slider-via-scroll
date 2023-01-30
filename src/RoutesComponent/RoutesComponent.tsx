import React from "react";
import { Layout } from "../layout";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main } from "../pages/Main";
import { NotFound } from "../pages/NotFound";

export const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="not-found" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="not-found" />} />
    </Routes>
  );
};
