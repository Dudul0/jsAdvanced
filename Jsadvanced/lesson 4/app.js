import getData from "./getData.js"
import charactersCardsGenerator from "./charactersCardsGenerator.js"
window.onload = () => {
    getData()
    .then( data => charactersCardsGenerator(data))
}
