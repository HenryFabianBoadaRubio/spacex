export const getAllHistory = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/history/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllHistoryId = async (historyId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/history/${historyId}`)
    let data = await res.json();
    return data;
}
export const informationOfHistory = async (History) =>{

    let centerHistoryLeft = document.querySelector("#description__item")
    centerHistoryLeft.innerHTML = /*html*/ `
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
            <td><b>event_date_utc: </b>${History.event_date_utc}</td>
            
            </tr>
            <tr>
            <td><b>event_date_unix: </b>${History.event_date_unix}</td>

            </tr>
            <tr>
            <td><b>details: </b>${History.details}</td>

            </tr>
            <tr>
            <td><b>id: </b>${History.id}</td>

            </tr>   
        </tbody>
    </table>


`
    }