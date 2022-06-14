document.querySelector("#home").addEventListener("click",home);
document.querySelector("#sign").addEventListener("click",sign);
document.querySelector("#log").addEventListener("click",log);


function home() {
    window.location = "index.html";
}
function sign() {
    window.location = "signup.html";
}
function log() {
    window.location = "login.html";
}

var imgData = [
               "https://cdn1.vectorstock.com/i/1000x1000/39/25/cinema-and-movie-banner-vector-21563925.jpg",
               "https://image.shutterstock.com/image-vector/online-cinema-banner-web-films-260nw-1297012507.jpg"];

let img = document.querySelector("#slideshow>img");
let i=0;

var x = setInterval(function () {
    if(i==imgData.length)
        i=0;
    img.src = imgData[i];
    i++;
},2000);

var movies_data = JSON.parse(localStorage.getItem("movies"));
console.log(movies_data);

function appendMovies(movies_data) {
    document.getElementById("movies").innerHTML="";
    movies_data.map(function (ele) {
        let div = document.createElement("div");
    
        let img = document.createElement("img");
        img.src= ele.Poster;
    
        let name = document.createElement("h5");
        name.innerText= ele.Title;
    
        let r_date = document.createElement("p");
        r_date.innerText = "Release: "+ele.Year;
    
        let imdb = document.createElement("p");
        imdb.innerText = "IMDB: "+ele.imdbID;
    
        div.append(img, name, r_date, imdb);
        document.getElementById("movies").append(div);
    });
}

appendMovies(movies_data);

function sortMovies() {
    let select = document.getElementById("sort").value;
    
    if(select=="lh")
    {
        movies_data.sort(function (a,b) {
            return a.imdbID-b.imdbID;
        });
    }
    else if(select=="hl") {
        movies_data.sort(function (a,b) {
            return b.imdbID-a.imdbID;
        });
    }
    appendMovies(movies_data);
}

