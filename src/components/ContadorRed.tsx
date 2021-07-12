import { useReducer } from "react";

const initialState = {
  contador: 0,
}

type ActionType = { type: 'incrementar' } | { type: 'decrementar' } //puede ser tipo incrementar, o decrementar ("|") 

//Reducer siempre va retonar un state nuevo
const contadorReducer = (state:typeof initialState, action: ActionType) => {
  switch(action.type){
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1
      };
    case 'decrementar':
      return {
        ...state,
        contador: state.contador - 1
      }
    default: //en caso se haga una accion que no esperemos, retorne solo el state
      return state; //siempre se regresa el state
  }
}

export const ContadorRed = () => {
  //dispatch: para disparar actions de tipo "ActionType"
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);
  return (
    <>
      <h2>Counter: {contadorState.contador}</h2>
      <button className="btn btn-outline-primary" 
              onClick={()=>dispatch({type:'incrementar'})}
              >
        +1
      </button>
      <button className="btn btn-outline-primary" 
              onClick={()=>dispatch({type:'decrementar'})}
              >
        -1
      </button>
    </>
  )
}