
export const getRoadsterFetch = async () => {
    let res = await fetch("https://api.spacexdata.com/v4/roadster");
    let data = await res.json();
    return data;
}

export const informationOfRoadster = async (roadster) =>{

    let centerbottomR = document.querySelector("#description__item")
    centerbottomR.innerHTML = /*html*/ `
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
            <td><b>launch_date_utc: </b>${roadster.launch_date_utc}</td>
            
            </tr>
            <tr>
            <td><b>launch_date_unix: </b>${roadster.launch_date_unix}</td>
            </tr>
            <tr>
            <td><b>launch_mass_kg: </b>${roadster.launch_mass_kg}</td>
            </tr>
            <tr>
            <td><b>norad_id: </b>${roadster.norad_id}</td>
            
            </tr>
            <tr>
            <td><b>orbit_type: </b>${roadster.orbit_type}</td>
            </tr>
            <tr>
            <td><b>apoapsis_au: </b>${roadster.apoapsis_au}</td>
            </tr>
            <td><b>periapsis_au: </b>${roadster.periapsis_au}</td>
            </tr>
            <tr>
            <td><b>semi_major_axis_au: </b>${roadster.semi_major_axis_au}</td>
            </tr>
            <tr>
            <td><b>speed_kph: </b>${roadster.speed_kph}</td>
            
            </tr>
            <tr>
            <td><b>earth_distance_km: </b>${roadster.earth_distance_km}</td>
            </tr>
            <tr>
            <td><b>mars_distance_km: </b>${roadster.mars_distance_km}</td>
            </tr>
            
        </tbody>
    </table>


`
    let centerbottomrightR = document.querySelector("#sucess_rate2")
    centerbottomrightR.innerHTML = /*html*/ `


    <img style="height: 350px; position: absolute; margin-left: 20rem; " src="${roadster.flickr_images[3]}" referrerpolicy="no-referrer" alt="">

    `
    let centerbottomleftR = document.querySelector("#information__table__1")
    centerbottomleftR.innerHTML = /*html*/ `
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
    <td><b>wikipedia: </b>${roadster.wikipedia}</td>

    </tr>
    <tr>
    <td><b>video: </b>${roadster.video}</td>

    </tr>
    <tr>
    <td><b>id: </b>${roadster.id}</td>

    </tr>
        
    </tbody>
</table>
`
    }