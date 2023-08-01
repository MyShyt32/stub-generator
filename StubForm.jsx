export function StubForm({ stubInfo, setStubInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStubInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  function inputFocus(e) {
    if (e.target.value === e.target.defaultValue) {
      e.target.value = "";
    }
    return console.log(e.target);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setEmployeeName(employeeName)
    setStubInfo({ prev: true });
    console.log(stubInfo.employeeAdd.toUpperCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <h2>Employee Info:</h2>
      </div>
      <div className="form-row">
        <input
          onChange={handleChange}
          type="text"
          required
          name="employeeName"
          defaultValue={stubInfo.employeeName}
          onFocus={inputFocus}
        />
      </div>
      <div className="form-row">
        <input
          onChange={handleChange}
          type="text"
          required
          name="employeeAdd"
          defaultValue={stubInfo.employeeAdd}
          onFocus={inputFocus}
        />
        <input
          onChange={handleChange}
          type="text"
          name="employeeApt"
          defaultValue={stubInfo.employeeApt}
          onFocus={inputFocus}
        />
      </div>
      <div className="form-row">
        <input
          onChange={handleChange}
          type="text"
          required
          name="employeeCity"
          defaultValue={stubInfo.employeeCity}
          onFocus={inputFocus}
        />
        <input
          onChange={handleChange}
          type="text"
          required
          name="employeeState"
          defaultValue={stubInfo.employeeState}
          onFocus={inputFocus}
        />
        <input
          onChange={handleChange}
          type="text"
          required
          name="employeeZip"
          defaultValue={stubInfo.employeeZip}
          onFocus={inputFocus}
        />
      </div>
      <div className="form-row">
        <h2>Employer Info:</h2>
      </div>
      <div className="form-row">
        <input
          onChange={handleChange}
          type="text"
          required
          name="employerName"
          defaultValue={stubInfo.employerName}
          onFocus={inputFocus}
        />
      </div>
      <div className="form-row">
        <input
          onChange={handleChange}
          type="text"
          required
          name="employerAdd"
          defaultValue={stubInfo.employerAdd}
          onFocus={inputFocus}
        />
        <input
          onChange={handleChange}
          type="text"
          name="employerApt"
          defaultValue={stubInfo.employerApt}
          onFocus={inputFocus}
        />
      </div>
      <div className="form-row">
        <input
          onChange={handleChange}
          type="text"
          required
          name="employerCity"
          defaultValue={stubInfo.employerCity}
          onFocus={inputFocus}
        />
        <input
          onChange={handleChange}
          type="text"
          required
          name="employerState"
          defaultValue={stubInfo.employerState}
          onFocus={inputFocus}
        />
        <input
          onChange={handleChange}
          type="text"
          required
          name="employerZip"
          defaultValue={stubInfo.employerZip}
          onFocus={inputFocus}
        />
      </div>
      <button type="submit">Preview</button>
    </form>
  );
}
