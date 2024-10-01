import cardCreator from './cardCreator.js'

export default (data) => { 
    const { results } = data 
    results.forEach( character => cardCreator(character)); }