import React from 'react'
import ResumeBlock from './ResumeBlock';
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Resume() {

    return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
          {info.resume.map((doc, index) => (
            <Grid item xs={12} md={5} key={index}>              
              <ResumeBlock image={doc.image} link={doc.link} title={doc.title} />
            </Grid>
          ))}
        
    </Box>
  )
}
