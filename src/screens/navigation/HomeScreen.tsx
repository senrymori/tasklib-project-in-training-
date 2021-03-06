import React, { useEffect, useState } from "react"
import { View, StatusBar, SafeAreaView, FlatList, RefreshControl } from "react-native"
import { 
  SearchInput, 
  SearchSVG, 
  NavContainer, 
  NavHeader, 
  NavHeaderTitle, 
  Label, 
  CardBook,
  CardBookLogo,
  BookTitle,
  CardBookContainer,
  CardBookAuthor,
} from "../components/ContainerNav"
import { balls } from "../components/balls"
import IconAnt from "react-native-vector-icons/AntDesign"
import { useDispatch, useSelector } from "react-redux"
import { refreshBooks, setBooks, setOpenBook } from "../../store/reducers/booksSlice"
import { RootState } from "../../store/store"
import { AirbnbRating } from 'react-native-ratings';

export const HomeScreen: React.FC = ({ navigation }) => {
    
    let [refreshing, setRefreshing] = useState(false)
    let allBooks = useSelector((state: RootState) => state.books.allBooks)
    const dispatch = useDispatch()
    const getBooksFromApiAsync = async () => {
      if(allBooks.length == 0) {
        try {
          const response = await fetch(
            'https://run.mocky.io/v3/9a805462-0ba3-43c6-95bb-3aec0aadc7cd'
          );
          const json = await response.json();
          dispatch(setBooks(json.books)) 
        } catch (error) {
          console.error(error)
        }
      }               
    };
    
    useEffect(()=>{
      getBooksFromApiAsync() 
    },[])

    const openBook = (book: []) => {
      dispatch(setOpenBook(book))        
      navigation.navigate('Book')      
    }
    const onRefresh = () => {
      dispatch(refreshBooks({}))
      setRefreshing(false);
    } 

    return (
        <NavContainer>
            {balls.NavBall}
            <StatusBar barStyle="light-content" backgroundColor="#D45E5E"></StatusBar>
            <NavHeader>
                <NavHeaderTitle>Books</NavHeaderTitle>
            </NavHeader>
            <View style={{position: 'relative'}}>
                <SearchInput placeholder="Search"></SearchInput> 
                <SearchSVG><IconAnt name="search1" size={16} color="#cecece"/></SearchSVG>
            </View>
            <Label>Results</Label>
            <SafeAreaView>
                <FlatList
                    style={{marginBottom: 220}}
                    data={allBooks}
                    refreshing={refreshing}
                    onRefresh={onRefresh}  
                    renderItem={({ item, index, separators }) => (
                      <CardBook
                        key={item.id}
                        onPress={() => openBook(item)}                     
                                      
                      >                        
                        <CardBookLogo style={{backgroundColor: item.logoBook}}></CardBookLogo>
                        <CardBookContainer>                          
                          <BookTitle>{item.titleBook}</BookTitle>
                          <CardBookAuthor>{item.firstNameAuthor} {item.lastNameAuthor}</CardBookAuthor>
                          <AirbnbRating
                            reviewSize={0}                          
                            count={5}
                            defaultRating={item.ratingBook}
                            size={16}
                          />                  
                        </CardBookContainer>                                           
                      </CardBook>  
                    )}
                />                               
            </SafeAreaView>            
        </NavContainer>
    )
}