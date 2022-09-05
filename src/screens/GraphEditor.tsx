import React from 'react';
import {SafeAreaView, TextInput, View} from "react-native";
import Graph from '../components/Graph';

function GraphEditor() {
    return (
        <SafeAreaView style={{flex: 1, width: '100%', alignItems: 'center', marginTop: 20}}>
            <Graph/>
        </SafeAreaView>
    );
}

export default GraphEditor;
