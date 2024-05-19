export const getAllCapsules = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}
export const getAllCapsulesId = async (capsulesId)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${capsulesId}`)
    let data = await res.json();
    return data;
}

export const informationOfTheCapsules = async (Capsule) =>{

    let centerCapculesLeft = document.querySelector("#sucess_rate")
   
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
                <td><b>Status: </b>${Capsule.status}</td>

            </tr>
            <tr>
            <td><b>Type: </b>${Capsule.type}</td>


            </tr>
            <tr>
            <td><b>Id: </b>${Capsule.id}</td>

            </tr>
        </tbody>
    </table>


`

    let left = document.querySelector("#sucess_rate2")
    console.log("hola");
    left.innerHTML = /*html*/ `
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
                <td><b>last_update: </b>${Capsule.last_update}</td>

            </tr>
            <tr>
            <td>
            <b>launches: </b>${Capsule.launches}</td>

            </tr>
            <tr>
            <td>
            <b>last_update: </b>${Capsule.last_update}</td>
            </tr>
        </tbody>
    </table>


    `
    let centerimgLeft = document.querySelector("#description__item")
    centerimgLeft.innerHTML = /*html*/ `


    <img id="galax" style="height: 350px; position: absolute; margin-left: 2rem;" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRqZmMyc2FsMmhseG53Y3R5NzZvMGZhOWdnZXliaHdueHI5dGI5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1Qkd3km5eM6Yw/giphy.webp" alt="">
   

    `
    let centerimgLeftR = document.querySelector("#section__image")
    centerimgLeftR.innerHTML = /*html*/ `


    <img id="galax" style="height: 250px; position: absolute; margin-left: 7rem;" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM212cTB6d3M1amd1M2NoM3d0cHNsZzN6ZWhod2picGZsNXdrMGc0ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QLcCBdBemDIqpbK6jA/giphy.gif" alt="">
   

    `
    let centerimgLeftRR= document.querySelector("#information__2")
    centerimgLeftRR.innerHTML = /*html*/ `


    <img id="galax" style="height: 400px; position: absolute; margin-right: 1rem;" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWt1aGxxeHgxZTZqYTRrdW4yMW10dnlmN2Nod3kzZ2R1Njd2cXNvcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b85mPT4Usz7fq/giphy.gif" alt="">
   

    `

}