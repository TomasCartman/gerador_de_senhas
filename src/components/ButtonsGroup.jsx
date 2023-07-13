import React from "react"
import Button from "./Button"
import './ButtonsGroup.css'
import useButtonsGroups from "../hooks/useButtonsGroup"
import GeneratePassword from "../utils/generatePassword"

export default function ButtonsGroups(props) {
    const { toggleSpecialCharactersCheckBox, 
        toggleUpperCaseCheckBox,
        toggleNumberCheckBox,
        rangeVal,
        setRangeVal,
        specialCharactersCheckBox,
        upperCaseCheckBox,
        numberCheckBox } = useButtonsGroups()

    function handleChange(event) {
        const eName = event.target.name
        if(eName === 'ce') toggleSpecialCharactersCheckBox()
        else if(eName === 'lm') toggleUpperCaseCheckBox()
        else if(eName === 'n') toggleNumberCheckBox()
        else if(eName === 'ts') setRangeVal(event.target.value)
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
            <div className="button" 
                onClick={() => props.generatePassOnClick(
                    GeneratePassword(
                        specialCharactersCheckBox, 
                        upperCaseCheckBox, 
                        numberCheckBox, 
                        rangeVal))}
            >
                <Button type='button' className='button-default' >Gerar senha</Button>
            </div>
        </div>
    )
}