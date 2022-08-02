import {
    FlatList,
    StyleSheet, Text, View,
} from 'react-native';
import Header from "./components/Header";
import {useState} from "react";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {

    const [listOfItems, setListOfItems] = useState([
        {text: 'Buy milk', key: '1',},
        {text: 'Buy Bread', key: '2',},
        {text: 'Drive car', key: '3',},
        {text: 'fly in sky', key: '4',},
    ])

    const handlerAddTask = (text) => {
        setListOfItems([{text, key: `${Math.random()}`}, ...listOfItems])
    }

    const deleteHandler = (itemKey) => {
        setListOfItems(listOfItems.filter( item => item.key !== itemKey))
    }

    return (
        <View>
            <Header/>
            <Form handlerAddTask={handlerAddTask}/>
            <View>
                <FlatList data={listOfItems} renderItem={({item}) => (
                    <ListItem el={item} deleteHandler={deleteHandler}/>
                )}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
