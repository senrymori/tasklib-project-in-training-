import React, { useEffect, useState } from "react"
import { StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { StatusBar } from "react-native"
import { useDispatch } from "react-redux"
import { authSignIn, setUsers } from "../store/reducers/authSlice"
import { balls } from "./components/balls"
import { Container, AuthTitle, InputTitle, TextBtn } from "./components/ContainerAuth"

export const AuthScreen: React.FC = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')     
    
    const dispatch = useDispatch()
    const signIn = () => {
        dispatch(authSignIn({email, password}))
    }

    const getUsersFromApiAsync = async () => {
        try {
          const response = await fetch(
            'https://run.mocky.io/v3/491f9dc7-703a-4c92-bf39-0ea512ae78ca'
          );
          const json = await response.json();
          dispatch(setUsers(json.users))
        } catch (error) {
          console.error(error)
        }
    };

    useEffect(()=>{
        getUsersFromApiAsync()
    },[])

    return (
        <Container>
            <StatusBar hidden></StatusBar>
            {balls.largeBall}
            {balls.MediumBall}
            {balls.SmallBall}
            <AuthTitle>Sign In</AuthTitle>
            <InputTitle>Email</InputTitle>
            <TextInput 
                style={[styles.input, {marginBottom: 20}]} 
                placeholder="Enter email" 
                onChangeText={setEmail}>
            </TextInput>
            <InputTitle>Password</InputTitle>
            <TextInput
                secureTextEntry={true}
                style={[styles.input, {marginBottom: 148}]} 
                placeholder="Enter password" 
                onChangeText={setPassword}>
            </TextInput>            
            <TouchableOpacity 
                style={styles.button}
                onPress={signIn}
            ><TextBtn>Sign In</TextBtn></TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomWidth: 3,
        borderColor: '#00D23A',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 15,
        shadowColor: '#DDEBDC',
        shadowOpacity: 1,
        paddingTop: 18,
        paddingRight: 23,
        paddingBottom: 18,
        paddingLeft: 23 
    },
    button: {
        backgroundColor: '#6790FB',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 8
    }
})