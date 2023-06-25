import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import UIBlock from './UIBlock';

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                            <h2 style={{
                                fontSize: '3rem', 
                                textAlign: 'center',
                                margin: '60px 0 20px'
                            }}>Apps</h2>
                            <hr/>
                            {project.apps.map((type) => (
                                    <PortfolioBlock 
                                        image={type.image} 
                                        live={type.live} 
                                        source={type.source} 
                                        title={type.title} 
                                    />
                            ))}
                            <h2 style={{
                                fontSize: '3rem', 
                                textAlign: 'center',
                                margin: '60px 0 30px'
                            }}>UI</h2>
                            <hr/>
                            {project.ui.map((type) => (
                                    <UIBlock 
                                        image={type.image} 
                                        link={type.link} 
                                        title={type.title} 
                                    />
                            ))}
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};