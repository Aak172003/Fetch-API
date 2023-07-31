// Chaining 
document.getElementById("btn").addEventListener("click", makerequest);


// Async and Await | Multiple Data
// async function makerequest() {
//     try {
//         console.log("Button Clicked")
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         if (!res.ok) {
//             throw Error(res.statusText)
//         }
//         // here make a variable wo store json data 
//         const data = await res.json()

//         console.log("Data", data)
//         // Saara Data acceskk krne ke lie for ezh ka use krte hai 
//         // or yaha pr hum saara data show kr dete hai

//         data.forEach(element => {
//             console.log("ID:", element.id)
//             console.log("Title:", element.title)
//             console.log("Body:", element.body)
//         });
//     } catch (error) {
//         console.log(error)
//     }
// }

// Async and Await | Multiple Data | Showing Data in Browser
async function makerequest() {
    try {
        console.log("Button Clicked")
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!res.ok) {
            throw Error(res.statusText)
        }
        const data = await res.json()

        // For Displaying in console 

        data.forEach(element => {
            console.log(element.id)
            console.log(element.title)
        })

        // find allpost id
        // console.log("Data", data)

        // data pr fecth krna hai  
        let output = document.getElementById("allpost")
        data.forEach(element => {

            // output.innerHTML = output.innerHTML 
            // ( krne se hamara data saara sequance me dikhega kyuki hr iteration output pr data dikha to 
            // rha hai , pr wo sb ek ke bdd ek overwrite kr jaa rhe hai , 
            // jiski wjh se mujhe sirf last wala data mil rha hai dekhne ko)
            output.innerHTML = output.innerHTML + `<p>ID: ${element.id}</p> <p>Title: ${element.title}</p> <p>Body: ${element.body}</p> <hr>`
        });
    } catch (error) {
        console.log(error)
    }
}