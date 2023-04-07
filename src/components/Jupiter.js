import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';

import Jup from "../assets/Images/Jupiter.png"
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`
const rotate = keyframes`
from{
    transform: rotate(0);
    opacity:0;
}
to{
    transform: rotate(360deg);
    opacity:1;
}`

const Img = styled.div`
padding: 2rem;
width: 45vw;
height: 50vh;
cursor: pointer;
animation: ${rotate} infinite 30s alternate;
img{
    width: 100%;
    height: auto;
    filter:saturate(70%)
    drop-shadow(10px 6px 20px #666666)
  }
  .Jup{ 
  bottom: 8%;
  left: 0%;
  width: 70%;
  height: auto;
}
`
const Main = styled.div`
color: ${props => props.theme.text};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

`
// &:hover{
//     color: ${props => props.theme.body};
//     background-color: ${props => props.theme.text};
// }

const Title = styled.h1`
color:#0099CC;
font-size: 2rem;
`
// ${Main}:hover &{
   
//         color:${props => props.theme.body};
    
// }
const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
strong{
    color:#0099CC;
}
`

const Jupiter = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton/>
<ParticleComponent theme='light' />
            <Main>
<Title>
        <h1>Welcome to Jupiter</h1>
</Title>
<Description>
Uranus is the seventh planet in the Solar System, larger than Earth but smaller than gas giants like Jupiter and Saturn. It was discovered in 1781 by the British astronomer William Herschel.
</Description>
<Description>
<strong>Discovery date</strong>
<ul>
    <li>
        13 March 1781
    </li>
</ul>
</Description>
<Description>
<strong>Named after</strong>
<ul>
    <li>
    The Latin form Ūranus of the Greek god Οὐρανός Ouranos
    </li>
    
</ul>
</Description>

            </Main>
            
            <Img>
                <img src={Jup} alt='Jupiter/img' className='Jup'/>
            </Img>

            <BigTitle text="Uranus" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default Jupiter