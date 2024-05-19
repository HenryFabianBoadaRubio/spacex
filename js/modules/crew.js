export const getAllCrew = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCrewId = async (crewId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/crew/${crewId}`)
    let data = await res.json();
    return data;
}

export const informationOfCrew = async (Crew) =>{

    let centerCrewLeft = document.querySelector("#sucess_rate")
    centerCrewLeft.innerHTML = /*html*/ `
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
            <td><b>agency:</b>${Crew.agency}</td>
            
            </tr>
            <tr>
            <td><b>status:</b>${Crew.status}</td>
            
            </tr>
            <tr>
            <td><b>id:</b>${Crew.id}</td>
            </tr>
            
        </tbody>
    </table>


`
let centerCrewright = document.querySelector("#sucess_rate2")
centerCrewright.innerHTML = /*html*/ `
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


            <img style="height: 350px; position: absolute" src="${Crew.image}" referrerpolicy="no-referrer" alt="">`
   

}