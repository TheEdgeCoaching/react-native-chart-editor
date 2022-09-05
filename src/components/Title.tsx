import React from 'react';
import {TextInput} from "react-native";

function Title() {
    return (
        <TextInput style={{
            fontSize: 20,
            marginBottom: 5
        }} placeholder={'Edit Title'}></TextInput>
    );
}

export default Title;
