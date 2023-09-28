
const contenedor = document.getElementById ('box')
const btnNuevo = document.getElementById('btn-nuevo')
const Modal = new bootstrap.Modal(document.getElementById('Modal'))
const btnListo = document.getElementById('listo')


let html=''
let option=''

const inputTitulo= document.getElementById('input-titulo')
const inputImage= document.getElementById('input-imagen')
const inputPost= document.getElementById('input-texto')

btnNuevo.addEventListener("click", () => {
  option= "nuevo";
  inputTitulo.value = "";
  inputImage.value = "";
  inputPost.value = "";
  btnListo.textContent= "Listo";
  Modal.show();
});

document.addEventListener('click',(event) =>{
  if (event.target.matches('#btnElim')){
    const article = event.target.closest('.col-sm-6')
    const idArticle = article.dataset.id
    
    fetch(`http://localhost:3000/api/posteo/${idArticle}`, {
      method: 'DELETE'
    }).then(res => {
        if (res.ok) {
            article.remover()
        }
    }).catch(err => {
        console.error(err)
    })
  }
})


fetch('http://localhost:3000/api/posteo')
.then (res => res.json())

//agregando posteos
.then(data => {
    data.forEach(posteo=> { 
    html += `
    
    <article class="col-sm-6 col-md-8 bg-light"" data-id="${posteo.id}">

         <div class="card mb-3 gap-3 h-50 d-inline-block w-auto p-3 d-flex">
        <img type="url" src="${posteo.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${posteo.titulo}</h5>
          <p class="card-text">${posteo.posteo}</p>
          <p class="user"><small class="text-muted"></small></p>
          <button type="" class="btn btn-danger" id="btnElim" >Eliminar</button>
        </div>
      </div>
       </article>
    `
    contenedor.innerHTML= html;
        
    });
})