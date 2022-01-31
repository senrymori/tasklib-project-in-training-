import styled from "@emotion/native"

export const Container: React.FC = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    background-color: #fffff;
    padding: 0 30px;
`

export const AuthTitle: React.FC = styled.Text`
font-size: 32px;
font-weight: bold;
color: #384F7D;
margin-bottom: 80px;
`
export const InputTitle: React.FC = styled.Text`
font-weight: bold;  
text-transform: uppercase;
color: #445984;
opacity: 0.3;
font-size: 12px;
`
export const TextBtn: React.FC = styled.Text`
text-align: center;
color: white;
font-weight: bold;
font-size: 14px;
text-transform: uppercase;
`