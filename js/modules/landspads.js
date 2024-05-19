export const getAllLandspads = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/landpads/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllLandspadsId = async (landspadsId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/landpads/${landspadsId}`)
    let data = await res.json();
    return data;
}
export const informationOfLandspads = async (landspads) =>{

    let centerLandspadsLeft = document.querySelector("#information__table__1")
    centerLandspadsLeft.innerHTML = /*html*/ `
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0d1117;
            color: #c9d1d9;
            margin: 0;
            padding: 0;
        }
        table {
            margin-top: 2rem;

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
            <td><b>name: </b>${landspads.name}</td>
            
            </tr>
            <tr>
            <td><b>status: </b>${landspads.status}</td>

            </tr>
            <tr>
            <td><b>type: </b>${landspads.type}</td>
            
            </tr>
            <tr>
            <td><b>region: </b>${landspads.region}</td>

            </tr>
        </tbody>
    </table>


`
let centerLandspadsright = document.querySelector("#sucess_rate")
centerLandspadsright.innerHTML = /*html*/ `
        

<img style="height: 250px; position: absolute;  " src="${landspads.images.large[0]}" referrerpolicy="no-referrer" alt="">

    `
    let centerLandspadstop = document.querySelector("#information__2")
    centerLandspadstop.innerHTML = /*html*/ `
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0d1117;
            color: #c9d1d9;
            margin: 0;
            padding: 0;
        }
        table {
            margin-right: 2rem;

            width: 50%;
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
            <td><b>details: </b>${landspads.details}</td>
            
            </tr>
            <tr>
            <td><b>wikipedia: </b>${landspads.wikipedia}</td>

            </tr>
            <tr>
            <td><b>id: </b>${landspads.id}</td>
            
            </tr>
            <tr>
            <td><b>launches: </b>${landspads.launches[0]}</td>

            </tr>
            <tr>
            <td><b>latitude: </b>${landspads.latitude}</td>

            </tr>
            <tr>
            <td><b>longitude: </b>${landspads.longitude}</td>

            </tr>
        </tbody>
    </table>
    `
    }