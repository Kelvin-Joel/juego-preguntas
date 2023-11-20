import { create } from "zustand";
import Capitales from "../DB/capitales.json";
import Ciencia from "../DB/Ciencia.json";
import Tecnologia from "../DB/tecnologia.json";
import Astronomia from "../DB/Astronomia.json";
import Historia from "../DB/Historia.json";
import Geografia from "../DB/Geografia.json";

export const useStore = create((set, get) => ({
  list_questions: [],
  pagination: 0,
  questions: {},
  correct_questions: 0,
  select_button: null,
  ShowResults: 0,
  temas :{
    Capitales:Capitales,
    Ciencia:Ciencia,
    Tecnologia:Tecnologia,
    Astronomia:Astronomia,
    Historia:Historia,
    Geografia:Geografia,
  },
  /*********************************************************************** */
  selectedTema(tema) {
    console.log(tema)
    console.log(get().temas.hasOwnProperty(tema))
    if(get().temas.hasOwnProperty(tema)){
      set({ list_questions: get().temas[tema] });
      set({ questions: get().list_questions[get().pagination] });
      return
    }
    /* switch (tema) {
      case "Capitales De America":
        set({ list_questions: capitales });
        set({ questions: get().list_questions[get().pagination] });
        break;
      case "Ciencia":
        set({ list_questions: ciencia });
        set({ questions: get().list_questions[get().pagination] });
        break;
      case "tecnologia":
        set({ list_questions: tecnologia });
        set({ questions: get().list_questions[get().pagination] });
        break;
      case "Astronomia":
        set({ list_questions: Astronomia });
        set({ questions: get().list_questions[get().pagination] });
        break;
      case "Historia":
        set({ list_questions: Historia });
        set({ questions: get().list_questions[get().pagination] });
        break;
      case "Geografia":
        set({ list_questions: Geografia });
        set({ questions: get().list_questions[get().pagination] });
        break;
      default:
        break;
    } */
  },
  /*********************************************************************** */
  handleButtonClick(button) {
    set({ select_button: get().select_button === button ? null : button });
  },
  /*********************************************************************** */
  next() {
    set({ ShowResults: get().ShowResults + 1 });
    if (get().pagination !== get().list_questions.length - 1) {
      set({pagination: get().pagination + 1});
      set({ questions: get().list_questions[get().pagination] });
      get().getAnswer();
    } else {
      set({ pagination: 0 });
      
      set({ questions: get().list_questions[get().pagination] });
    }
    if (get().ShowResults > get().list_questions.length) {
      set({ ShowResults: 0 });
      return;
    }
  },
  /*********************************************************************** */
  getAnswer(answer) {
    get().handleButtonClick(answer);
    set((state) => {
      if (get().questions.correct_answer === answer) {
        return { correct_questions: state.correct_questions + 1 };
      }
      return {};
    });
  },
  ResetPagination() {
    set({ pagination: 0 });
    set({correct_questions:0})
  },
  hiddenResults () {
    set({ ShowResults: 0 });
    set({correct_questions:0})
  }
}));
/*********************************************************************** */
