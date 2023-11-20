import React, {useState} from 'react';
import TemperatureInput from './TemperatureInput';

const BoilingVerdict = (props) => {
    if(props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
}

const toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
}

const Calculator = () => {
    
}

export default Calculator;