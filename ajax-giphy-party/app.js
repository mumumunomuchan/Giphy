const $gifArea = $("#gif-area");
const $search = $("#search");

function addGif(res){
     let numRes = res.data.length;
     if(numRes){
       let randomIdx = Math.floor(Math.random() * numRes);
       let $newCol =$("<div>" , {class: "col-md-4 col-12 mb-4"});
       let $newGif = $("<img>", {src: res.data[randomIdx].images.original.url, class : "w-100"});
       $newCol.append($newGif);
       $gifArea.append($newCol);
     }  
}

$("form").on("submit", async function(e){
  e.preventDefault();

let searchTerm = $search.val();
$search.val("");
const response = await axios.get("http://api.giphy.com/v1/gifs/search",{
       params : {
              q : searchTerm,
              api_key : "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
       }
});
addGif(response.data);
});

$(remove).on("click", function(){
       $gifArea.empty();
});