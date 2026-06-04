// import React from 'react'

import { useState } from "react";

const advanceForm = () => {
  const [advanceData ,setAdvanceData] = useState()
  
    return (
    <>
      <h1>advanceForm</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Male
          <input type="radio" name="gender" value="male" />
        </label>
        <br />

        <label htmlFor="">
          female
          <input type="radio" name="gender" value="female" />
        </label>
        <br />

        <h2>country</h2>
        <label htmlFor="">
          Country
          <select name="country" id="">
            <option value="Pakistan">Pakistan</option>
            <option value="Switzerland">Switzerland</option>
            <option value="poland">poland</option>
          </select>
        </label>
        <br />

        <label htmlFor="">Agree</label>
        <input type="checkbox" name="agree" />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default advanceForm;
