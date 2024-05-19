export const getAllLaunches = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/launches/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllLaunchesId = async (launchesId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/launches/${launchesId}`)
    let data = await res.json();
    return data;
}

export const informationOfLaunches = async (Launches) =>{

    let centerLaunchesLeft = document.querySelector("#information__table__1")
    centerLaunchesLeft.innerHTML = /*html*/ `
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0d1117;
            color: #c9d1d9;
            margin: 0;
            padding: 0;
        }
        table { 
             margin-left: 3rem;

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
            <td><b>launchpad: </b>${Launches.launchpad}</td>
            
            </tr>
            <tr>
            <td><b>flight_number: </b>${Launches.flight_number}</td>

            </tr>
            <tr>
            <td><b>date_utc: </b>${Launches.date_utc}</td>

            </tr>
            <tr>
            <td><b>date_unix: </b>${Launches.date_unix}</td>

            </tr>
        </tbody>
    </table>


`
let centerLaunchesright = document.querySelector("#information__table__2")
centerLaunchesright.innerHTML = /*html*/ `
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
            <td><b>date_local: </b>${Launches.date_local}</td>
            
            </tr>
            <tr>
            <td><b>cores: </b>${Launches.cores.core}</td>

            </tr>
            <tr>
            <td><b>failures: </b>${Launches.failures.time}</td>

            </tr>
            <tr>
            <td><b>id: </b>${Launches.id}</td>

            </tr>
        </tbody>
    </table>
    `
    }