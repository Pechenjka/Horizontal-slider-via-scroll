import React from "react";
import Styles from "./style.module.scss";
import { RoutesComponent } from "../../RoutesComponent";

export const App: React.FC = () => {
  return (
    <div className={Styles.app}>
      <RoutesComponent />
    </div>
  );
};
