import { useState } from "react"

const MultiFormHandling = () => {
  const [FormData,setFormData] = useState({
    name: "",
    email: "",
    age: ""
  })
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(FormData)
  }
  const getValues = (e)=>{
 const {name,value} = e.target;
 setFormData((prev)=>({
    ...prev,
    [name] : value
 }))
  }
    return (
    <>
    <form action="" onSubmit={handleSubmit}>

   <h1>MultiFormHandling</h1> 
    <label htmlFor="">Name</label>
    <input type="name" placeholder="name" name="name" value={FormData.name} onChange={getValues} />
    <br />

    <label htmlFor="">Email</label>
    <input type="email" placeholder="email" name="email" value={FormData.email} onChange={getValues} />
    <br />

    <label htmlFor="">Age</label>
    <input type="age" placeholder="age" name="age" value={FormData.age} onChange={getValues}/>
    <br />
    <button type="submit">submit</button>
    
    </form>
    </>
  )
}

export default MultiFormHandling