import getContacts from "./scripts/getContacts.js"
import tablegenerator from "./scripts/tablegenerator.js"
import deleteBtn from './scripts/buttons/deleteBtn.js'
import editBtn from "./scripts/buttons/editBtn.js"
import addContactBtn from "./scripts/buttons/addContactBtn.js"

window.onload = () => {
    getContacts()
    .then( data => tablegenerator(data))
}

document.getElementById('deleteBtn').addEventListener('click', deleteBtn)
console.log(JSON.parse(sessionStorage.getItem('currentClientId')))
document.getElementById('editBtn').addEventListener('click', editBtn)
document.getElementById('addContactBtn').addEventListener('click', addContactBtn)


