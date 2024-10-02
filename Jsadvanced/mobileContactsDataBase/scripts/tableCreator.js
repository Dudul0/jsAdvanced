export default client => { 
    const tableWrapper = document.querySelector('.table-warapper') 
    const table = document.createElement('tr') 
    table.setAttribute('data-bs-toggle', 'modal')
    table.setAttribute('data-bs-target', '#exampleModal')
    table.id = client.id
    table.innerHTML =  
    ` 
        <tr>
            <th scope="row">${client.id}</th>
            <td>${client.name}</td>
            <td>${client.surname}</td>
            <td>${client.birthdate}</td>      
            <td>${client.sex}</td>      
            <td>${client.number}</td>      
            <td>${client.email}</td>      
        </tr>
    ` 
    table.addEventListener('click', function(){
        const currentCLient = {
            id: null,
            name: null,
            surname: null,
            birthdate: null,           
            sex: null,
            number: null,
            email: null
        }
        let i = 0     
        for (const key in currentCLient) {   
            currentCLient[key] = this.children[i].textContent 
            i++
            
        }
        console.log(currentCLient)

        sessionStorage.setItem('currentClientId', JSON.stringify(this.children[0].textContent))
        const modalBody = document.querySelector('.modal-body')
        const input = document.createElement('div')
        input.classList = 'inputWrapper'
        input.innerHTML = 
        `
        <div class="input-group flex-nowrap"></div>
        <span class="input-group-text" id="addon-wrapping">Name</span>
        <input type="text" class="form-control" placeholder="${currentCLient.name}" aria-label="Username" aria-describedby="addon-wrapping">
        </div>
        
        <div class="input-group flex-nowrap"></div>
        <span class="input-group-text" id="addon-wrapping">Surname</span>
        <input type="text" class="form-control" placeholder="${currentCLient.surname}" aria-label="Username" aria-describedby="addon-wrapping">
        </div>

        <div class="input-group flex-nowrap"></div>
        <span class="input-group-text" id="addon-wrapping">Birth date</span>
        <input type="text" class="form-control" placeholder="${currentCLient.birthdate}" aria-label="Username" aria-describedby="addon-wrapping">
        </div>

        <div class="input-group flex-nowrap"></div>
        <span class="input-group-text" id="addon-wrapping">Number</span>
        <input type="text" class="form-control" placeholder="${currentCLient.number}" aria-label="Username" aria-describedby="addon-wrapping">
        </div>

        <div class="input-group flex-nowrap"></div>
        <span class="input-group-text" id="addon-wrapping">Email</span>
        <input type="text" class="form-control" placeholder="${currentCLient.email}" aria-label="Username" aria-describedby="addon-wrapping">
        </div>
        `
 
        modalBody.appendChild(input)
        const modal = document.getElementById('exampleModal');
        modal.addEventListener('hidden.bs.modal', function () {
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = ''; 
        });
    })
    tableWrapper.appendChild(table) 





} 





















