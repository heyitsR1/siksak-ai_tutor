
const url = 'http://localhost:8000/query'
export default async function SendReqComponent (message: any = "hi") { 

    const response = await fetch (url,{ 
        method: 'POST', 
        headers: {"Content-type": "application/json"},
        body: JSON.stringify( {message: message})
    })

}