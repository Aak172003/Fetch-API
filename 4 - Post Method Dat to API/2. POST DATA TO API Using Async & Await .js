
// Post means data input in frontend and , save into Backend
document.getElementById("btn").addEventListener("click", postData);

// Async and Await
async function postData() {
    try {
        console.log("Button Clicked")

        // Creating an Own Input Object Data 
        const myInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '{"name":"Rahul", "job":"Android App Dev"}'
        }


        // Here myInit is a object jisko hum pss krna chahte hai , 
        // ek naya apna input
        const res = await fetch('https://reqres.in/api/users', myInit)


        if (!res.ok) {
            throw Error(res.statusText)
        }

        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}