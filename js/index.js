const searchElement = document.getElementById('search');
const resultElement = document.getElementById('result');

searchElement.addEventListener('keyup',

    async function searchPhoto(event) {
        //Se obtiene lo que el usuario va a buscar 
        //const searchValue = document.getElementById('search').value.toLowerCase();
        const searchValue = event.target.value;
        //console.log(searchValue);
        //conexión a la URL
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        //se pasa los datos a JSON
        const data = await response.json();
        //limpiamos el div de los resultados
        resultElement.innerHTML = "";
        //filtramos para indexar la búsqueda del usuario
        const searchFilter = data.filter(arr => arr.title.toLowerCase().includes(searchValue));

        if (searchValue.length > 0) {
            searchFilter.forEach(element => {
                resultElement.insertAdjacentHTML("beforeend",`
                    <picture>
                        <img src=${element.thumbnailUrl} alt="Foto" />
                    </picture>,
                    <h3>${element.title}</h3>`
                );
            });
        }
    });