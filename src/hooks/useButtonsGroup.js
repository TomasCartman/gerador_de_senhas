import { useState } from "react"

export default function useButtonsGroups() {
    const [checkBoxes, setCheckBoxes] = useState(Array(3).fill(false))
    const [rangeVal, setRangeVal] = useState(19)

    const specialCharactersCheckBox = checkBoxes[0]
    const upperCaseCheckBox = checkBoxes[1]
    const numberCheckBox = checkBoxes[2]

    const toggleSpecialCharactersCheckBox = () => {
        let checks = [...checkBoxes]
        checks[0] = !checks[0]
        setCheckBoxes(checks)
    }

    const toggleUpperCaseCheckBox = () => {
        let checks = [...checkBoxes]
        checks[1] = !checks[1]
        setCheckBoxes(checks)
    }

    const toggleNumberCheckBox = () => {
        let checks = [...checkBoxes]
        checks[2] = !checks[2]
        setCheckBoxes(checks)
    }

    return {
        toggleSpecialCharactersCheckBox, 
        toggleUpperCaseCheckBox,
        toggleNumberCheckBox,
        rangeVal,
        setRangeVal,
        specialCharactersCheckBox,
        upperCaseCheckBox,
        numberCheckBox
    }
}