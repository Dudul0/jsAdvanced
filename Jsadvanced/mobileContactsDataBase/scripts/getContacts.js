export default async() => { 
    const request = await fetch('https://66f4112577b5e88970982662.mockapi.io/contacts/contacts')
    return await request.json()
 }
