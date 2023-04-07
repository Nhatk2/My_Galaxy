import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import neptune from '../assets/Images/Neptune.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 15%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
    filter:saturate(70%)
    drop-shadow(0px 7px 25px #8DEEEE)
}
.Nep{
    width:40rem;
    height:40rem
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const Neptune = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='white'/>
<SocialIcons theme='white'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={neptune} alt="Naptune" className='Nep'/>
        </Spaceman>    
        <Main>
        Neptune is the eighth and farthest planet from the sun in our solar system.<br />
        It is composed primarily of hydrogen, helium, and methane. Neptune has a faint and featureless atmosphere, with the exception of the Great Dark Spot, a storm system similar to Jupiter's Great Red Spot.
<br/> 
        It has 14 known moons and a faint and incomplete ring system. Neptune was discovered by Johann Galle and Urbain Le Verrier in 1846, based on mathematical predictions made by Galileo Galilei and Sir Isaac Newton.
        </Main>

        <BigTitle text="Neptune" top="10%" left="5%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default Neptune
