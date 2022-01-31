import React from "react"
import styled, { css } from "@emotion/native"
import { Image } from "react-native"

const LargeBall: React.FC = styled.View`
    position: absolute;
    top: -20%;
    left: -20%;
`
const MediumBall: React.FC = styled.View`
    position: absolute;
    top: 13.79%;
    right: -9.07%;
`
const SmallBall: React.FC = styled.View`
    position: absolute;
    top: 43.62%;
    right: 23.03%;
`

const NavBall: React.FC = styled.View`
    position: absolute;
    top: -12%;
    left: -59%;
`

export const balls = {
    largeBall: <LargeBall><Image source={require('../../../assets/img/balls/LargeBall.png')}></Image></LargeBall>,
    MediumBall: <MediumBall><Image source={require('../../../assets/img/balls/MediumBall.png')}></Image></MediumBall>,
    SmallBall: <SmallBall><Image source={require('../../../assets/img/balls/SmallBall.png')}></Image></SmallBall>,
    NavBall: <NavBall><Image source={require('../../../assets/img/balls/NavBall.png')}></Image></NavBall>
}