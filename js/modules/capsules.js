export const getAllCapsules = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}
export const getAllCapsulesId = async (capsulesId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${capsulesId}`)
    let data = await res.json();
    return data;
}

export const informationOfTheCapsules = async (Capsule) =>{

    let centerCapculesLeft = document.querySelector("#sucess_rate")
    console.log("hola");
    centerCapculesLeft.innerHTML = /*html*/ `
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
                <td><b>Status: </b>${Capsule.status}</td>

            </tr>
            <tr>
            <td><b>Type: </b>${Capsule.type}</td>


            </tr>
            <tr>
            <td><b>Id: </b>${Capsule.id}</td>



            </tr>
        </tbody>
    </table>


`

    let left = document.querySelector("#sucess_rate2")
    console.log("hola");
    left.innerHTML = /*html*/ `
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
                <td><b>last_update: </b>${Capsule.last_update}</td>

            </tr>
            <tr>
            <td>
            <b>launches: </b>${Capsule.launches}</td>

            </tr>
            <tr>
            <td>
            <b>last_update: </b>${Capsule.last_update}</td>
            </tr>
        </tbody>
    </table>


    `

}