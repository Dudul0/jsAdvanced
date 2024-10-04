import getContacts from "./scripts/getContacts.js"
import tablegenerator from "./scripts/tablegenerator.js"
import deleteBtn from './scripts/buttons/deleteBtn.js'
import editBtn from "./scripts/buttons/editBtn.js"

window.onload = () => {
    getContacts()
    .then( data => tablegenerator(data))
}

document.getElementById('deleteBtn').addEventListener('click', deleteBtn)
console.log(JSON.parse(sessionStorage.getItem('currentClientId')))
document.getElementById('editBtn').addEventListener('click', editBtn)


