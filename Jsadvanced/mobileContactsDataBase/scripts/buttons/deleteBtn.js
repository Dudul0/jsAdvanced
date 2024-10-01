
export default () => {
    console.log(JSON.parse(sessionStorage.getItem('currentClientId')))
    
    fetch(`https://66f4112577b5e88970982662.mockapi.io/contacts/contacts/${JSON.parse(sessionStorage.getItem('currentClientId'))}`, {
        method: 'DELETE',
        
    })



    //Deleting Without reloading


    const table = document.querySelector('.table-warapper')
    const victim = document.getElementById(`${JSON.parse(sessionStorage.getItem('currentClientId'))}`)
    table.removeChild(victim)
}    
