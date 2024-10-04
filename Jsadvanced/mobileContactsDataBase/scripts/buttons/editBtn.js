export default () => { 
    
        const name = document.getElementById('name').value.trim();
        const surname = document.getElementById('surname').value.trim();
        const birthdate = document.getElementById('birthdate').value.trim();
        const sex = document.getElementById('sex').value.trim();
        const number = document.getElementById('number').value.trim();
        const email = document.getElementById('email').value.trim();
      
        if (!name || !surname || !birthdate || !number || !email) {
          alert("Все поля должны быть заполнены");
          return;
        }
      
        fetch(`https://66f4112577b5e88970982662.mockapi.io/contacts/contacts/${JSON.parse(sessionStorage.getItem('currentClientId'))}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json; charset=utf-8'},
          body: JSON.stringify({ 
            name: name,
            surname: surname, 
            birthdate: birthdate, 
            sex: sex, 
            number:number, 
            email:email })
        })
      };