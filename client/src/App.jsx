import React from "react";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    console.log("Opening modal in mode:", mode);
    setIsOpen(true);
    setModalMode(mode);
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("modal mode Add");
    } else {
      console.log("modal mode Edit");
    }
  };

  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} />
      <TableList onOpen={() => handleOpen("edit")} />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        mode={modalMode}
      />
    </>
  );
};

export default App;
