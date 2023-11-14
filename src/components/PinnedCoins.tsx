import { useSelector } from 'react-redux'
import { RootState } from '../store'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export default function PinnedCoins() {
    const pinnedCoins = useSelector((state: RootState) => state.crypto.pinnedCoins);
    return (
        <>
            {
                pinnedCoins.map((c) => {
                    return (
                        <div className='pinned-coin-div'>
                            <div className='pinned-coin-div-image'>{c[2]}</div>
                            <div className='pinned-coin-div-name'>{c[0]}</div>
                            <div className='pinned-coin-div-change'>{c[1]}</div>
                        </div>
                    )
                })
            }
        </>
        // return (
        //     <Card sx={{ minWidth: 275 }}>
        //       <CardContent>
        //         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        //           Word of the Day
        //         </Typography>
        //         <Typography variant="h5" component="div">
        //           be{bull}nev{bull}o{bull}lent
        //         </Typography>
        //         <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //           adjective
        //         </Typography>
        //         <Typography variant="body2">
        //           well meaning and kindly.
        //           <br />
        //           {'"a benevolent smile"'}
        //         </Typography>
        //       </CardContent>
        //       <CardActions>
        //         <Button size="small">Learn More</Button>
        //       </CardActions>
        //     </Card>
          );
        // <makeCoins />
}
