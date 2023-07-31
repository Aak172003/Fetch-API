document.getElementById("btn").addEventListener("click", makerequest);



// Async and Await | Error handling

async function makerequest() {
    try {
        console.log("Button Clicked");

        const res = await fetch('Textdata.json');

        // Error Handling
        if (!res.ok) {
            throw Error(res.statusText)
        }

        console.log(res)

        const data = await res.json()
        console.log(data)

        // Showing Data in Browser

        document.getElementById("divdata1").innerText = data.name
        document.getElementById("divdata2").innerText = data.roll


    }
    catch (error) {
        console.log(error)
    }
}