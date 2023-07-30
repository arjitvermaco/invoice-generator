import React from "react";
import AppForm from "./AppForm";
import AppSidebar from "./AppSidebar";

export default function AppWrapper() {
  return (
  
      <div className="max-w-7xl mx-auto flex min-h-screen">
        <AppForm />
        <AppSidebar />
      </div>
    
  );
}
