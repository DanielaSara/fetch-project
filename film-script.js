
const url = "https://ghibliapi.herokuapp.com/films";
const body = document.getElementById('film-body');
const title = document.getElementById('title');
const original_title = document.getElementById('original-title');
const film_img = document.getElementById('film-img');
const description = document.getElementById('description');
const release = document.getElementById('release-date');
const director = document.getElementById('director');
const run_time = document.getElementById('running-time');

fetch(url)
.then( res => res.json() )
.then(data => {
    random_Num = Math.floor(Math.random()*22);
    title.textContent = data[random_Num].title;
    original_title.textContent = data[random_Num].original_title;
    release.innerHTML = `<span>Release Date:</span> ${data[random_Num].release_date}`;
    director.innerHTML = `<span>Director:</span> ${data[random_Num].director}`;
    run_time.innerHTML = `<span>Running Time:</span> ${data[random_Num].running_time} min`;
    film_img.src = data[random_Num].image;
    description.textContent = data[random_Num].description;
    let description_length = data[random_Num].description.length;
    if (window.screen.width > 800) {
        if (description_length < 390){
            description.style['font-size']="1.4em";
        }
        else{
            description.style['font-size']="1.2em";
        }  
    }
    })
    .catch(error => {
        console.log('error!');
        console.error(error);
    })

    document.querySelector(".back-btn").onclick = function () {
        location.href = "index.html";
    }
    

// another way
// getFilms().catch(error => {
//     console.log('error!');
//     console.error(error);
// });
// async function getFilms (){
//     let peticion = await fetch(url);
//     // desencapsulo
//     let data = await peticion.json();
//     random_Num = Math.floor(Math.random()*22);
//     title.textContent = data[random_Num].title;
//     original_title.textContent = data[random_Num].original_title;
//     release.innerHTML = `<span>Release Date:</span> ${data[random_Num].release_date}`;
//     director.innerHTML = `<span>Director:</span> ${data[random_Num].director}`;
//     run_time.innerHTML = `<span>Running Time:</span> ${data[random_Num].running_time} min`;
//     film_img.src = data[random_Num].image;
//     description.textContent = data[random_Num].description;
//     let description_length = data[random_Num].description.length;
//     if (description_length < 390){
//         description.style['font-size']="1.4em";
//     }
//     else{
//         description.style['font-size']="1.2em";
//     }  
// }