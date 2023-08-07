document.addEventListener("DOMContentLoaded", function () {
  const btnBorda = document.getElementById("btnBorda");
  const itemLista = document.getElementById("itemLista");

  btnBorda.addEventListener("click", function () {
    itemLista.style.display = itemLista.style.display === "block" ? "none" : "block";
  });
});

const getBlog = async () => {

  const url = "https://api-rest-post-diegocandido.herokuapp.com/postagens/"
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  document.querySelector("#title").innerHTML = data[0].title;
  document.querySelector("#title2").innerHTML = data[1].title;
  document.querySelector("#title3").innerHTML = data[2].title;
  document.querySelector("#title4").innerHTML = data[3].title;

  let img = `https://api-rest-post-diegocandido.herokuapp.com/${data.[0].thumbImage}`;
  document.querySelector("#img").src = img;

  return data;
}

getBlogPost();

// function exibirrDados(){
//   const 
// }