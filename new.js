
const submit = document.getElementById('submit')
const lower = document.getElementById('lower')
const upper = document.getElementById('upper')
const numbers = document.getElementById('number')
const symbols = document.getElementById('symbol')
const emoji = document.getElementById('emoji')
const result = document.getElementById('result')

let lowercase
let uppercase
let number
let symbol
let emoticon





function generatePassword(){



    const Length = 12

    if(lower.checked){
        lowercase = true
    }
    else{
        lowercase = false
    }
    
    if(upper.checked){
        uppercase = true
    }
    else{
        uppercase = false
    }

    if(numbers.checked){
        number = true
    }
    else{
        number = false
    }

    if(symbols.checked){
        symbol = true
    }
    else{
        symbol = false
    }

    if(emoji.checked){
        emoticon = true
    }
    else{
        emoticon = false
    }

    const lowerchar = 'abcdefghijklmnopqrstuvwxyz'
    const upperchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numberchar = '0123456789'
    const symbolchar = '!@#$%^&*?~'
    const emoticonchar = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻"]

    let allowedchars = ""
    let password = ""

    allowedchars += lowercase ? lowerchar : ""
    allowedchars += uppercase ? upperchar : ""
    allowedchars += number ? numberchar : ""
    allowedchars += symbol ? symbolchar : ""
    allowedchars += emoticon ? emoticonchar : ""

    
    
    for(let i = 0; i < Length; i++){

        const randomIndex = Math.floor(Math.random() * allowedchars.length)
        password += allowedchars[randomIndex]
    }

    

    result.innerHTML = password

}


