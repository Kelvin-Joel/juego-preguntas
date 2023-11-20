import { Link } from "react-router-dom";
import { useStore } from "../Store/Index";
import Results from "./Results";
import "../Css/Questions.css";

const Main = () => {
  const {
    next,
    getAnswer,
    select_button,
    questions,
    list_questions,
    pagination,
    ShowResults,
    ResetPagination
  } = useStore();

  return (
    <div className="question_conteiner">
      <p className="question__pagination">
        {pagination + 1}/{list_questions.length}
      </p>
      <Link className="questions__btn-reset" onClick={()=>ResetPagination()} to="/">Reiniciar</Link>

      <h2 className="question__title">{questions.question}</h2>
      <div className="question_options">
        {questions.options !== undefined
          ? questions.options.map((opt) => (
              <button
                className={`${
                  select_button === opt ? "color1" : ""
                } question__options-button`}
                key={opt}
                onClick={() => getAnswer(opt)}
              >
                {opt}
              </button>
            ))
          : ""}
      </div>
      <button onClick={next} className="btn__next">
        {pagination === list_questions.length - 1 ? "Finalizar" : "Siguiente"}
      </button>
      {ShowResults === list_questions.length ? <Results /> : ""}
    </div>
  );
};

export default Main;
