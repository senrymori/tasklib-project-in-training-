import styled from "@emotion/native"
import React from "react"
import { Image, StatusBar, Text } from "react-native"
import { balls } from "./balls"

export const NavContainer: React.FC = styled.View`
    display: flex;
    flex: 1;
    background-color: #EEECFF;
    padding: 0 30px;
`
export const NavHeader: React.FC = styled.View`
    position: relative;
    justify-content: center;
    margin-top: 35px;
`

export const NavHeaderTitle: React.FC = styled.Text`
    color: white;
    text-align: center;
    font-size: 19px;
    font-weight: bold;
`
export const ContainerBtn: React.FC = styled.TouchableOpacity`
    position: absolute;
    letft: 0;
`
export const ArrowBtn: React.FC = () => {
    return <Image source={require('../../../assets/img/arrow.png')} />
}

export const BackBtn: React.FC = (props) => {
    console.log(props);
    
    return (
        <ContainerBtn>
            <ArrowBtn />            
        </ContainerBtn>        
    )
}
export const SearchSVG: React.FC = styled.View`
    position: absolute;
    top: 58%;
    left: 20px;
` 

export const SearchInput: React.FC = styled.TextInput`
    padding: 16px 0 12px 45px;
    background-color: #FFFFFF;
    color: #384F7D;
    font-weight: bold;
    border-radius: 8px;
    margin-top: 27px;
    font-size: 14px;
`

export const Label: React.FC = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #384f7d;
    text-transform: uppercase;
    margin: 30px 0;
`