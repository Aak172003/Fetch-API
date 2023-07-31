
// Chaining 
document.getElementById("btn").addEventListener("click", makerequest);


// Promise then | Multiple Data

// function makerequest() {
//     console.log("Button Clicked");
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => {

//             // Error Handling
//             if (!res.ok) {
//                 throw Error(res.statusText)
//             }
//             // Initial me data hume ek response ke form me milta hai , 
//             // like respone true or false ,
//             // means we suffesfully fetch data from particular api or not
//             console.log(res)
//             return res.json()
//         })
//         .then((data) => {
//             console.log("Data:", data)

//             console.log("Hello Data ")

//             // Saara Data acceskk krne ke lie for ezh ka use krte hai 
//             // or yaha pr hum saara data show kr dete hai 
//             data.forEach(element => {
//                 console.log("ID:", element.id)
//                 console.log("Title:", element.title)
//                 console.log("Body:", element.body)
//             });
//         }).catch((error) => { console.log(error) })
// }



// // Promise then | Multiple Data | Showing Data in Browser
function makerequest() {
    console.log("Button Clicked")
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            if (!res.ok) {
                throw Error(res.statusText)
            }
            return res.json()
        })
        .then((data) => {
            console.log("Data:", data)

            // For Displaying in console 

            // data.forEach(element => {
            //     console.log(element.id)
            //     console.log(element.title)
            // })

            // find allpost id
            let output = document.getElementById("allpost")

            // data pr fecth krna hai  
            data.forEach(element => {
                // output.innerHTML = output.innerHTML 
                // ( krne se hamara data saara sequance me dikhega kyuki hr iteration output pr data dikha to 
                // rha hai , pr wo sb ek ke bdd ek overwrite kr jaa rhe hai , 
                // jiski wjh se mujhe sirf last wala data mil rha hai dekhne ko)

                output.innerHTML = output.innerHTML + `<p>ID: ${element.id}</p> <p>Title: ${element.title}</p> <p>Body: ${element.body}</p> <hr>`

                // h1 or div both are same , put representation is different
            });
        })
        .catch((error) => { console.log(error) })
}