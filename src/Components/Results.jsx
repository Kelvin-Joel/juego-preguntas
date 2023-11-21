import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/Index";
import "../Css/Results.css";

const Results = () => {
  const { correct_questions, hiddenResults,list_questions } = useStore();
  const navigate = useNavigate();

  const handleNavigate = () => {
    hiddenResults();
    navigate("/");
  };

  return (
    <div className="box__results">
      <div className="box__data">
        <h2>Resultados!</h2>
        <p>Acertastes</p>
        <h3>{correct_questions}</h3>
        <p>De Las Preguntas De {correct_questions}/{list_questions.length}</p>
        <button className="box__results-btn" onClick={() => handleNavigate()}>Empezar Nuevamente!</button>
      </div>
    </div>
  );
};

export default Results;
