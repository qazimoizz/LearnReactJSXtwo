import { useState } from "react";

const NewForm = () => {
const [formData,setFormData] = useState({
gender: "",
agree: false,
country: "Pakistan"
})
const handleForm = (e) =>{
    const {name , type , value , checked} = e.target
    setFormData((prev) =>({
        ...prev,
        [name] : type === "checkbox" ? checked : value


    }))

}

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <h1>advanceForm</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Male
          <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleForm} />
        </label>
        <br />

        <label htmlFor="">
          female
          <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleForm} />
        </label>
        <br />

        <h2>country</h2>
        <label htmlFor="">
          Country
          <select name="country" value={formData.country} id="" onChange={handleForm} > 
            <option value="Pakistan">Pakistan</option>
            <option value="Switzerland">Switzerland</option>
            <option value="poland">poland</option>
          </select>
        </label>
        <br />

        <label htmlFor="">Agree</label>
        <input type="checkbox" name="agree" checked={formData.agree} onChange={handleForm} />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewForm;
