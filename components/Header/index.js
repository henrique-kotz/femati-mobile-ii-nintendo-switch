import React from 'react';
import { Text, View, Image } from 'react-native';

import Switch from '../../assets/images/switch.png';
import style from './style.js';

export default function Header() {
    return (
        <View style={style.container}>
            <Image source={Switch} style={style.image} />
            <Text style={style.title}>
                Nintendo Switch
            </Text>
        </View>
    );
}