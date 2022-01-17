
let click = document.getElementById("click");
let dis = document.getElementById("dis");


const cng = () =>{
    click.addEventListener("click",()=>{
        if(dis.style.display == "none"){
        dis.style.display = "block";
        }
        else{
            dis.style.display = "none";
        }
    })
}


// product Details

let productImg = document.getElementById("productImg");
let smallImg = document.getElementsByClassName("small-img");

if(smallImg[0] == undefined){
    console.log("");
}
else{

smallImg[0].addEventListener("click",()=>{
    productImg.src = smallImg[0].src;
})

smallImg[1].addEventListener("click",()=>{
    productImg.src = smallImg[1].src;
})

smallImg[2].addEventListener("click",()=>{
    productImg.src = smallImg[2].src;
})

smallImg[3].addEventListener("click",()=>{
    productImg.src = smallImg[3].src;
})
}

// account page


