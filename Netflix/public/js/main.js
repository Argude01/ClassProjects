var categories = [
    {nameCategory: 'Recently Added', description: 'lastest movies added'},
    {nameCategory: 'Brayans Collection', description: 'movies added for brayan'},
    {nameCategory: 'Principal Movie', description: 'principal movie at netflix'}
];

var movies = [
    {
        
        cover:'img/principal.jpg',
        title:'Stranger Things',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        publicationDate:'12/12/2012',
        calification: 5,
        category: 'Recently Added',
        originalNetflix: false,
        principal:true
    },
    {
        cover:'img/1.jpg',
        title:'Stranger Things',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        publicationDate:'12/12/2012',
        calification: 5,
        category: 'Recently Added',
        originalNetflix: false,
        principal:false
    },
    {
        cover:'img/2.jpg',
        title:'La leyenda del Ayuwoki',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        publicationDate:'12/12/2012',
        calification: 5,
        category: 'Recently Added',
        originalNetflix: true,
        principal:false
    },
    {
        cover:'img/3.jpg',
        title:'Narcos Honduras',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        publicationDate:'12/12/2012',
        calification: 5,
        category: 'Recently Added',
        originalNetflix: true,
        principal:false
    },
    {
        cover:'img/4.jpg',
        title:'Finding Nemo',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        publicationDate:'12/12/2012',
        calification: 5,
        category: 'Recently Added',
        originalNetflix: false,
        principal:false
    },
    {
        cover:'img/5.jpg',
        title:'Love Rosie',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        publicationDate:'12/12/2012',
        calification: 5,
        category: 'Brayans Collection',
        originalNetflix: false,
        principal:false
    },
    {
        cover:'img/6.jpg',
        title:'Avengers',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        publicationDate:'12/12/2012',
        calification: 5,
        category: 'Brayans Collection',
        originalNetflix: false,
        principal:false
    },
    {
        cover:'img/7.jpg',
        title:'Bohemian Rhapsody',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        publicationDate:'12/12/2012',
        calification: 5,
        category: 'Brayans Collection',
        originalNetflix: false,
        principal:false
    },
    {
        cover:'img/8.jpg',
        title:'Harry Potter y los Padrinos Magicos',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        publicationDate:'12/12/2012',
        calification: 5,
        category: 'Brayans Collection',
        originalNetflix: false,
        principal:false
    },
];


function renderPublications() {
    
    document.getElementById('movie-principal').innerHTML = '';
    document.getElementById('movies-added-recently').innerHTML = '';
    document.getElementById('movies-for-brayan').innerHTML = '';
    for (let i=0; i<movies.length; i++) {
        if (movies[i].principal === true) {
            document.getElementById('movie-principal').innerHTML += 
                `<div class="col-xl-12" id="publication">
                <div id="publication-header-principal" style="background-image: url(${movies[i].cover});">
                <span id="video-duration"><button class="btn btn-danger">¡Nuevo!</button></span>
                </div>
                    <div id="publication-description">
                    <div class="description-title">${movies[i].title}</div>
                    <div class="description">${movies[i].description}</div>
                    <div class="calification"><i src="img/star-solid.svg" class="fas fa-star"></i></div>
                    <div class="options">
                    <label id="ver-mas" for="">Ver más</label> | <label id="eliminar" for="">Eliminar</label>
                    </div>
                    </div>
                    </div>        
                    `;
        }
        if (movies[i].category === 'Recently Added' && movies[i].principal === false) {
            document.getElementById('movies-added-recently').innerHTML += 
                `<div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12" id="publication">
                    <div id="publication-header" style="background-image: url(${movies[i].cover});">
                        <span><img src="img/logo-netflix-small.png"/></span>
                    </div>
                    <div id="publication-description">
                        <div class="description-title">${movies[i].title}</div>
                        <div class="description">${movies[i].description} </div>
                        
                        <div class="options">
                            <label id="ver-mas" for="">Ver más</label> | <label id="eliminar" for="">Eliminar</label>
                        </div>
                    </div>
                </div>        
                `;
        }
        if (movies[i].category === 'Brayans Collection' && movies[i].principal === false) {
            document.getElementById('movies-for-brayan').innerHTML += 
                `<div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12" id="publication">
                    <div id="publication-header" style="background-image: url(${movies[i].cover});">
                        <span><img src="img/logo-netflix-small.png"/></span>
                    </div>
                    <div id="publication-description">
                        <div class="description-title">${movies[i].title}</div>
                        <div class="description">${movies[i].description} </div>
                        
                        <div class="options">
                            <label id="ver-mas" for="">Ver más</label> | <label id="eliminar" for="">Eliminar</label>
                        </div>
                    </div>
                </div>        
                `;
        }
        
    }    
            
     
    
    
}

function guardarCambios(){
    informacion[indiceSeleccionado].titulo = document.getElementById('titulo').value;
}

renderPublications();