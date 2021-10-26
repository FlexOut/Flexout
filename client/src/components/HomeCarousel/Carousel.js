import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import './Carousel.css'
import CardExample from './CardExample'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@material-ui/core/CardMedia';







export default function CarouselComponent (props) {    

return (
<>

<div className='carousel-general'>
<h1> Exercises by category </h1>
<Carousel className='carousel' show={2} slide={2} swiping={true}>


<Card  sx={{ 
                backgroundColor: '#FA560D',
                minWidth: 150,
                minHeight: 150,
                marginInline: 10,
                margin: 5, 
                borderRadius: '75px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                
            

                <CardContent className='CardText3' onClick={event =>  window.location.href='/armsexercises'}>
                <p> Arms Exercices </p>               

                </CardContent>

                
                
    </Card>

    <Card  sx={{ 
                backgroundColor: '#DE2D0B',
                minWidth: 150,
                minHeight: 150,
                marginInline: 10,
                margin: 5, 
                borderRadius: '75px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                
            
                <CardContent className='CardText3' onClick={event =>  window.location.href='/legsexercises'}>
                <p> Legs Exercices </p>               
                </CardContent>

                
                
    </Card>

    <Card  sx={{ 
                backgroundColor: '#F40600',
                minWidth: 150,
                minHeight: 150,
                marginInline: 10,
                margin: 5, 
                borderRadius: '75px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                
            
                <CardContent className='CardText3' onClick={event =>  window.location.href='/absexercises'}>
                <p> Abs Exercices </p>               
                </CardContent>

                
                
    </Card>

    <Card  sx={{ 
                backgroundColor: '#DE0B68',
                minWidth: 150,
                minHeight: 150,
                marginInline: 10,
                margin: 5, 
                borderRadius: '75px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                
            
                <CardContent className='CardText3' onClick={event =>  window.location.href='/chestexercises'}>
                <p> Chest Exercices </p>               
                </CardContent>

                
                
    </Card>

    <Card  sx={{ 
                backgroundColor: '#FA0DED',
                minWidth: 150,
                minHeight: 150,
                marginInline: 10,
                margin: 5, 
                borderRadius: '75px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                
            
                <CardContent className='CardText3' onClick={event =>  window.location.href='/backexercises'}>
                <p> Back Exercices </p>               
                </CardContent>

                
                
    </Card>

    <Card  sx={{ 
                backgroundColor: '#FA0DED',
                minWidth: 150,
                minHeight: 150,
                marginInline: 10,
                margin: 5, 
                borderRadius: '75px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                
            
                <CardContent className='CardText3' onClick={event =>  window.location.href='/shoulderexercises'}>
                <p> Shoulder Exercices </p>               
                </CardContent>

                
                
    </Card>

    <Card  sx={{ 
                backgroundColor: '#FA0DED',
                minWidth: 150,
                minHeight: 150,
                marginInline: 10,
                margin: 5, 
                borderRadius: '75px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                
            
                <CardContent className='CardText3' onClick={event =>  window.location.href='/calvesexercises'}>
                <p> Calves Exercices </p>               
                </CardContent>

               
    </Card>




</Carousel>

</div>

<div className='carousel-general'>
<h1> Your workouts </h1>
<Carousel className='carousel' show={2} slide={2} swiping={true}>

                <Card sx={{ 
                                backgroundColor: '#C72504',
                                minWidth: 150,
                                minHeight: 100,
                                marginInline: 10,
                                margin: 5, 
                                borderRadius: '5px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                        <CardContent className='CardText2' onClick={event =>  window.location.href='/workouts/615f28ae821cf325e3d9ed30'}>
                        <p> Pull Day </p>               
                        </CardContent>


                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ Maxwidth: '100', MaxHeight: '120', }}
                        image="https://images.unsplash.com/photo-1598268030450-7a476f602bf6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1115&q=80"
                    />
                    </Card>

                    <Card sx={{ 
                                backgroundColor: '#770BD4',
                                minWidth: 150,
                                minHeight: 100,
                                marginInline: 10,
                                margin: 5, 
                                borderRadius: '5px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent className='CardText2' onClick={event =>  window.location.href='/workouts/615f295e821cf325e3d9ed32'}>
                        <p> Push Day  </p>               
                        </CardContent>


                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ Maxwidth: '100', MaxHeight: '150'  }}
                        image="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt="Live from space album cover"
                    />
                    </Card>

                    <Card sx={{ 
                                backgroundColor: '#00B0EB',
                                minWidth: 150,
                                minHeight: 100,
                                marginInline: 10,
                                margin: 5, 
                                borderRadius: '5px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent className='CardText2' onClick={event =>  window.location.href='/workouts/615f29f1821cf325e3d9ed34'}>
                        <p> Leg Day </p>               
                        </CardContent>



                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ Maxwidth: '100', MaxHeight: '150'  }}
                        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt="Live from space album cover"
                    />
                    </Card>

                    <Card sx={{ 
                                backgroundColor: '#23D40B',
                                minWidth: 150,
                                minHeight: 100,
                                marginInline: 10,
                                margin: 5, 
                                borderRadius: '5px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent className='CardText2' onClick={event =>  window.location.href='/workouts/615f2a5b821cf325e3d9ed36'}>
                        <p> Abs Shredder  </p>               
                        </CardContent>


                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ Maxwidth: '100', MaxHeight: '150'  }}
                        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt="Live from space album cover"
                    />
                    </Card>

                    <Card sx={{ 
                                backgroundColor: '#FAC000',
                                minWidth: 150,
                                minHeight: 100,
                                marginInline: 10,
                                margin: 5, 
                                borderRadius: '5px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent className='CardText2' onClick={event =>  window.location.href='/workouts/615f2aef821cf325e3d9ed38'}>
                        <p> I don't have time this week - I need to kill it  </p>               
                        </CardContent>



                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ Maxwidth: '100', MaxHeight: '130'  }}
                        image="https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80"
                        alt="Live from space album cover"
                    />
                    </Card>

</Carousel>

</div>

<div className='carousel-general'>
<h1> This week's teampicks </h1>
<Carousel className='carousel' show={2} slide={2} swiping={true}>


<Card  sx={{ 
                backgroundColor: '#0E04C7',
                minWidth: 150,
                minHeight: 150,
                marginInline: 10,
                margin: 5, 
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                
            
                <CardContent className='CardText1' onClick={event =>  window.location.href='/exercises/227'}>
                <p> Arnold Shoulder Press  </p>               
                </CardContent>
    </Card>



<Card  sx={{ 
                backgroundColor: '#0B51D4',
                minWidth: 150,
                minHeight: 150,
                marginInline: 10,
                margin: 5, 
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                
            
                <CardContent className='CardText1' onClick={event =>  window.location.href='/exercises/289'}>
                <p> Axe hold </p>               
                </CardContent>
    </Card>



    <Card  sx={{ 
                backgroundColor: '#00B0EB',
                minWidth: 150,
                minHeight: 150,
                marginInline: 10,
                margin: 5, 
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                
            
                <CardContent className='CardText1' onClick={event =>  window.location.href='/exercises/637'}>
                <p> Back Squat  </p>               
                </CardContent>
    </Card>



    <Card  sx={{ 
                backgroundColor: '#0BD4B3',
                minWidth: 150,
                minHeight: 150,
                marginInline: 10,
                margin: 5, 
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                
            
                <CardContent className='CardText1' onClick={event =>  window.location.href='/exercises/343'}>
                <p> Barbel Ab RollOut  </p>               
                </CardContent>
    </Card>



    <Card  sx={{ 
                backgroundColor: '#11FA71',
                minWidth: 150,
                minHeight: 150,
                marginInline: 10,
                margin: 5, 
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                
            
                <CardContent className='CardText1' onClick={event =>  window.location.href='/exercises/307'}>
                <p> Bear Walk  </p>               
                </CardContent>
    </Card>



</Carousel>

</div>



<div className='empty'>
    <h1> Hey bro</h1>
</div>

</>

)

}

