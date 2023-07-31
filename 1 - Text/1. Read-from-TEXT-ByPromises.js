
// By Queryselector method
let content = document.querySelector('#btn');
// By document.getElementById Method
// let content2 = document.getElementById('btn');
console.log(content);

content.addEventListener('click', () => {
    console.log("Button Clicked ");

})

// ***********************************************************

// Promises 

const promise = fetch('Textdata')
promise.then((res) => {

    // if then me response hai agr ussi ko console krte hai , 
    // to wo saara status sb kuch dikata hai us promise ka

    return res.text();
}).then((value) => {

    // Console pr likne ka 
    console.log(value);
    // document HTML Page pr likhne ka 
    // document.write(value);
})

// Only Fetch Method se 

fetch('Textdata').then((res) => {

    // if then me response hai agr ussi ko console krte hai , 
    // to wo saara status sb kuch dikata hai us promise ka

    // Error Handling 

    if (!res.ok) {
        throw Error(res.statusText)
    }

    return res.text();

}).then((value) => {


    // Console pr likne ka 
    console.log(value);

    // document HTML Page pr likhne ka 
    // document.write(value);
})
    // catch error sahi se kaam nhi krega , 
    // Fech() me kyuki isme error comes only when network error occured 

    .catch((error) => {
        console.log(error)

    })


// ***********************************************************

// Add Data By InnterHtml method 
// Note innerHTml used when we want to 
let data = document.querySelector('.div');
data.innerHTML = "Hello Boss"

//       OR 

data.textContent = "Hello Boss . How r U ";

