import { useReducer } from "react";

const initialState = {
  contador: 0,
}

type ActionType = 
  { type: 'incrementar' } | //puede ser tipo incrementar, o decrementar ("|") 
  { type: 'decrementar' } |
  { type: 'custom', payload: number}
  

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
    case 'custom':
      return {
        ...state,
        contador: action.payload
      }
    default: //en caso se haga una accion que no esperemos, retorne solo el state
      return state; //siempre se regresa el state
  }
}

export const ContadorRed = () => {
  //dispatch: para disparar actions de tipo "ActionType"
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);
  const {contador} = contadorState;
  return (
    <>
      <h2>Counter: {contador}</h2>
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
      <button className="btn btn-outline-primary" 
              onClick={()=>dispatch({type:'custom', payload: 100})}
              >
        Custom
      </button>
    </>
  )
}