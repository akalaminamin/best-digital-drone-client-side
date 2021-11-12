import React from 'react'
import {Grid, Typography} from '@mui/material'

const Footer = () => {
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} md={3}>
                    <Typography variant="h4" color="initial">
                        INFO
                    </Typography>
                    
                </Grid>              
                <Grid item xs={12} md={3}>
                <h2>Colume Two</h2>

                </Grid>              
                <Grid item xs={12} md={3}>
                <h2>Colume Three</h2>
                </Grid>  

                <Grid item xs={12} md={3}>
                <h2>Colume Four</h2>

                </Grid>              
            </Grid>
        </>
    )
}

export default Footer
