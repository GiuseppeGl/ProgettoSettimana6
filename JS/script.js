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
  .catch((error) => console.log("Error!! " + error)); */


  document.addEventListener('DOMContentLoaded', () => {
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
                <button type="submit" id='submit' class="btn btn-primary mt-3">Submit</button>`
    
                let formInput = document.querySelector('#formInput');
                formInput.appendChild(form);

                form.addEventListener('submit', function(e){
                    e.preventDefault();

                    let nome = document.querySelector('#text1').value;
                    let description = document.querySelector('#text2').value;
                    let brand = document.querySelector('#text3').value;
                    let image = document.querySelector('#text4').value;
                    let price = document.querySelector('#text5').value;

                    let data = {
                        nome: nome,
                        description: description,
                        brand: brand,
                        image: image,
                        price: price
                    };

                    fetch('https://striveschool-api.herokuapp.com/api/product/', {
                        method: 'POST',
                        headers: {
                            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDMxMGMwNTgzNTAwMTg1MjMxOWYiLCJpYXQiOjE3MDIzODAzMDQsImV4cCI6MTcwMzU4OTkwNH0.0BHc3UjedXKtwSNG9oBFH9l9wBb5Pvjmr5TjystjiYI",
                        },
                        body: JSON.stringify(data),
                        
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Risposta dal server:', data);
                        // Esegui qui le azioni desiderate dopo aver inviato i dati
                    })
                    .catch((error) => {
                        console.error('Errore durante la richiesta:', error);
                        console.error('Dettagli dell\'errore:', error.response.data);
                    });

                })


                

            }) 
        } 
    }addProduct();


    })


