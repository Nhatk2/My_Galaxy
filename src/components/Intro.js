import React from 'react'
import styled, { keyframes } from 'styled-components'
import {motion} from 'framer-motion'
import Sun from "../assets/Images/Sun.png"

const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;

`
const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 8%;
    left: 0%;
    width: 100%;
    height: auto;
    animation: ${rotate} infinite 30s linear;
}
img{
    padding: 0px !important;
    border: none;
    filter:saturate(300%)
    drop-shadow(14px 11px 17px red)
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}



`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>My name Sun</h3>
                    <h6>The Sun is the center star of the Solar System, which emits light and generates energy through the process of nuclear fusion. It has a diameter of about 1.4 million km and a mass 333,000 times that of the Earth.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Sun} alt="The Sun"/>
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
