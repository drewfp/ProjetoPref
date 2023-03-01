import React, { useEffect, useState } from "react";
import './App.css';
import { useRef } from "react";
import { Container } from "@mui/system";
import { CssBaseline, Typography, Grid, Button, CardMedia, CardContent, Card } from "@mui/material"
//Imagens para os cards
import Espuma from './img/Espuma.jpeg';
import Mascara from './img/mascarafacial.jpeg';
import Protetor from './img/protetorsolar.jpeg';
import Aguatermal from './img/aguatermal.jpeg';
import Cremefacial from './img/cremefacial.jpeg';
import Serum from './img/serumfacial.jpeg';
import Cremedecabelo from './img/Cremedecabelo.jpeg';
import Desodorante from './img/Desodorante.jpeg';
import Hidratante from './img/Hidratante.jpeg';
import Tonico from './img/Tonicocapilar.jpeg';
import Oleocorporal from './img/Oleocorporal.jpeg';
import Protetortermico from './img/Protetortermico.jpeg';
import Mascaramassagem from './img/Mascaramassagem.jpeg';
import Saboneteargila from './img/Saboneteargila.jpeg';
import Sabonete from './img/Sabonete.jpeg'

//Imagens para o carousel

import { motion } from 'framer-motion';
import image1 from './img/1.jpeg';
import image2 from './img/2.jpeg';
import image3 from './img/3.jpeg';
import image4 from './img/4.jpeg';
import image5 from './img/5.jpeg';
import image6 from './img/6.jpeg';

import FooterMary from './components/footer/Footer';
import './App.css';
import Axios from "axios";
import { TextField } from "@mui/material";
import MyCard from "./Mycard";
import Header from './navbar'



const images = [image1, image2, image3, image4, image5, image6]

function App() {
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
  const [width, setWidth] = useState(0)

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




  return (
        
        <div>
        
        <Header />

        <CssBaseline />    


        <main>
        
          <div>
          
            <Container maxWidth="sm" sx={{
              marginBottom: '5%'
            }}>


              
              <div className="App" >
                
                <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                  <motion.div className="inner" drag="x" dragConstraints={{ right: 0, left: -width }}
                    inital={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}       >

                    {images.map(image => (
                      <motion.div className="item" key={image} >
                        <img src={image} alt="textalt" />
                      </motion.div>
                    ))}
                
                  </motion.div>
                </motion.div>

              </div>
              <Typography id="sobre" variant="h2" align="center" color="textSecondary" paragraph>
                Quem Somos
              </Typography>

              <Typography  variant="h5" align="center" color="textSecondary" paragraph>
                Viemos para revolucionar a indústria de produtos veganos. Temos o principal objetivo ajudar as pessoas a encontrar boas razões para trocar os cosméticos tradicionais por cosméticos veganos e naturais, faz parte do processo de transição para o estilo de vida vegano. Num determinado momento, a mente sai em busca de boas razões para escolher novos produtos e questionar a composição de tudo aquilo que é colocado em contato com o corpo. Além da excelente qualidade os produtos veganos oferecem um risco menor de reações alérgicas, pois os ingredientes são mais naturais e as chances de causar danos e reações alérgicas são menores. Então, eles são uma excelente opção para quem possui alguma sensibilidade alérgica.
              </Typography>
              <MyCard />

              <Typography  variant="h2" align="center" color="textSecondary" paragraph>
               Nossos Produtos
              </Typography>        

              <Typography  variant="h5" align="center" color="textSecondary" paragraph>
              O produtos Mary Jay não utilizam nenhum ingrediente de origem animal em sua composição, como mel, cera de abelha, colágeno e outras proteínas. Outro conceito é o produto cruelty-free, ou seja, livre de crueldade, o que significa que nada passa por processos de testagem ou produção que envolva crueldade animal.

Nossas embalagens são totalmente sustentáveis e têm pelo menos 95% da fórmula composta por ingredientes naturais, ou seja, aqueles provenientes de seres encontrados na natureza, e também 5% de ingredientes orgânicos. Além disso, estes produtos precisam ser livres de componentes que apresentam perigo para a saúde e para o meio-ambiente. Uma das principais características dos produtos naturais é a inexistência de componentes artificiais.
              </Typography>     

              <div>
              <Typography id="produtos" variant="h2" align="center" color="textSecondary" paragraph>
               Conheça a linha
              </Typography>
                <Grid container spacing={4} justifyContent="center" >
                
                </Grid>
              </div>
            </Container>
          </div>
          <Container maxWidth="md" sx={{
            margin: '5%,5%,5%,5%'

          }} >
            <Grid container spacing={6} alignItems="center" >


              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Espuma}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Espuma
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Espuma 100% vegana
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Sabonete}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Sabonete liquido
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     Sabonete liquido 100% veganos
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>


              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Saboneteargila}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Sabonete de argila
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Sabonete feito de argila Verde
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Mascaramassagem}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Mascara
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Mascara 100% vegana
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Protetortermico}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Protetor Termico
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Protetor Termico 100% vegano
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Oleocorporal}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Oléo Corporal
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Óleo Corporal 100% vegano
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Tonico}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Tonico
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Tonico 100% vegano
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>


              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Hidratante}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Hidratante
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Hidratante 100% Vegano.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Aguatermal}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Água Termal
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      O Melhor Da Mary Jay
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Cremefacial}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Creme Facial
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Creme Facil 100% Vegan
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Serum}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Serum
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Serum 100% vegana
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Cremedecabelo}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Creme de cabelo
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Espuma 100% vegana
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Desodorante}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Desodorante
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Espuma 100% vegana
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4} >
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Mascara}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      MASCARA
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      mascara 100% vegana
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    component="img"
                    height="240"
                    image={Protetor}
                    alt="Nossa Equipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" align="center" >
                      Protetor Solar
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Protetor solar 100% vegano
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              

              <Container align="center" >
                <div className="register-container" id="cadastro">
                  <h1 className="register-tittle" >CADASTRO PARA EVENTO</h1><br />

                  <TextField id="outlined-basic" name="name" label="Nome" variant="outlined" className="register-input" onChange={handleaddValues} /><br />



                  <TextField id="outlined-basic" name="cost" label="Email" variant="outlined" className="register-input" onChange={handleaddValues} /><br />

                  <TextField id="outlined-basic" name="category" label="Gênero" variant="outlined" className="register-input" onChange={handleaddValues} /><br />

                  <Button onClick={handleRegisterGame} className="register-button">Cadastrar</Button>
                </div>



              </Container>

            </Grid>
          </Container>
        </main>

        <FooterMary />


        
      </div>
      
  );
}

export default App;
