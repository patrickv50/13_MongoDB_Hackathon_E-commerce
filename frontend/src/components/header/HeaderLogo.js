import { Box, Typography } from '@mui/material'
import React from 'react'
import Link from '../Link'

const HeaderLogo = () => {
    return (
        <Box sx={{ position: 'absolute', left: '50%', width: '250px', marginLeft: '-125px', textAlign: 'center' }}>
            <Link to="/" aria-label="Home">
                <svg style={{ width: '20px' }} viewBox="1 0 11.5 11.5" version="1.1" baseProfile="tiny" id="Layer_1" x="10px" y="10px"  >
                    <g>
                        <path fill="#272524" d="M7.9,11.2L7.9,11.2c0,0,0-0.1,0-0.1c0,0.1-1.1-2.7-1.5-3.1C5.5,7.1,4.5,7.2,3.8,7.2H0.4
C0.2,7.2,0,7.3,0,7.5v0c0,0,0,0.1,0,0.1c0,0,1.1,2.8,1.5,3.1c0.8,0.8,1.5,0.8,2.6,0.8h3.5C7.8,11.5,7.9,11.4,7.9,11.2z"></path>
                        <path fill="#272524" d="M13.7,7.7c0-2.1-2.2-6.7-2.5-7.5C11.2,0.1,11.1,0,10.9,0c-0.1,0-0.3,0.1-0.3,0.2C9.1,3.7,8,6.3,8,6.3
C7.9,6.6,7.8,6.9,7.9,7.2C8,7.5,8.6,8.7,9,9.7c0.6,1.4,0.7,1.8,2,1.8C12.6,11.5,13.7,10.1,13.7,7.7z"></path>
                    </g>
                </svg>
                <Typography fontFamily='Nunito' sx={{ display: 'inline', ml: 1, fontSize: { xs: '.9rem', sm: '1.2rem', md: '1.7rem' } }}>
                    GROOVEMADE
                </Typography>
            </Link>
        </Box>
    )
}

export default HeaderLogo