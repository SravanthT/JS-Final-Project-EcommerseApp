
function addhere(){
    let incart = localStorage.getItem('inCart')
    if (incart==null){
        let arr = [];
        let obj = {
            item : `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productid}`
        }
        arr.push(obj)
    //   localStorage.setItem("inCart",JSON.stringify(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productid}`))
    localStorage.setItem('inCart', JSON.stringify(arr))
 
   
      cartcount(JSON.parse(localStorage.getItem('inCart')).length)
      
    }else{
      let incart = JSON.parse((localStorage.getItem('inCart')))
      let obj = {
          item : `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productid}`
      }
        incart.push(obj)
      localStorage.setItem('inCart', JSON.stringify(incart))
      cartcount(JSON.parse(localStorage.getItem('inCart')))
    }
    alert("Added to Cart")
    document.getElementById("cart-count").innerHTML = JSON.parse(localStorage.getItem('inCart')).length
  }
  function cartcount(z){
    let abc = z.length
  document.getElementById("cart-count").innerHTML = abc
  console.log(document.getElementById("cart-count").innerHTML)
  }
if (localStorage.getItem('inCart') != null){
    document.getElementById("cart-count").innerHTML = JSON.parse(localStorage.getItem('inCart')).length
}