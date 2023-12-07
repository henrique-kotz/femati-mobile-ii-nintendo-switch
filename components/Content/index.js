import React from 'react';
import { View, Text, Image } from 'react-native';

import Characters from '../../assets/images/characters.png';
import style from './style.js';

export default function Content() {
    return (
        <View style={style.container}>
            <Text style={style.subtitle}>
                Os principais jogos estão aqui
            </Text>
            <Image source={Characters} style={style.image} />
            <Text style={style.paragraph}>
                A família Nintendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros.™, The Legend of Zelda™, Mario Kart™ e muitas outras.
            </Text>
        </View>
    );
}
