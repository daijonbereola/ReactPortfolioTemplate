import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function UIBlock(props) {
   const {image, link, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box style={{margin: '40px 0 20px'}} component={'img'} maxWidth={500} src={image} alt={'mockup'}/>
         <h3 style={{fontSize: '2rem'}}>{title}</h3>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={link} title={'Link'} icon={'fa fa-safari'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default UIBlock;