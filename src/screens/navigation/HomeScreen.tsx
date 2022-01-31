import React, { useEffect } from "react"
import { View, StatusBar, SafeAreaView, FlatList, Text, TouchableOpacity } from "react-native"
import { SearchInput, SearchSVG, NavContainer, NavHeader, NavHeaderTitle, Label } from "../components/ContainerNav"
import { balls } from "../components/balls"
import IconAnt from "react-native-vector-icons/AntDesign"
import { useDispatch, useSelector } from "react-redux"
import { setBooks } from "../../store/reducers/booksSlice"
import { RootState } from "../../store/store"

export const HomeScreen: React.FC = () => {
    let allBooks = useSelector((state: RootState) => state.books.allBooks)
    const dispatch = useDispatch()
    const getBooksFromApiAsync = async () => {        
        try {
          const response = await fetch(
            'https://run.mocky.io/v3/9a805462-0ba3-43c6-95bb-3aec0aadc7cd'
          );
          const json = await response.json();
          dispatch(setBooks(json.books)) 
        } catch (error) {
          console.error(error)
        }
    };
    
    useEffect(()=>{
        getBooksFromApiAsync()          
    },[])

    const checkTitle = (id: any) => {
        console.log(id)
    }

    return (
        <NavContainer>
            {balls.NavBall}
            <StatusBar barStyle="light-content" backgroundColor="#D45E5E"></StatusBar>
            <NavHeader>
                <NavHeaderTitle>Home</NavHeaderTitle>
            </NavHeader>
            <View style={{position: 'relative'}}>
                <SearchInput placeholder="Search"></SearchInput> 
                <SearchSVG><IconAnt name="search1" size={16} color="#cecece"/></SearchSVG>
            </View>
            <Label>Results</Label>
            <SafeAreaView>
                <FlatList
                    data={allBooks}
                    renderItem={({ item, index, separators }) => (
                      <TouchableOpacity
                        key={item.id}
                        onPress={() => checkTitle(item.id)}
                      ><Text>{item.titleBook}</Text>
                      </TouchableOpacity>  
                    )}
                />                               
            </SafeAreaView>            
        </NavContainer>
    )
}