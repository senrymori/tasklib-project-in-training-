import { css } from "@emotion/native"
import React from "react"
import { View } from "react-native"
import { balls } from "../components/balls"
import { ArrowBtn, ContainerBtn, NavContainer, NavHeader, NavHeaderTitle, SettingsNav, SettingsText, SettingsTextContainer } from "../components/ContainerNav"
import IconMC from "react-native-vector-icons/MaterialCommunityIcons"
import IconMI from "react-native-vector-icons/MaterialIcons"
import IconFT from "react-native-vector-icons/Feather"
import IconSL from "react-native-vector-icons/SimpleLineIcons"
import IconIS from "react-native-vector-icons/Ionicons"

export const SettingsScreen: React.FC = ({navigation}) => {
    return (
        <NavContainer style={css`padding: 0;`}>
            {balls.NavBall}
            <NavHeader>
                <NavHeaderTitle>Settings</NavHeaderTitle>
                <ContainerBtn style={css`left: 30px;`} onPress={() => navigation.goBack()}>
                    <ArrowBtn />
                </ContainerBtn>                
            </NavHeader>
            <SettingsNav style={{ marginTop: 75, borderTopColor: '#E4E2F5', borderTopWidth: 1 }}>
                <SettingsTextContainer>
                    <IconMC 
                        name="account-circle-outline"
                        size={15}
                        color="#445984A6"
                    />
                    <SettingsText>Account</SettingsText>                    
                </SettingsTextContainer>
                <IconMI 
                    name="arrow-forward-ios"
                    size={15}
                    color="#445984A6"
                />                 
            </SettingsNav>
            <SettingsNav style={{ borderTopColor: '#E4E2F5', borderTopWidth: 1 }}>
                <SettingsTextContainer>
                    <IconFT 
                        name="bell"
                        size={15}
                        color="#445984A6"
                    />
                    <SettingsText>Notification</SettingsText>                    
                </SettingsTextContainer>
                <IconMI 
                    name="arrow-forward-ios"
                    size={15}
                    color="#445984A6"
                />                 
            </SettingsNav>
            <SettingsNav style={{ borderTopColor: '#E4E2F5', borderTopWidth: 1 }}>
                <SettingsTextContainer>
                    <IconSL 
                        name="lock"
                        size={15}
                        color="#445984A6"
                    />
                    <SettingsText>Privacy</SettingsText>                    
                </SettingsTextContainer>
                <IconMI 
                    name="arrow-forward-ios"
                    size={15}
                    color="#445984A6"
                />                 
            </SettingsNav>
            <SettingsNav style={{ borderTopColor: '#E4E2F5', borderTopWidth: 1 }}>
                <SettingsTextContainer>
                    <IconIS 
                        name="help-buoy-outline"
                        size={15}
                        color="#445984A6"
                    />
                    <SettingsText>Help Center</SettingsText>                    
                </SettingsTextContainer>
                <IconMI 
                    name="arrow-forward-ios"
                    size={15}
                    color="#445984A6"
                />                 
            </SettingsNav>
            <SettingsNav style={{ borderTopColor: '#E4E2F5', borderTopWidth: 1 }}>
                <SettingsTextContainer>
                    <IconFT 
                        name="info"
                        size={15}
                        color="#445984A6"
                    />
                    <SettingsText>General</SettingsText>                    
                </SettingsTextContainer>
                <IconMI 
                    name="arrow-forward-ios"
                    size={15}
                    color="#445984A6"
                />                 
            </SettingsNav>
            <SettingsNav style={{ 
                    borderTopColor: '#E4E2F5', 
                    borderTopWidth: 1,
                    borderBottomColor: '#E4E2F5', 
                    borderBottomWidth: 1 
                }}>
                <SettingsTextContainer>
                    <SettingsText style={{ color: '#D45E5E' }}>Logout</SettingsText>                    
                </SettingsTextContainer>             
            </SettingsNav>
        </NavContainer>
    )
}