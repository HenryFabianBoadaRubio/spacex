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
        </tbody>
    </table>


`}