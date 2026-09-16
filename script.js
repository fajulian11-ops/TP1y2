const casos = [
  {
    titulo: "Cachorro mestizo, Barrio Norte",
    estado: "perdido",
    descripcion: "Visto por última vez cerca de la plaza principal. Collar rojo, sin chapa."
  },
  {
    titulo: "Hembra adulta, Villa Mariano Moreno",
    estado: "tratamiento",
    descripcion: "Rescatada con una pata lastimada. Actualmente en atención veterinaria."
  },
  {
    titulo: "Macho joven, raza mestiza",
    estado: "adopcion",
    descripcion: "Ya recuperado y esterilizado. Busca familia con patio."
  },
  {
    titulo: "Beagle, zona Yerba Buena",
    estado: "perdido",
    descripcion: "Se escapó durante una tormenta. Responde al nombre \"Toby\"."
  }
];


const condicionEstado = {
  perdido: "Perdido",
  tratamiento: "En tratamiento",
  adopcion: "En adopción"
};

const contenedorCasos = document.getElementById('contenedor-casos');
const inputBuscador = document.getElementById('buscador-casos');
const btnBuscar = document.getElementById('btn-buscar-casos');

function renderCasos(lista) {
  if (lista.length === 0) {
    contenedorCasos.innerHTML = '<p class="text-center" style="color:#6E6853;">No se encontraron casos.</p>';
    return;
  }

  contenedorCasos.innerHTML = lista.map(c => `
    <div class="col-sm-6 col-lg-3">
      <div class="card h-100 shadow-sm">
        <div class="caso-imagen"></div>
        <div class="card-body">
          <span class="badge badge-${c.estado} rounded-pill mb-2">${condicionEstado[c.estado]}</span>
          <h3 class="h6">${c.titulo}</h3>
          <p class="small mb-2" style="color:#6E6853;">${c.descripcion}</p>
          <a href="#" class="fw-semibold small">Ver detalle</a>
        </div>
      </div>
    </div>
  `).join('');
}

function buscarCasos() {
  const texto = inputBuscador.value.toLowerCase().trim();

  const filtrados = casos.filter(c =>
    c.titulo.toLowerCase().includes(texto) ||
    c.descripcion.toLowerCase().includes(texto)
  );

  renderCasos(filtrados);
}


renderCasos(casos);


btnBuscar.addEventListener('click', buscarCasos);


inputBuscador.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    buscarCasos();
  }
});