function findCartLengthHandler()
{
    return localStorage.getItem('ecom')?JSON.parse(localStorage.getItem('ecom')):[]
}
let cartTemp=document.getElementById('cart-temp')
let price=document.getElementById('price')
let totalPrice=document.getElementById('totalprice')

print()
function deleteCart(id)
{
   let newcartData= findCartLengthHandler().filter((item)=>{
        return item.id !=id
    })
    localStorage.setItem('ecom',JSON.stringify(newcartData))
    window.location.reload()
}
function print()
{
    let str=''
     findCartLengthHandler().map((item)=>{
        str+=`  <tr>
        <td>${item.product_name}</td>
        <td>
          <img
            src=${item.images[0]}
            class="img-fluid" style="height: 55px; width: 55px;"
          />
        </td>
        <td>${item.price}</td>
        <td><button class="btn btn-danger" onclick="deleteCart(${item.id})">del</button></td>
      </tr>`
     })
     cartTemp.innerHTML=str
}
priceHandler()
function priceHandler()
{
   // console.log(typeof findCartLengthHandler())
   let priceofproduct= findCartLengthHandler().reduce((acc,item)=>{
        return acc+item.price
    },0)
    console.log(priceofproduct)
    let sumofPrice=priceofproduct+25
    
price.innerText=priceofproduct
totalPrice.innerText=sumofPrice

}
