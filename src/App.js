import React from "react";
import TableLoading from "./components/TableLoading";

export default function App() {
  return (
    <>
      <TableLoading color="#ccc" highlightColor="#dadada" />
      <TableLoading />
      <TableLoading color="#ccc" highlightColor="#dadada" />
      <TableLoading />
    </>
  );
}
