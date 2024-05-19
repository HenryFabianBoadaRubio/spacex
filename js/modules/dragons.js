export const getAllDragons = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllDragonsId = async (dragonsId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/dragons/${dragonsId}`)
    let data = await res.json();
    return data;
}


export const informationOfDragons = async (Dragons) =>{

    let izqDragonsLeft = document.querySelector("#description__item")
    izqDragonsLeft.innerHTML = /*html*/ `
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
            <td><b>material: </b>${Dragons.heat_shield.material}</td>
            
            </tr>
            <tr>
            <td><b>size_meters: </b>${Dragons.heat_shield.size_meters}</td>

            </tr>
            <tr>
            <td><b>temp_degrees: </b>${Dragons.heat_shield.temp_degrees}</td>

            </tr>
            <tr>
            <td><b>dev_partner: </b>${Dragons.heat_shield.dev_partner}</td>

            </tr>
        </tbody>
    </table>


` 
let centerDragonsLeft = document.querySelector("#information__2")
centerDragonsLeft.innerHTML = /*html*/ `
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
        <td><b>kg: </b>${Dragons.launch_payload_mass.kg}</td>
        
        </tr>
        <tr>
        <td><b>lb: </b>${Dragons.launch_payload_mass.lb}</td>

        </tr>
        <tr>
        <td><b>cubic_meters: </b>${Dragons.launch_payload_vol.cubic_meters}</td>
        
        </tr>
        <tr>
        <td><b>cubic_meters: </b>${Dragons.launch_payload_vol.cubic_meters}</td>

        </tr>
    </tbody>
</table>
`
let centerDragonsright = document.querySelector("#sucess_rate2")
centerDragonsright.innerHTML = /*html*/ `
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


            <img style="height: 350px; position: absolute" src="${Dragons.flickr_images[0]}" referrerpolicy="no-referrer" alt="">
    `
    let centerDragonsleft = document.querySelector("#sucess_rate")
    centerDragonsleft.innerHTML = /*html*/ `
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


            <img style="height: 350px; position: absolute; left:7.5rem" src="${Dragons.flickr_images[2]}" referrerpolicy="no-referrer" alt="">`
}