
// Post means data input in frontend and , save into Backend
document.getElementById("btn").addEventListener("click", postData);

// Promise then
// setInterval(postData, 1000);

function postData() {
    console.log("Button Clicked");

    const myInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: '{"name":"Sonam", "job":"Web Dev"}'
    }

    // Here myInit is a object jisko hum pss krna chahte hai , 
    // ek naya apna input
    fetch('https://reqres.in/api/users', myInit)
        .then((res) => {
            if (!res.ok) {
                throw Error(res.statusText)
            }
            return res.json()
        }).then((data) => {
            console.log(data)
        }).catch((error) => console.log(error))
}


