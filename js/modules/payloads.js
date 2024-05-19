export const getAllPayloads = async (page,limit)=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/payloads/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllPayloadsId = async (payloadsId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/payloads/${payloadsId}`)
    let data = await res.json();
    return data;
}
export const informationOfPayloads = async (payloads) =>{

    let centerPayloadsLeft = document.querySelector("#description__item")
    centerPayloadsLeft.innerHTML = /*html*/ `
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0d1117;
            color: #c9d1d9;
            margin: 0;
            padding: 0;
        }
        table {
            margin-left: 2rem;

            width: 80%;
            border-collapse: collapse;
            border: 2px solid #1f6feb;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #1f6feb;
        }
        th {
            background-color: #0d1117;
            color: #58a6ff;
        }
        tr:nth-child(even) {
            background-color: #161b22;
        }
        tr:nth-child(odd) {
            background-color: #0d1117;
        }
    </style>

    <table>
        <tbody>
            <tr>
            <td><b>type: </b>${payloads.type}</td>
            
            </tr>
            <tr>
            <td><b>launch: </b>${payloads.launch}</td>

            </tr>
            <tr>
            <td><b>customers: </b>${payloads.customers}</td>
            
            </tr>
            <tr>
            <td><b>nationalities: </b>${payloads.nationalities}</td>

            </tr>
        </tbody>
    </table>


`
let centerPayloadsRight = document.querySelector("#information__2")
centerPayloadsRight.innerHTML = /*html*/ `
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0d1117;
            color: #c9d1d9;
            margin: 0;
            padding: 0;
        }
        table {
            width: 80%;
            border-collapse: collapse;
            border: 2px solid #1f6feb;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #1f6feb;
        }
        th {
            background-color: #0d1117;
            color: #58a6ff;
        }
        tr:nth-child(even) {
            background-color: #161b22;
        }
        tr:nth-child(odd) {
            background-color: #0d1117;
        }
    </style>

    <table>
        <tbody>
            <tr>
            <td><b>manufacturers: </b>${payloads.manufacturers}</td>
            
            </tr>
            <tr>
            <td><b>orbit: </b>${payloads.orbit}</td>

            </tr>
            <tr>
            <td><b>reference_system: </b>${payloads.reference_system}</td>
            
            </tr>
            <tr>
            <td><b>regime: </b>${payloads.regime}</td>

            </tr>
            <tr>
            <td><b>id: </b>${payloads.id}</td>

            </tr>
        </tbody>
    </table>
`
}