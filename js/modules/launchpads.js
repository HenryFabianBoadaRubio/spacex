export const getAllLaunchpads = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/launchpads/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllLaunchpadsId = async (launchpadsId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/launchpads/${launchpadsId}`)
    let data = await res.json();
    return data;
}
export const informationOfLaunchpads = async (launchpads) =>{

    let centerLaunchpadsLeft = document.querySelector("#information__table__1")
    centerLaunchpadsLeft.innerHTML = /*html*/ `
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
            <td><b>full_name: </b>${launchpads.full_name}</td>
            
            </tr>
            <tr>
            <td><b>locality: </b>${launchpads.locality}</td>

            </tr>
            <tr>
            <td><b>region: </b>${launchpads.region}</td>
            
            </tr>
            <tr>
            <td><b>latitude: </b>${launchpads.latitude}</td>

            </tr>
        </tbody>
    </table>


`
let centerLaunchpadsRight = document.querySelector("#information__table__2")
centerLaunchpadsRight.innerHTML = /*html*/ `
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
        <td><b>timezone: </b>${launchpads.timezone}</td>
        
        </tr>
        <tr>
        <td><b>status: </b>${launchpads.status}</td>

        </tr>
        <tr>
        <td><b>region: </b>${launchpads.region}</td>
        
        </tr>
        <tr>
        <td><b>id: </b>${launchpads.id}</td>

        </tr>
    </tbody>
</table>
`
let centerimgLeftR= document.querySelector("#section__image")
                centerimgLeftR.innerHTML = /*html*/ `
            
            
                <img id="galax" style="height: 220px; position: absolute; margin-right: 10rem;" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXpxZXQ5OWY5ajVlMjBtM2h4M2l2bHA2MG45MGVqeHA0OWF1MWxkbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Mx3kd02NuLIY/giphy.gif" alt="">
            
            
                `
                let centerLaunchpadsRightt = document.querySelector("#description__item")
                centerLaunchpadsRightt.innerHTML = /*html*/ `
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
        <td><b>details: </b>${launchpads.details}</td>
        
        </tr>
        <tr>
        <td><b>rockets: </b>${launchpads.rockets}</td>

        </tr>
      
    </tbody>
</table>
`
let centerimgLeftRr= document.querySelector("#sucess_rate2")
centerimgLeftRr.innerHTML = /*html*/ `

<img style="height: 220px; position: absolute; margin-right:3rem" src="${launchpads.images.large[0]}" referrerpolicy="no-referrer" alt="">
`
            
}