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
let centerimgLeftR= document.querySelector("#section__image")
            centerimgLeftR.innerHTML = /*html*/ `
        
        
            <img id="galax" style="height: 250px; position: absolute; margin-left: 2rem;" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXU3NG50M2dkMmFoMWQwOWYxOXoyenN4cjdsNXM2MWZ3Z29udjRmaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Wr2wbzEV0T9ZFPXja/giphy.gif" alt="">
           
        
            `
            let centerimgLeftRr= document.querySelector("#sucess_rate2")
            centerimgLeftRr.innerHTML = /*html*/ `
        
        
            <img id="galax" style="height: 450px; position: absolute; margin-left: 20rem;" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzNjaXJ0MWhlaWt3MnFxM2c5cHN4NnYwaXE5OWxmdjN1ZTc4NjZtOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7b3mdJsdGrzF6dW/giphy.gif" alt="">
           
        
            `
            let centerimgLeftRrr= document.querySelector("#sucess_rate")
            centerimgLeftRrr.innerHTML = /*html*/ `
        
        
            <img id="galax" style="height: 350px; position: absolute; margin-left: 1rem;" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZzMXpra3JqNzl3ZWFvbXBkaWE4d3JxNmJqcmVxbXBvbGVjMHY2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2EKMDrFI1li5M6ZJrT/giphy.gif" alt="">
           
        
            `
    }