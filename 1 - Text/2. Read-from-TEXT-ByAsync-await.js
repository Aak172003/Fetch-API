document.getElementById("btn").addEventListener("click", makerequest);


// Async and Await
async function makerequest() {

    console.log("Button Clicked")

    // Fetch
    const res = await fetch('Textdata.txt')
    console.log(res)

    const data = await res.text()
    console.log(data)

    // document.write(data);
}

// Async and Await | Error handling
// async function makerequest() {
//     try {
//         console.log("Button Clicked")
//         const res = await fetch('Textdata1.txt')
//         if (!res.ok) {
//             throw Error(res.statusText)
//         }
//         console.log(res)

//         const data = await res.text()
//         console.log(data)

//     }
//     catch (error) {
//         console.log(error)
//     }
// }