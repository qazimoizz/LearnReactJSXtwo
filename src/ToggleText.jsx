import { useState } from "react";

const ToggleText = () => {
  const [isvisible, setVisible] = useState(false);
  const [like, setLike] = useState(false);

  return(
<>
<button onClick={()=> setVisible(!isvisible)}>
    {isvisible ? "hide" : "show"}
</button>
{isvisible && <p>this is my secret msg</p>}
<br /> <br />   
<button onClick={()=> setLike(!like)}>
    {like ? "❤️ Liked" : "🤍 Like"}
</button>
</>

  )
};

export default ToggleText;
