document.getElementById("btn").addEventListener("click", makerequest);

// Promise Then | Error handling


// function makerequest() {
//     console.log("Button Clicked")

//     fetch('Textdata.json').then((res) => {
//         // Error Handling 
//         if (!res.ok) {
//             throw Error(res.statusText)
//         }

//         console.log("Res", res);

//         const jsondata = res.json()
//         console.log("Json Format", jsondata)
//         return jsondata
//     }).then((data) => {
//         console.log("Data", data)

//         // Accesing Values by its key 
//         console.log(data.name)
//         console.log(data.roll)
//     })
//         .catch((error) => { console.log(error) })
// }

// Promise Then | Showing Data in Browser
function makerequest() {
    console.log("Button Clicked");

    fetch('Textdata.json').then((res) => {
        if (!res.ok) {
            throw Error(res.statusText)
        }

        console.log(res);

        return res.json()

    })
        .then((data) => {

            console.log(data)

            document.getElementById("divdata1").innerText = data.name;
            document.getElementById("divdata2").innerText = data.roll;
        })
        .catch((error) => { console.log(error) })
}
