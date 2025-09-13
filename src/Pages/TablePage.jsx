import Table from "../components/Table";
import { Edit, Trash } from "lucide-react";

import { useState, useEffect } from "react";

const TablePage = () => {
  const [data, setData] = useState([
    { employeeID: 12, employeeName: "Riya", location: "Durg" },
    { employeeID: 13, employeeName: "Harsh", location: "Raipur" },
    { employeeID: 14, employeeName: "Simmi", location: "Bilaspur" },
    { employeeID: 15, employeeName: "Nikita", location: "Korba" },
  ]);

  let newData = data.map((item) => ({
      Checkbox: {
        colType: "check",
        onChecked: () => handleChecked(item.employeeID),
        notChecked: () => handleNotChecked(item.employeeID),
      },
      EmployeeId: { colType: "text", data: item.employeeID },
      Name: { colType: "text", data: item.employeeName },
      Location: { colType: "text", data: item.location },
      Actions: {
        colType: "action",
        data: [
          {
            Icon: Edit,
            iconFunc: () => {
              handleEdit(item.employeeID);
            },
            iconBg: "#C2FFC7",
          },
          {
            Icon: Trash,
            iconFunc: () => {
              handleDelete(item.employeeID);
            },
            iconBg: "#FF8E9E",
          },
        ],
      },
  }));
  console.log(newData);

  const handleEdit = (id) => {
    console.log(`Employee Id : ${id} details edited.`);
  };

  const handleDelete = (id) => {
    console.log(`Employee Id : ${id} deleted.`);
  };

  const handleChecked = (id) => {
    console.log(`Row ${id} checked`);
  };

  const handleNotChecked = (id) => {
    console.log(`Row ${id} unchecked`);
  };



  const [formattedRowData, setFormattedRowData] = useState([
    {
      Checkbox: {
        colType: "check",
        onChecked: () => handleChecked(12),
        notChecked: () => handleNotChecked(12),
      },
      EmployeeId: { colType: "text", data: 12 },
      Name: { colType: "text", data: "Riya" },
      Location: { colType: "text", data: "Durg" },
      Actions: {
        colType: "action",
        data: [
          {
            Icon: Edit,
            iconFunc: () => {
              handleEdit(12);
            },
            iconBg: "#C2FFC7",
          },
          {
            Icon: Trash,
            iconFunc: () => {
              handleDelete(12);
            },
            iconBg: "#FF8E9E",
          },
        ],
      },
    },
    {
      Checkbox: {
        colType: "check",
        onChecked: () => handleChecked(13),
        notChecked: () => handleNotChecked(13),
      },
      EmployeeId: { colType: "text", data: 13 },
      Name: { colType: "text", data: "Harsh" },
      Location: { colType: "text", data: "Raipur" },
      Actions: {
        colType: "action",
        data: [
          {
            Icon: Edit,
            iconFunc: () => {
              handleEdit(13);
            },
            iconBg: "#C2FFC7",
          },
          {
            Icon: Trash,
            iconFunc: () => {
              handleDelete(13);
            },
            iconBg: "#FF8E9E",
          },
        ],
      },
    },
  ]);

  const tableData = {
    tableHeading: ["EmployeeId", "Name", "Location", "Actions", "Checkbox"],
    rowData: formattedRowData,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <Table data={tableData}></Table>
    </div>
  );
};

export default TablePage;
