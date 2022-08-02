import {
    Button,
    StyleSheet, TextInput, View,
} from 'react-native';
import {useState} from "react";

export default function Form({handlerAddTask}) {


    const [value, setValue] = useState('')

    const onChange = (text) => {
        setValue(text)
    }

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='write task...'/>
            <Button color='green' title='Add task' style={styles.button} onPress={() => handlerAddTask(value)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 2,
        width: '60%',
        marginVertical: 30,
        marginHorizontal: 20,
        padding: 10,
        marginLeft: "20%",
    },
});
