export const getAllCrew = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCrewId = async (crewId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/crew/${crewId}`)
    let data = await res.json();
    return data;
}

export const informationOfCrew = async (Crew) =>{

    let centerCrewLeft = document.querySelector("#sucess_rate")
    centerCrewLeft.innerHTML = /*html*/ `
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
            <td><b>agency:</b>${Crew.agency}</td>
            
            </tr>
            <tr>
            <td><b>status:</b>${Crew.status}</td>
            
            </tr>
            <tr>
            <td><b>id:</b>${Crew.id}</td>
            </tr>
            
        </tbody>
    </table>


`
let centerCrewright = document.querySelector("#sucess_rate2")
centerCrewright.innerHTML = /*html*/ `
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


            <img style="height: 350px; position: absolute" src="${Crew.image}" referrerpolicy="no-referrer" alt="">`
   

            let centerimgLeftRR= document.querySelector("#information__2")
            centerimgLeftRR.innerHTML = /*html*/ `
        
        
            <img id="galax" style="height: 400px; position: absolute; margin-right: 1rem;" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczl3ZndpMjdobHltamU3ZzN2cmlsbzRzaDZ2ZnM1amJ2dThianM1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fXnNLh2lfEkloAthz5/giphy.gif" alt="">
           
        
            `
                let centerimgLeftR= document.querySelector("#section__image")
                centerimgLeftR.innerHTML = /*html*/ `
            
            
                <img id="galax" style="height: 25   0px; position: absolute; margin-right: 1rem;" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXVlY3I1ZXFxc3YzZzUzMjhucTJueTRzazJ1empsbzI4cHRhMHdmMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2cHnZnfAVaNB5LFqZN/giphy.gif" alt="">
            
            
                `
}