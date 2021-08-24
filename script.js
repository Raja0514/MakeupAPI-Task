async function getusres() {
     const text = await fetch(
          "http://makeup-api.herokuapp.com/api/v1/products.json"
     );

     const data = await text.json();

   
     for (var i = 0; i < data.length; i++) {
          makeupItem(data[i]);
     }
}

function makeupItem(data) {

      

     const text = document.createElement("div");

     text.setAttribute("class", "sample");

     text.innerHTML = `
    
    <p><span class="text1"> Brand:</span>${data.brand}</p>
    <p><span class="text1"> Name of the product:</span>${data.name}</p>
    <p><span class="text1">price:</span>${data.price}</p>
    <img class="image" src=${data.image_link}/> 
    <p><span class="text1">product link:</span>${data.product_link}</p>
    <p><span class="text1">description:</span>${data.description}</p>

    </div>

    `;
     document.body.append(text);
}

getusres();
