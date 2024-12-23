let contenedorDolar = document.getElementById("contenedorDolares")
console.log(contenedorDolar)


fetch('https://dolarapi.com/v1/dolares')
  .then(response => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((elemento) => {
        const contenedorCreado = document.createElement("div");
        contenedorCreado.classList.add("dolar-item");
    
        contenedorCreado.innerHTML = `
            <h3>${elemento.nombre}</h3>
            <p>Precio de Compra: ${elemento.compra}</p>
            <p>Precio de Venta: ${elemento.venta}</p>
        `;
    
        contenedorDolar.append(contenedorCreado);
    });    

})

