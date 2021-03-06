import styled from "@emotion/native"
import React from "react"
import { Image } from "react-native"

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

export const CardBook: React.FC = styled.TouchableOpacity`
    flex-direction: row;
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 4px 12px 25px rgba(71, 55, 255, 0.08);
`

export const CardBookLogo: React.FC = styled.View`
    width: 70px;
    height: 110px;
    margin-right: 30px;
`
export const CardBookContainer: React.FC = styled.View`
    flex-direcrion: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 50%;
`

export const CardBookAuthor: React.FC = styled.Text`
    font-size: 14px;
    color: #384F7DCC;
    margin-top: 5px;  
` 

export const BookTitle: React.FC = styled.Text`
    font-size: 20px;
    color: #384F7D;
    font-weight: bold;
`
export const BookContainer: React.FC = styled.View`
    flex-direction: row;
    margin-top: 30px;
`
export const BookLogo: React.FC = styled.View`
    height: 200px;
    width: 130px;
    border-radius: 8px;
    margin-right: 20px;
`
export const BookTextContainer: React.FC = styled.View`
    width: 60%;
    flex-direction: column;
    justify-content: center;
`
export const BookAuthor: React.FC = styled.Text`
    font-size: 16px;
    color: #384F7DCC;
    margin-bottom: 20px;
`
export const BookDescription: React.FC = styled.Text`
    font-size: 14px;
    line-height: 22px;
    height: 80px;
    margin-top: 30px;
`
export const SettingsNav: React.FC = styled.TouchableOpacity`
    flex-direction: row;
    padding: 18px 30px;
    justify-content: space-between;
`

export const SettingsText: React.FC = styled.Text`
    font-size: 16px;
    color: #445984A6;
    margin-left: 16px;
`

export const SettingsTextContainer: React.FC = styled.View`
    flex-direction: row;
    align-items: center;
`