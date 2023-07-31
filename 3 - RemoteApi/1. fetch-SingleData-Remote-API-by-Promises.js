
// Chaining 
document.getElementById("btn").addEventListener("click", makerequest);

// Promise then | Single Data

// function makerequest() {

//     console.log("Button Clicked");

//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         // if fetch krlia poora then 
//         .then((response) => {

//             // Error Handling 
//             // If no response , so return throw error
//             if (!response.ok) {
//                 throw Error(response.statusText)
//             }

//             // Show status of response
//             console.log(response);

//             // Return response in JSON Format 
//             return response.json()
//         })
//         .then((data) => {

//             // console.log(jo-screen-pr-dikega , upr se aaya hua data )
//             console.log("Data:", data)
//             console.log("ID:", data.id)
//             console.log("Title:", data.title)
//             console.log("Body:", data.body)
//         }).catch((error) => { console.log(error) })
// }

// Promise then | Single Data | Showing Data in Browser
// function makerequest() {
//     console.log("Button Clicked")
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then((res) => {
//             if (!res.ok) {
//                 throw Error(res.statusText)
//             }
//             console.log(res.json());
//             return res.json()
//         }).then((data) => {
//             console.log("Data:", data)
//             document.getElementById("pid").innerText = data.id
//             document.getElementById("title").innerText = data.title
//             document.getElementById("body").innerText = data.body
//         }).catch((error) => { console.log(error) })
// }


// // Promise then | Single Data | Showing Data in Browser
function makerequest() {

    console.log("Button Clicked");

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {

            // Error handling
            // If no response , so return throw error
            if (!response.ok) {
                throw Error(response.statusText)
            }
            // Show status of response
            console.log(response);

            // Return response in JSON Format
            const jsonData = response.json();
            console.log(jsonData);
            return jsonData
        })
        .then((data) => {

            console.log("Data:", data)

            document.getElementById("pid").innerText = data.id;
            document.getElementById("title").innerText = data.title;
            document.getElementById("body").innerText = data.body;
        }).catch((error) => { console.log(error) })
}






















