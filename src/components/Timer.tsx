import { useRef, useState } from 'react'
import { useEffect } from 'react';

//Create types
type TimerArgs = {
  milisegundos: number,
  segundos?: number //optional
};

export const Timer = ({milisegundos}:TimerArgs) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>(); //useRef is to store information
  //console.log(milisegundos);
  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => {
      setSegundos( seg => seg + 1);
    },milisegundos)
  },[milisegundos])
  return (
    <>
      <h4>Timer: <small>{segundos}</small></h4>
    </>
  )
}
