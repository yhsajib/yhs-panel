import React from "react";
import { Provider } from "react-redux";
import { store } from "./store"; // Adjust to match your Redux store's path

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
