import React from "react"
import Button from "./Button"
import './ButtonsGroup.css'

export default function ButtonsGroups(props) {
    return (
        <div className="button-group">
            <Button type='checkbox' className='checkbox' label="Caracteres especiais" />
            <Button type='checkbox' className='checkbox' label="Letras maiúsculas" />
            <Button type='checkbox' className='checkbox' label="Números" />
            <Button type='range' label='Tamanho da senha' min={8} max={30} />
            <div className="button">
                <Button type='button' className='button-default' >Gerar senha</Button>
            </div>
        </div>
    )
}