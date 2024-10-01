export default character => { 
    const cardsWrapper = document.querySelector('.cards-wrapper') 
    const card = document.createElement('div') 
    card.classList.add('card') 
    card.innerHTML =  
    ` 
        <img src="${character.image}" alt=""> 
        <span class="name">${character.name}</span> 
        <span class="status">${character.status}</span> 
    ` 
    cardsWrapper.appendChild(card) 
} 