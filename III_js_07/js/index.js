//explicación => https://www.youtube.com/watch?v=PNr8-JDMinU
// 1. obtener enlace a api
// 2. hacer función con llamado a la api
// 3. debo obtener respuesta
// 4. const response = fetch  ---> es la petición, es lo primero
// 5. debo esperar la respuesta, para eso le agrego el prefijo "await fetch ()..."
// 6. Si uso await a la fx debo cargarla como asincrona, entonces...
// const a = async() => {}
// 7. agrego un console.log(respuesta)
// 8. Aki me genera la respuesta como objeto json

// la api puedes solicitar parametros, a traves de la querystring en la url
// cuando se trabaja con async, usamos tambien try (probar el code previo) & catch (para capturar el error en tal caso)
// se debe poder probar el error, es como una condicion finalmente.


const API_URL = 'https://mindicador.cl/api'
const selectConversor = document.getElementById('fSelect')
const resultadoCambio = document.getElementById('resultado')


//Llamar a la API
const callApi = async (url) => {
    try {
        // Consultar API
        const response = await fetch(url)
        const dataAll = await response.json() // Consult data all

        // Seleccionar y depurar info
        const conversores = []
        for (const id in dataAll) {
            if (dataAll[id]["unidad_medida"] == "Pesos") {
                const { codigo, nombre, valor } = dataAll[id];
                conversores.push({ codigo, nombre, valor })
            }
        }

        // Renderizo select con datos obtenidos
        renderConversor(conversores, selectConversor)

        console.log(conversores)

    } catch (error) {
        const mensajeError = "Error al conectar"
        console.log(mensajeError)
    }
}

// Mostrando en HTML el select actualizado
const renderConversor = (conversores, container) => {

    let conversorSelect = `<option data-value="" value="">Seleccione</option>`
    conversores.forEach(({ codigo, nombre, valor }) => {
        conversorSelect += `<option data-value="${valor}" value="${codigo}">${nombre}</option>`
    });
    container.innerHTML = conversorSelect;
}

// Llamo a la función
callApi(API_URL)

//Capturar y convertir monto en el input
document.getElementById('fButtom').addEventListener('click', () => {

    const monto = document.getElementById('fMonto').value;
    const selectUserOption = document.getElementById('fSelect').querySelector('option:checked');
    const valor = selectUserOption.getAttribute('data-value');

    const montoConvertido = monto * valor;
    resultadoCambio.innerHTML = `El monto convertido es: ${montoConvertido} pesos.`;
});