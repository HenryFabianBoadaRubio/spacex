export const getAllStarlink = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllStarlinkId = async (starlinkId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/starlink/${starlinkId}`)
    let data = await res.json();
    return data;
}
export const informationOfStarlink = async (starlink) =>{

    let centerStarlinkLeft = document.querySelector("#description__item")
    centerStarlinkLeft.innerHTML = /*html*/ `
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
            <td><b>spaceTrack: </b>${starlink.spaceTrack.CCSDS_OMM_VERS}</td>
            
            </tr>
            <tr>
            <td><b>launch: </b>${starlink.launch}</td>
            
            </tr>
            <tr>
            <td><b>version: </b>${starlink.version}</td>
            
            </tr>
            <tr>
            <td><b>DECAY_DATE: </b>${starlink.spaceTrack.DECAY_DATE}</td>
            
            </tr>
            <tr>
            <td><b>COUNTRY_CODE: </b>${starlink.spaceTrack.COUNTRY_CODE}</td>
            
            </tr>
            <tr>
            <td><b>FILE: </b>${starlink.spaceTrack.FILE}</td>
            
            </tr>
            <tr>
            <td><b>MEAN_ANOMALY: </b>${starlink.spaceTrack.MEAN_ANOMALY}</td>
            
            </tr>
            <tr>
            <td><b>id: </b>${starlink.id}</td>
            
            </tr>

          
        </tbody>
    </table>


`
let centerStarlinkRight = document.querySelector("#information__2")
centerStarlinkRight.innerHTML = /*html*/ `
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
            <td><b>CREATION_DATE: </b>${starlink.spaceTrack.CREATION_DATE}</td>
            
            </tr>
            <tr>
            <td><b>ORIGINATOR: </b>${starlink.spaceTrack.ORIGINATOR}</td>
            
            </tr>
            <tr>
            <td><b>OBJECT_ID: </b>${starlink.spaceTrack.OBJECT_ID}</td>
            
            </tr>
            <tr>
            <td><b>REF_FRAME: </b>${starlink.spaceTrack.REF_FRAME}</td>
            
            </tr>
            <tr>
            <td><b>TIME_SYSTEM: </b>${starlink.spaceTrack.TIME_SYSTEM}</td>
            
            </tr>
            <tr>
            <td><b>EPOCH: </b>${starlink.spaceTrack.EPOCH}</td>
            
            </tr>
            <tr>
            <td><b>INCLINATION: </b>${starlink.spaceTrack.INCLINATION}</td>
            
            </tr>
            <tr>
            <td><b>ECCENTRICITY: </b>${starlink.spaceTrack.ECCENTRICITY}</td>
            
            </tr>

          
        </tbody>
    </table>
    `
    }