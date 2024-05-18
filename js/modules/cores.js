export const getAllCores = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getAllCoresId = async (coresId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/cores/${coresId}`)
    let data = await res.json();
    return data;
}


export const informationOfCores = async (Cores) =>{

    let centerCapculesLeft = document.querySelector("#information__table__1")
    centerCapculesLeft.innerHTML = /*html*/ `
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
            <td><b>serial: </b>${Cores.serial}</td>
            
            </tr>
            <tr>
            <td><b>Id: </b>${Cores.id}</td>

            </tr>
        </tbody>
    </table>


`

    let rightBottom = document.querySelector("#information__table__2")
    
    rightBottom.innerHTML = /*html*/ `
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
                <td><b>last_update: </b>${Cores.last_update}</td>

            </tr>
            <tr>
            <td>
            <b>launches: </b>${Cores.launches}</td>

            </tr>
            <tr>
            <td>
            <b>status: </b>${Cores.status}</td>
            </tr>
        </tbody>
    </table>

   
    `
    let leftB = document.querySelector("#sucess_rate")
    
    leftB.innerHTML = /*html*/ `
    <style >
        #astro{
            overflow: hidden;
            
        }
        #nave{

        }
    </style>
    
    <img id="astro" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3Vkb2YyN2psZW96dnR2NzhvaXNneXNkMjVodmwybWRzcjh4dG1zcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cEYFeE4wJ6jdDVBiiIM/giphy.gif" alt="">
    
    `

    let rightB = document.querySelector("#sucess_rate2")
    
    rightB.innerHTML = /*html*/ `
    <style >
        #nave{
            width: 20rem;
            height: 13rem;
             
        
        }
    </style>
    
    <img id="nave" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXJzcTNpZWJxbGl1b3h4Y3JtMm5iMzdtZngxN2JuM21rZ2I3NzljcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5yaou1jFxTV6M/giphy.gif" alt="">
    `
}