import React, { useState } from "react"
import Button from "./Button"
import './ButtonsGroup.css'

export default function ButtonsGroups(props) {
    const [checkBoxes, setCheckBoxes] = useState(Array(3).fill(false))
    const [rangeVal, setRangeVal] = useState(19)

    function handleChange(event) {
        let checks = [...checkBoxes]
        switch (event.target.name) {
            case 'ce':
                checks[0] = !checks[0]
                setCheckBoxes(checks)
                break
            case 'lm':
                checks[1] = !checks[2]
                setCheckBoxes(checks)
                break
            case 'n':
                checks[2] = !checks[2]
                setCheckBoxes(checks)
                break
            case 'ts':
                setRangeVal(event.target.value)
                break
            default: break
        }
    }

    function GeneratePassword() {
        const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
        const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const numbers = "0123456789"
        const specialChars = "!@#$&*?|%+-_./:;=()[]{}"

        let strPossibilities = lowerCaseLetters
        if(checkBoxes[0]) strPossibilities = strPossibilities.concat(specialChars)
        if(checkBoxes[1]) strPossibilities = strPossibilities.concat(upperCaseLetters)
        if(checkBoxes[2]) strPossibilities = strPossibilities.concat(numbers)

        let generatedPassword = ''

        for (let i = 1; i <= rangeVal; i++) {
            let char = Math.floor(Math.random()
                        * strPossibilities.length + 1);
              
            generatedPassword += strPossibilities.charAt(char)
        }
        return generatedPassword;
    }

    return (
        <div className="button-group">
            <Button
                type='checkbox'
                className='checkbox'
                label="Caracteres especiais"
                name='ce'
                onChange={handleChange}
            />
            <Button
                type='checkbox'
                className='checkbox'
                label="Letras maiúsculas"
                name='lm'
                onChange={handleChange}
            />
            <Button
                type='checkbox'
                className='checkbox'
                label="Números"
                name='n'
                onChange={handleChange}
            />
            <Button
                type='range'
                className='range'
                label='Tamanho da senha'
                name='ts'
                min={8}
                max={30}
                onChange={handleChange}
                rangeValue={rangeVal}
            />
            <div className="button" onClick={() => props.generatePassOnClick(GeneratePassword())}>
                <Button type='button' className='button-default' >Gerar senha</Button>
            </div>
        </div>
    )
}