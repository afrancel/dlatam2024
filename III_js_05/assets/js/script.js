import propiedad_alquiler from "./data_mobiliaria_arriendo.js";
import propiedad_venta from "./data_mobiliaria_venta.js";

const verPropiedades = (propiedades, containerId) => {
  const container = document.getElementById(containerId);

  //selección
  const propiedadesSelect = propiedades.slice(0, 3);

  //extraemos la info de la data / --> index
  propiedadesSelect.forEach((propiedad) => {
    const card = document.createElement("div");
    card.className = 'col-md-4 mb-4"';

    const cardContent = `

        <!-- BOX ---------------------------------------------------------->    
        <div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
          <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
          <p> ${propiedad.smoke ? '<spam class="text-success"><i class="fa-solid fa-check"></i> Se permite fumar</spam>' : '<spam class="text-danger"><i class="fas fa-smoking-ban"></i></spam> No se permite fumar' } </p>
          <p> ${propiedad.pets ? '<spam class="text-success"><i class="fa-solid fa-dog"></i> Se permite mascota</spam>' : '<spam class="text-danger"><i class="fa-solid fa-dog"></i></spam> No se permite mascota' } </p>
        </div>
      </div>
        `;
    card.innerHTML = cardContent;
    container.appendChild(card);
  });
  
};
verPropiedades(propiedad_alquiler, "alquilerContainer");
verPropiedades(propiedad_venta, "ventaContainer");