const CLEAPI = "4064039409c0eef4707bd5429bcbcde9" // Stackage de ma cleAPI
 
// Appel a l'API avec la ville en paramètre de fonction

let ApiAppel = function(city){


let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${CLEAPI}&units=metric&lang=fr` 



fetch(url).then((response) => response.json() // faire la demande de recherche des données et puis les recupérer et les convertir en fichier Json
.then((data) => {
     console.log(data);


    // Permet de recuperer les elements qui sont dans le html et leur donner des valeurs des element météologique
     document.querySelector('#ville').innerHTML =  data.name;
     document.querySelector('#humidite').innerHTML = "<i class='fa-solid fa-droplet'></i> " + data.main.humidity  + '%';
     document.querySelector('#vent').innerHTML = "<i class='fa-solid fa-wind'></i> " + data.wind.speed + 'Km/h';
     document.querySelector('#temp').innerHTML = "<i class='fa-solid fa-temperature-three-quarters'></i> " + data.main.temp + '¤';

    })
)
    .catch((err) => console.log('Erreur  : ' + err)); //  Gestion de l'erreur 
};
    //selectionner la modification du formulaire

    // E couteur d'évenement sur 
    document.querySelector('form').addEventListener('submit', function(e){
        e.preventDefault();
        let saisiUser = document.querySelector('#inputVille').value;
        ApiAppel(saisiUser);
    });

   
        



