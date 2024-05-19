export const getAllShips = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllShipsId = async (shipsId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/ships/${shipsId}`)
    let data = await res.json();
    return data;
}
export const informationOfShips = async (Ships) =>{

    let centerShipsLeft = document.querySelector("#description__item")
    centerShipsLeft.innerHTML = /*html*/ `
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
            <td><b>legacy_id: </b>${Ships.legacy_id}</td>
            
            </tr>
            <tr>
            <td><b>type: </b>${Ships.type}</td>

            </tr>
            <tr>
            <td><b>imo: </b>${Ships.imo}</td>
            
            </tr>
            <tr>
            <td><b>home_port: </b>${Ships.home_port}</td>

            </tr>
            <tr>
            <td><b>year_built: </b>${Ships.year_built}</td>
            
            </tr>
            <tr>
            <td><b>mass_kg: </b>${Ships.mass_kg}</td>

            </tr>
           
            <tr>
            <td><b>id: </b>${Ships.id}</td>

            </tr>
        </tbody>
    </table>


`
    let centerShipsRight = document.querySelector("#sucess_rate2")
    centerShipsRight.innerHTML = /*html*/ `

    <img style="height: 300px; position: absolute; margin-left: 4rem;" src="${Ships.image}" referrerpolicy="no-referrer" alt="">

`
 }