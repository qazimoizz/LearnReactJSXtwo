import { useState } from "react";

function FormHandle() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type something..."
      />

      <p> hello, {text || "guest "}</p>
    </>
  );
}

export default FormHandle;