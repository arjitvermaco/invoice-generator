import React from "react";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import AppWrapper from "./components/AppWrapper";

export default function App() {
  return (
    <div className=" bg-gray-200 h-full">
      <AppHeader />
      <AppWrapper/>
    </div>
  );
}
