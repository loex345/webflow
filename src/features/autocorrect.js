//target all inputs
const allInputEL = document.querySelectorAll("input")

//correct answers
let correctObj = {
    '1-1-5-A': 'a',
    '1-1-6-King': 'king',
    '1-2-1-this': 'this',
    '1-2-1.1-end': 'end',
    '1-2-2-witness': 'witness',
    '1-2-3-truth': 'truth',
    '1-3-2-Herod-s': 'herod',
    '1-3-3-miracle': 'miracle',
    '1-3-3-miracle-2': 'miracle',
    '1-3-4-sent': 'sent',
    '1-3-5-Pilate': 'pilate',
    '1-4-1-word': 'word',
    '1-4-2-truth': 'truth',
    '1-5-1-fear': 'fear',
    '1-5-2-Peace': 'peace',
    '1-5-3-you': 'you',
    '1-5-4-terrified': 'terrified',
    '1-5-5-affrighted': 'affrighted',
    '1-5-6-spirit': 'spirit',
    '1-6-1-handle': 'handle',
    '1-6-3-Word': 'word',
    '1-5-4-of': 'of',
    '1-6-5-Life': 'life',
    '1-6-1-see': 'see',
    '1-7-1-revealer': 'revealer',
    '1-7-2-revealeth': 'revealeth',
    '1-7-3-revealeth': 'revealeth',
    '1-7-4-manifest': 'manifest',
    '1-7-5-God': 'god',
    '1-7-6-sure': 'sure',
    '1-7-7-light': 'light',
    '1-7-8-dawn': 'dawn',
    '1-7-9-arise': 'arise',
    'Christ': 'christ',
    'tribute': 'tribute',
    'forbidding': 'forbidding',
    'perverting': 'perverting'



}

//find all ids
for (let id = 0; id < allInputEL.length; id++) {
    console.log(allInputEL[id].id)
    allInputEL[id].addEventListener("click", isCorrect, {
    })

}
// on click find ID, Match to a list, check anwser against

function isCorrect(e) {
    //take information from the target
    console.log(e.target.id, 'Yes I am here')
    if (e.target.id in correctObj) {
        console.log(e.target.value, "value")
        if (e.target.value === '') {
            let myId = document.getElementById(e.target.id).removeAttribute("style")
            return myId
        }
        // compare values target with key
        if (e.target.value.toLowerCase() === correctObj[e.target.id]) {
            let value = correctObj[e.target.id]
            // get the id  to append to
            let myId = document.getElementById(e.target.id).setAttribute("style", "border-width:.5em; border-color:#7FFFD4;")
            alert("This is correct!")
            console.log("Yes I work", value, myId)

        } else if (e.target.value.toLowerCase() !== correctObj[e.target.id]) {
            let myId = document.getElementById(e.target.id).setAttribute("style", "border-width:.5em; border-color:#FF0000")
            console.log("wrong")
        } else {
            let myId = document.getElementById(e.target.id).removeAttribute("style")
        }
        //Todo make guard so that does fire until the word length is equal or more than the correct answer
    }

}