import React from "react"
import { balls } from "../components/balls"
import { ArrowBtn, ContainerBtn, NavContainer, NavHeader, NavHeaderTitle } from "../components/ContainerNav"

export const SettingsScreen: React.FC = ({navigation}) => {
    return (
        <NavContainer>
            {balls.NavBall}
            <NavHeader>
                <NavHeaderTitle>Settings</NavHeaderTitle>
                <ContainerBtn onPress={() => navigation.goBack()}>
                    <ArrowBtn />
                </ContainerBtn>
            </NavHeader>
        </NavContainer>
    )
}