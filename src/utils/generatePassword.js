export default function GeneratePassword(specialChar, upperCase, number, maxRange) {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const specialChars = "!@#$&*?|%+-_./:;=()[]{}"

    let strPossibilities = lowerCaseLetters
    if(specialChar) strPossibilities = strPossibilities.concat(specialChars)
    if(upperCase) strPossibilities = strPossibilities.concat(upperCaseLetters)
    if(number) strPossibilities = strPossibilities.concat(numbers)

    let generatedPassword = ''

    for (let i = 1; i <= maxRange; i++) {
        let char = Math.floor(Math.random()
                    * strPossibilities.length + 1);
          
        generatedPassword += strPossibilities.charAt(char)
    }
    return generatedPassword;
}