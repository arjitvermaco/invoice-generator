import React from "react";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import AppWrapper from "./components/AppWrapper";
import AppProvider from "./context/AppProvider";

export default function App() {
  return (
    <AppProvider>
    <div className=" bg-gray-200 h-full">
      <AppHeader />
      <AppWrapper/>
    </div>
    </AppProvider>
  );
}
