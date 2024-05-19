export const getAllPayloads = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/payloads/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllPayloadsId = async (payloadsId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/payloads/${payloadsId}`)
    let data = await res.json();
    return data;
}
export const informationOfPayloads = async (payloads) =>{

    let centerPayloadsLeft = document.querySelector("#description__item")
    centerPayloadsLeft.innerHTML = /*html*/ `
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
            <td><b>type: </b>${payloads.type}</td>
            
            </tr>
            <tr>
            <td><b>launch: </b>${payloads.launch}</td>

            </tr>
            <tr>
            <td><b>customers: </b>${payloads.customers}</td>
            
            </tr>
            <tr>
            <td><b>nationalities: </b>${payloads.nationalities}</td>

            </tr>
        </tbody>
    </table>


`
let centerPayloadsRight = document.querySelector("#information__2")
centerPayloadsRight.innerHTML = /*html*/ `
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
            <td><b>manufacturers: </b>${payloads.manufacturers}</td>
            
            </tr>
            <tr>
            <td><b>orbit: </b>${payloads.orbit}</td>

            </tr>
            <tr>
            <td><b>reference_system: </b>${payloads.reference_system}</td>
            
            </tr>
            <tr>
            <td><b>regime: </b>${payloads.regime}</td>

            </tr>
            <tr>
            <td><b>id: </b>${payloads.id}</td>

            </tr>
        </tbody>
    </table>
`
        let centerimgLeftR= document.querySelector("#sucess_rate2")
            centerimgLeftR.innerHTML = /*html*/ `
        
        
            <img id="galax" style="height: 520px; position: absolute; margin-left: 0rem;" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG9wbzJpNmNkY2R3cTgxaGFnaTN6ZjQ1YnpnMXc3ZzVnMXR4cjRsciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gTviM5HfTDKapOJ8eL/giphy.gif" alt="">
           
        
            `
            let centerimgLefR= document.querySelector("#sucess_rate")
            centerimgLefR.innerHTML = /*html*/ `
        
        
            <img id="galax" style="height: 420px; position: absolute; margin-left: 0rem;" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW13cmtxbHRzY2w0c3BqemdxZWNld3kxM3pteTh0Yzgyb3VtMHAxYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lfEPA0PSCDAHWe8T81/giphy.gif" alt="">
           
        
            `
}