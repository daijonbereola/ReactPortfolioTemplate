import React from 'react';
import IconLink from "../portfolio/IconLink";
import {Box} from "@mui/material";

function ResumeBlock(props) {
   const {title, link, image} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <h4 style={{paddingBottom: '1.5rem', fontSize: '2rem'}}>{title}</h4>
         <Box component={'img'} src={image} alt={'resume'}/>
         <Box className={'resume'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={link} title={'Doc Link'} icon={'fa fa-file-text'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default ResumeBlock;