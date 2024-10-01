import tableCreator from './tableCreator.js'

export default (data) => { 
    data.forEach( table => tableCreator(table)); 
}