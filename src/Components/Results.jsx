import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/Index";

const Results = () => {
  const { correct_questions, hiddenResults } = useStore();
  const navigate = useNavigate();

  const handleNavigate = () => {
    hiddenResults();
    navigate("/");
  };

  return (
    <div className="box__results">
      <h2>Has Terminado!</h2>
      <h3>Total De Respuestas Correctas : {correct_questions}</h3>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => handleNavigate()}
      >
        Empezar Nuevamente!
      </button>
    </div>
  );
};

export default Results;
