const searchElement = document.getElementById('search');
const resultElement = document.getElementById('result');
//Se escucha con addEventListener 
searchElement.addEventListener('keyup',

    async function searchPhoto(event) {
        //Se obtiene lo que el usuario va a buscar 
        const searchValue = event.target.value;
        //conexión a la URL
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        //se pasa los datos a JSON
        const data = await response.json();
        //limpiamos el div de los resultados
        resultElement.innerHTML = "";
        //filtramos para indexar la búsqueda del usuario
        const searchFilter = data.filter(arr => arr.title.toLowerCase().includes(searchValue));
        //Se evalúa que se haya ingresado algo en el input
        if (searchValue.length > 0) {
            //se recorren los datos filtrados 
            searchFilter.forEach(element => {
                //se muestran dinámicamente los resultados 
                resultElement.insertAdjacentHTML("beforeend",`
                    <picture class="photo">
                        <img src="${element.thumbnailUrl}" alt="Foto" />
                        <h3>${element.title}</h3>
                    </picture>
                   `
                );
            });
        }
    });