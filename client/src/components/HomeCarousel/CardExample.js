import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import './Carousel.css'

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <>
    <Card sx={{ 
                backgroundColor: '#0BD4B3',
                minWidth: 150,
                minHeight: 100,
                marginInline: 10,
                margin: 5, 
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', fontsize: '30' }}>
          <Typography component="div" variant="h7">
            Live From Space
          </Typography>
        </CardContent>


      </Box>
      <CardMedia
        component="img"
        sx={{ Maxwidth: '100', MaxHeight: '150'  }}
        image="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Live from space album cover"
      />
    </Card>

    <div className='empty'>
    </div>

</>
  );
}
