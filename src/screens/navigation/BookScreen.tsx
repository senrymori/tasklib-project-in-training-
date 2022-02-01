import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { balls } from "../components/balls"
import { ArrowBtn, BookAuthor, BookContainer, BookDescription, BookLogo, BookTextContainer, BookTitle, ContainerBtn, NavContainer, NavHeader, NavHeaderTitle } from "../components/ContainerNav"
import { AirbnbRating } from 'react-native-ratings';
import { Text, View } from "react-native"


export const BookScreen: React.FC = ({navigation}) => {
    const dispatch = useDispatch()
    const book = useSelector((state: RootState) => state.books.book)

    return (
        <NavContainer>
            {balls.NavBall}
            <NavHeader>
                <NavHeaderTitle>Book</NavHeaderTitle>
                <ContainerBtn onPress={() => navigation.goBack()}>
                    <ArrowBtn />            
                </ContainerBtn> 
            </NavHeader>
            <BookContainer>
                <BookLogo style={{backgroundColor: book.logoBook}}/>
                <BookTextContainer>
                    <BookTitle>{book.titleBook}</BookTitle>
                    <BookAuthor>{book.firstNameAuthor} {book.lastNameAuthor}</BookAuthor>
                    <View style={{flexDirection: "row", alignItems: "center", marginBottom: 30}}>
                        <AirbnbRating reviewSize={0} selectedColor="#445984" count={1} size={10} showRating={false}/>
                        <Text style={{marginLeft: 3, fontSize: 12, fontWeight: 'bold'}}>{book.ratingBook}</Text>
                    </View>                    
                </BookTextContainer>                
            </BookContainer>
            <BookDescription numberOfLines={3} ellipsizeMode='tail'>
                    {book.descriptionBook}
            </BookDescription>
        </NavContainer>
    )
}