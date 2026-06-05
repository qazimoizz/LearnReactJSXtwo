import { useState } from "react";

function FormHandle() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const handleForm = (e) => {
    e.preventDefault();
    console.log("name :", name);
    console.log("email :", email);
  };
  const getName = (e) => {
    return setName(e.target.value);
  };
  const getEmail = (e) => {
    return setEmail(e.target.value);
  };

  return (
    <>
      <h1>React form submit project</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={getName} />

        <br />

        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={getEmail} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormHandle;
