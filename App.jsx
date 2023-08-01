import { useState } from "react";
import "./components/StubForm";
import "./App.css";
import { StubForm } from "./components/StubForm";
import { ADPStub } from "./components/adp/ADPStub";

export default function App() {
  const [stubInfo, setStubInfo] = useState({
    employeeName: "Name",
    employeeAdd: "Address",
    employeeApt: "Apt",
    employeeCity: "City",
    employeeState: "State",
    employeeZip: "Zip",
    employerName: "Name",
    employerAdd: "Address",
    employerApt: "ATTN/Suite",
    employerCity: "City",
    employerState: "State",
    employerZip: "Zip",
    prev: false,
  });

  return (
    <>
      {stubInfo.prev ? (
        <ADPStub />
      ) : (
        <StubForm stubInfo={stubInfo} setStubInfo={setStubInfo} />
      )}
    </>
  );

  // return <StubForm stubInfo={stubInfo} setStubInfo={setStubInfo} />;
}
