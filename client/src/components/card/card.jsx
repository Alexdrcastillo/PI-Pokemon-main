import styles from "./card.module.css"


function Card({pokemon, id, onClick}) {



  const { name, types, image } = pokemon


  return (
    <div className={styles.card} onClick={onClick}> 
      <h2>{name}</h2>
      <img style={{height: "100px", width: "200px"}} src={image}/>
      <p>{types}</p>
    </div>
  );
}

export default Card;