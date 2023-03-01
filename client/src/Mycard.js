import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import Equipe from './img/Equipe.jpg'

const MyCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="550"
        image={Equipe}
        alt="Equipe Mary Jay"
      />
    </Card>
  );
};

export default MyCard;