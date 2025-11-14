import React from 'react'
import { useTheme } from './ThemeContext'
// MUI
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';

function Appbar() {
    const { state, dispatch } = useTheme()

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' })
    };

    return (
        <div className='box w-100 fixed-top ' style={{height:'65px'}}>

          
            <div className='d-flex align-items-center justify-content-between px-4 py-4'>
                <h6 className='m-0'>Ekaroolkar</h6>
                
                <p onClick={toggleTheme} className='m-0 p-0' style={{ cursor: 'pointer' }}>
                    {state.theme === 'light' ? <NightsStayIcon /> : <WbSunnyIcon sx={{ color: 'white' }} />}
                </p>
            </div>
        </div>
    )
}

export default Appbar