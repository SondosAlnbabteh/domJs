/******************** Q1 *********************** */
const mainUL = document.createElement("ul");
mainUL.setAttribute("class" , "row row-cols-1 row-cols-md-2 g-4 m-5");

document.getElementById("bodyDiv").appendChild(mainUL);
mainUL.style.listStyleType = "none";

function addLi(image , name){

    const createLi = document.createElement("li");

    const fruitName = document.createElement("h3");
    fruitName.setAttribute("class" , "m-5");
    fruitName.innerHTML = name;

    mainUL.appendChild(createLi);

    const imageLi = document.createElement("img");
    imageLi.src= image;
    imageLi.setAttribute("width" , "50%");
    imageLi.setAttribute("height" , "50%");
    imageLi.setAttribute("alt" , "image");

    createLi.appendChild(imageLi); 
    createLi.appendChild(fruitName);
}



const imageArray = ["banana.jpg" ,"stroberi.jpg" ,"apple.jpg" ,"orange.jpg"];

for(let counter = 0; counter < imageArray.length; counter++){

    var namee =imageArray[counter].slice(0 , -4);

    addLi( imageArray[counter] , namee );

}

/************************ Q2 *********************** */

function findNum( arrayNum , number){

    let counter = 0;  

    for(var count=0; count < arrayNum.length; count++){

        if(arrayNum[count] == number){

            console.log(count);

        }else{
            counter++;
        }

    }

    if(counter == arrayNum.length){
        console.log(-1)
    }

}

findNum( [1,2,3,4,5,6,7] , 8);