import { useState } from "react"


const ValidationForm = () => {
 const [name,setName] = useState("")
 const [email,setEmail] = useState("")
 const [error,setError] = useState("")
 
 
    const handleSubmit =(e)=>{
        e.preventDefault()

        if(!name || !email){
            setError("please fill all field")
        }else{
            setError("")
            console.log("formSubmitted", name,email )
            alert("form submitted sucessfully")
        }
}
    return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <h1>ValidationForm</h1>
        <label htmlFor="">Name
            <input type="text" placeholder="Enter your name" value={name}
            onChange={(e)=>setName(e.target.value)}
            />
        </label>
        <label htmlFor="">Email
            <input type="text" placeholder="Enter your Email" value={email}
            onChange={(e)=>setEmail(e.target.value)} />
        </label>
        {email && <p>{error}</p>}
    <button type="submit"> submit</button>
    </form>
    </>
  )
}

export default ValidationForm