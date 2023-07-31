// Chaining 
document.getElementById("btn").addEventListener("click", makerequest);


// Async and Await | Single Data
async function makerequest() {
    try {
        console.log("Button Clicked")
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')

        if (!res.ok) {
            throw Error(res.statusText)
        }
        // Means ye tb tk start nhi hoga jb tk upr ka saara kaam complete nhi hojata 
        const data = await res.json()

        console.log("Data", data)
        console.log("ID", data.id)
        console.log("Title", data.title)
        console.log("Body", data.body)
    }
    catch (error) {
        console.log(error)
    }
}


// Async and Await | Single Data | Showing Data in Browser
async function makerequest() {
    try {
        console.log("Button Clicked")
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        if (!res.ok) {
            throw Error(res.statusText)
        }
        const data = await res.json()
        console.log("Data", data)
        document.getElementById("pid").innerText = data.id
        document.getElementById("title").innerText = data.title
        document.getElementById("body").innerText = data.body


    } catch (error) {
        console.log(error)
    }
}