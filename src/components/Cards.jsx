
import React, {useEffect}from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import style from './Cards.module.css';

export default function Cards( {characters} ) {
  const favorites = useSelector((state) => state.favorites)
  function changeColor(props){
    
    const find = favorites?.filter((el) => el.id === props.id);
    console.log(find)
    if(find.includes(props)){
      console.log(props)
      return 'yellow.500'
    } 
 }
  return (
    <>
      <div className={style.card}>
        {characters?.map((el) => (
          <div key={el.id}>
            <Card
              id = {el.id}
              name={el.name}
              image={el.image}
              status={el.status}
              species={el.species}
              gender={el.gender}
              origin={el.origin.name}
              location={el.location.name}
              episodes={el.episode?.length}
              color={() => changeColor(el)}
            />
          </div>
        ))}
      </div>
    </>
  );
}