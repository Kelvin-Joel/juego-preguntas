import { useStore } from "../Store/Index";
import {Link} from "react-router-dom";
import "../Css/Start.css";
import data from "../db/Data.json"

const Start = () => {
  const {selectedTema}=useStore();

  return (
    <div className="content__start">
      {data.map(item=>(
        <div className="content__card" key={item.id} onClick={()=>selectedTema(item.name)}>
          <img src={item.image} alt=""/>
          <p style={{color:"#fff"}}>{item.name}</p>
          <Link className="btn__card" to="/main">Start</Link>
        </div>
      ))}
    </div>
  );
};

export default Start;
