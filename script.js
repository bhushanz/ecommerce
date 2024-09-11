
let productContainer = document.querySelector(".productContainer");


let sliderContainer = document.querySelector(".slider");

let productData =[
    {
        "image" : "img/slide1.webp",
        "productName": "Satin Crop Sleeveless Top OL408",
        "product-price": 30

    },
    {
        "image" : "img/slide2.webp",
        "productName": "Satin Crop Sleeveless Top white",
        "product-price":33

    },
    {
        "image" : "img/slide3.webp",
        "productName": "Graphic Zip-Up Hoodie OL408",
        "product-price": 28

    },
    {
        "image" : "img/slide4.webp",
        "productName": "Summer Oversize Buttoned Shirt OL408",
        "product-price": 22

    },
    {
        "image" : "img/slide5.webp",
        "productName": "Washed Wide Leg Jeans CL404",
        "product-price": 32

    },
    {
        "image" : "img/slide6.webp",
        "productName": "Cat Knitted Hat CO327",
        "product-price": 20

    },
]   
productData.forEach((data ,i) =>{
     const infodiv =document.createElement("div");
     infodiv.classList = "product";

     const slideDetails =
     ` <div class="image">
          <img src="${productData[i].image}" alt="">
        </div>
        <div class="product-name">
        <h4>${productData[i].productName}</h4>
        </div>
        <div class="product-price">
          <h5>$ ${productData[i]["product-price"]}</h5>
        </div>
        `

        infodiv.innerHTML+=slideDetails; 
        sliderContainer.appendChild(infodiv);
})

// slider logic starts from here
const product = [...document.querySelectorAll('.slider')];
 const prev=[...document.querySelectorAll(".prev-btn")];
 const nextbtn= [...document.querySelectorAll(".next-btn")];

 product.forEach((item , i) => {
    let containerDimension=item.getBoundingClientRect();
    let containerWidth =containerDimension.width;

     nextbtn[i].addEventListener('click',() => {
      item.scrollLeft += containerWidth;
     })
     prev[i].addEventListener('click',() => {
        item.scrollLeft -= containerWidth;
       })

 })
//  slider end here 
   


 