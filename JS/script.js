/* let urlStriveSchool = 'https://striveschool-api.herokuapp.com/api/product/';
console.log(urlStriveSchool)
 */
/* fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDMxMGMwNTgzNTAwMTg1MjMxOWYiLCJpYXQiOjE3MDIzODAzMDQsImV4cCI6MTcwMzU4OTkwNH0.0BHc3UjedXKtwSNG9oBFH9l9wBb5Pvjmr5TjystjiYI"
}
})
  .then((response) => response.json())
  .then((obj) => {
    console.log(obj);
    
  })
  .catch((error) => console.log("Error!! " + error)); 
 */


  document.addEventListener('DOMContentLoaded', () => {
    addProduct();
    fetchProducts();
});

function addProduct() {
    let button = document.querySelector('#btn');
    if (button) {
        button.addEventListener('click', () => {
            let form = document.createElement('form');
                
            form.innerHTML = `
                <div class="mt-2">
                    <label for="text1" class="form-label">Add name</label>
                    <input type="text" class="form-control" id="text1">
                </div>
                <div class="">
                    <label for="text2" class="form-label">Add description</label>
                    <input type="text" class="form-control" id="text2">
                </div>
                <div class="">
                    <label for="text3" class="form-label">Add Brand</label>
                    <input type="text" class="form-control" id="text3">
                </div>
                <div class="">
                    <label for="text4" class="form-label">Add image</label>
                    <input type="text" class="form-control" id="text4">
                </div>
                <div class="">
                    <label for="text5" class="form-label">Add price</label>
                    <input type="text" class="form-control" id="text5">
                </div>
                <button type="submit" id='submit' class="btn btn-primary mt-3">Submit</button>`;

            let formInput = document.querySelector('#formInput');
            formInput.appendChild(form);

            form.addEventListener('submit', function(e){
                e.preventDefault();

                let name = document.querySelector('#text1').value;
                let description = document.querySelector('#text2').value;
                let brand = document.querySelector('#text3').value;
                let imageUrl = document.querySelector('#text4').value;
                let price = document.querySelector('#text5').value;

                let data = {
                    "name": name,
                    "description": description,
                    "price": price,
                    "imageUrl": imageUrl,
                    "brand": brand
                }; 

                fetch('https://striveschool-api.herokuapp.com/api/product/', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDMxMGMwNTgzNTAwMTg1MjMxOWYiLCJpYXQiOjE3MDIzOTA2ODYsImV4cCI6MTcwMzYwMDI4Nn0.PRXfvk4HTjV2xiWScsiBTwmEPDZ1DLMUuwBsEce8s_k"
                    },
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Risposta dal server:', data);
                    clearForm();
                    fetchProducts();
                })
                .catch((error) => {
                    console.error('Errore durante la richiesta:', error);
                });
            });
        });
    }
}






 fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDMxMGMwNTgzNTAwMTg1MjMxOWYiLCJpYXQiOjE3MDIzODAzMDQsImV4cCI6MTcwMzU4OTkwNH0.0BHc3UjedXKtwSNG9oBFH9l9wBb5Pvjmr5TjystjiYI"
}
})
  .then((response) => response.json())
  .then((obj) => {
    console.log(obj);
    
  })
  .catch((error) => console.log("Error!! " + error)); 

  function fetchProducts() {
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDMxMGMwNTgzNTAwMTg1MjMxOWYiLCJpYXQiOjE3MDIzOTA2ODYsImV4cCI6MTcwMzYwMDI4Nn0.PRXfvk4HTjV2xiWScsiBTwmEPDZ1DLMUuwBsEce8s_k"
        },
    })
    .then(response => response.json())
    .then(products => {
        displayProducts(products);
    })
    .catch(error => {
        console.error('Errore durante la richiesta GET:', error);
    });
}

function displayProducts(products) {
    let cardContainer = document.querySelector('#cardContainer');
    cardContainer.innerHTML = '';

    products.forEach(product => {
        let card = createProductCard(product);
        cardContainer.appendChild(card);
    });
}

function createProductCard(product) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">Price: $${product.price}</p>
            <p class="card-text">Brand: ${product.brand}</p>
        </div>
    `;
    return card;
}

function clearForm() {
    document.querySelector('#text1').value = '';
    document.querySelector('#text2').value = '';
    document.querySelector('#text3').value = '';
    document.querySelector('#text4').value = '';
    document.querySelector('#text5').value = '';
}


/* fetch('https://striveschool-api.herokuapp.com/api/product/6578a1d026761400183c3808', {
    method: 'DELETE',
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDMxMGMwNTgzNTAwMTg1MjMxOWYiLCJpYXQiOjE3MDIzOTA2ODYsImV4cCI6MTcwMzYwMDI4Nn0.PRXfvk4HTjV2xiWScsiBTwmEPDZ1DLMUuwBsEce8s_k"
    }
})
.then(response => {
    if (response.ok) {
        console.log('Tutti i dati sono stati cancellati con successo!');
    } else {
        console.error('Qualcosa è andato storto durante l\'eliminazione dei dati');
    }
})
.catch(error => {
    console.error('Errore durante la richiesta DELETE:', error);
});
 */