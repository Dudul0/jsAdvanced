export default async() => { 
    const request = await fetch('https://rickandmortyapi.com/api/character/?page=19')
    return await request.json()
 }
