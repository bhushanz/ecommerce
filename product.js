 let product = null;
 fetch("products.json")
 .then(response =>response.json())
 .then(data =>{
    product = data;
    addDataToHtml();
});
//add data product to html

let listProduct =document.querySelector(".productContainer")
function addDataToHtml(){
    product.forEach(product =>{
        //create new element iteam 
        let productContainer = document.createElement("div");
        productContainer.classList.add('card');
         let  newProduct = document.createElement("a");
        newProduct.href ="/singleproduct.html?id=" + product.id;
        newProduct.classList.add("iteam");
        newProduct.innerHTML=
        `
         <div class="iteamImag"> 
                 <img src="${product.iteamImage} " alt="" class="iteamImage">
                </div>
                <div class="iteamName">
                    <h4> ${product.iteamName} </h4>
                   <p> ${product.price} </p>
               </div>
        `
        listProduct.appendChild(productContainer);
        productContainer.appendChild(newProduct);
    }
    )
}

