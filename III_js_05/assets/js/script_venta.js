/*VENTA*/
import propiedad_venta from "./data_mobiliaria_venta.js";

const verPropiedadesVenta = (propiedades, containerId) => {
    const container = document.getElementById(containerId);
  
    //extraemos la info de la data / --> index
    propiedades.forEach((propiedad) => {
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
verPropiedadesVenta(propiedad_venta, "ventaContainerAll");