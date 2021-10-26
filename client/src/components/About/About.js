import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

export default function MultiActionAreaCard() {
    
  return (

    <>
    <div className='aboutPage'>
    <Card sx={{ 
      maxWidth: 345, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1543761049-4a134358c6b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Miguel Acosta 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          “When to use iterative development? You should use iterative development only on projects that you want to succeed.”           </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"> Send me an Email 
        </Button>
        <EmailRoundedIcon />
      </CardActions>
    </Card>
    </div>



    <div className='aboutPage'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1591102600199-5e3ae6c50df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Caner Unus
          </Typography>
          <Typography variant="body2" color="text.secondary">
          “Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.”
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary"> Send me an Email 
        </Button>
        <EmailRoundedIcon />
      </CardActions>
    </Card>
    </div>

</>

  );
}