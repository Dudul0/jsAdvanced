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
    let newData = null
    fetch("https://66f4112577b5e88970982662.mockapi.io/contacts/contacts/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        name: name,
        surname: surname,
        birthdate: birthdate,
        sex: sex,
        number: number,
        email: email
      })
    })
    .then ((data) => data.json())
    .then ((data) => {
      const tableWrapper = document.querySelector('.table-warapper') 
      const table = document.createElement('tr') 
      table.setAttribute('data-bs-toggle', 'modal')
      table.setAttribute('data-bs-target', '#exampleModal')
      table.innerHTML =  
      ` 
          <tr>
              <th scope="row">${data.id}</th>
              <td>${name}</td>
              <td>${surname}</td>
              <td>${birthdate}</td>      
              <td>${sex}</td>      
              <td>${number}</td>      
              <td>${email}</td>      
          </tr>
      ` 
      tableWrapper.appendChild(table) 
      console.log(newData)
    
    })

  }