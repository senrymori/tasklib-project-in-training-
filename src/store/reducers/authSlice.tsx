import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';

interface AuthState {
  value: boolean,
  users: any
}

const initialState: AuthState = {
  value: false,
  users: []
}

const err = (msg: string) => {
  Alert.alert('Error!', msg, [ { text: "OK" }]);   
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSignIn: (state, action) => {
      let email: string = action.payload.email
      let password: string = action.payload.password
      if(email.trim().length > 0) {
        if(password.trim().length >= 4) {
          let isEmail = false
          let isPassword = false
          for(let user of state.users){            
            if(user.email == email) {
              isEmail =true
              if(user.password == password) {
                isPassword = true
                state.value = true;
              }
            }           
          }
          if(!isEmail) err('incorrect email'); else if (!isPassword) err('incorrect password')     
        } else err('password field at least 4 characters')                   
      } else err('email required field')
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
  }
})

export const { authSignIn, setUsers } = authSlice.actions

export default authSlice.reducer