import React, {useEffect, useState} from "react";
import './App.css';

import Axios from "axios";
import Cart from "./components/cards/cards";
import { TextField } from "@mui/material";
import { Container } from "@mui/system";



function CardTeste() {
const [values, setValues] = useState();
const [listCard, setListCard] = useState([]);
console.log(listCard);
const handleRegisterGame = () => {
  Axios.post("http://localhost:3001/register", {
    name: values.name,
    cost: values.cost,
    category: values.category,
  }).then(() => {
    Axios.post("http://localhost:3001/search", {
      name: values.name,
      cost: values.cost,
      category: values.category,
  }).then((response) => {
    setListCard([
      ...listCard,
      {
        id: response.data[0].id,
        name: values.name,
        cost: values.cost,
        category: values.category,
      },
    ]);
    });
  });
};

useEffect(() => {
  Axios.get("http://localhost:3001/getCards").then((response) => {
    setListCard(response.data);
  });
}, []);

const handleaddValues = (value) => {
  setValues((prevValues) => ({
    ...prevValues,
    [value.target.name]: value.target.value,
  }));
};


return(
    <Container>
<div className="register-container">
<h1 className="register-tittle">MaryJay</h1><br/>

<TextField id="outlined-basic" name="name" label="Nome do Jogo" variant="outlined" className="register-input" onChange={handleaddValues} />



<TextField id="outlined-basic" name="cost" label="Valor do Jogo" variant="outlined" className="register-input" onChange={handleaddValues} />

<TextField id="outlined-basic" name="category" label="Categoria do Jogo" variant="outlined" className="register-input" onChange={handleaddValues} />

<button onClick={handleRegisterGame} className="register-button">Cadastrar</button>
</div>


{listCard.map((val) => (
    <Cart 
      listCard={listCard} 
      setListCard={setListCard}
      key={val.id}
      id={val.id}
      name={val.name}
      cost={val.cost}
      category={val.category}
    />
  ))}
  </Container>
);
  
}
  
export default CardTeste;