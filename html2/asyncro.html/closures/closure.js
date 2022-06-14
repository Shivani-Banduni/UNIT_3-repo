// 5697d8eb3f7d877be3e26fc91dfe841f
// OMDB KEY-95d3c3bd

async function searchMovies(){
    try{
        let movie = document.getElementById("query").value   
      let res=await  fetch(`https://www.omdbapi.com/?apikey=95d3c3bd&s=${movie}`);
      let data=await res.json()
      return data.Search

    }
    catch(err){
console.log("err:",err)
    }
    }
async function main(){
    let data= await searchMovies();

    if(data==undefined){
        return
    }
    // console.log("data:",data)
    appendData(data)
}
let movies_div=document.getElementById("movies")
function appendData(movies){
    console.log(movies)
    movies_div.innerText=null
    movies.forEach(function(ele){
        let p=document.createElement('p')
        p.innerText=ele.Title
        movies_div.append(p)

    })
        

}
let time_id

//oninput-main()-debounce-'a'-settimeout
//oninput-main()-debounce-"av"-settime0ut
//oninput-main()-debounce-"ave"-settimeout
function debounce(func,delay){
  if(time_id){
      clearTimeout(time_id)
  }
 time_id=   setTimeout(function(){
        func()
    },delay)
}
