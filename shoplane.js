$(document).ready(function(){
  // Activate Carousel
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop:true,
    center:true,
    autoplay:true,
    margin:10,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  
  });
$.ajax({
    type : "GET",
    url : "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
    success : function(response) { 
        console.log(response)
        loadData(response)

    },
    error: function(request,status,errorThrown) {
        // There's been an error, do something with it!
     console.log(request)
     console.log(status)
     console.log(errorThrown)
        // Only use status and errorThrown.
        // Chances are request will not have anything in it.
   }
})
})

function loadData(data){
    productList = data
    let cloth = document.getElementById("clothing-section");
let accessory = document.getElementById("accessory-section");

function putdata(index, divname){
  divname.innerHTML += `<div class="Product-card" onClick = "change_page('${productList[index].id}')">
    <img class="card-img" src="${productList[index].preview}" alt="product-image"/>
   <div class="productData">
      <h4> ${productList[index].name}</h4>
      <h5> ${productList[index].brand} </h5>
      <p class="price"> Rs.${productList[index].price}</p>
   </div></div>`
}
var divname;
var x = function(){
for (i=0; i < productList.length; ++i){
  if (productList[i].isAccessory == false){
    putdata(i, cloth)
  }else {
    putdata(i, accessory)
  }
}
}
x(putdata)

}

function change_page(datahe){
  // similar behavior as an HTTP redirect
  localStorage.setItem("id",datahe);
  window.location.href = "product-preview.html";
  //or
  // similar behavior as clicking on a link
  console.log(datahe)
  console.log("function triggered")
  // location.href = 'product-preview.html';
} 

function productView(c){
  alert(`product with id '${c}' is been clicked`)
} 
function check(c){
    alert(`${c} is been clicked`)
    console.log(productList[c-1])
    console.log(c)
} 

