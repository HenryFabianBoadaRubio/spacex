
export const getCompanyFetch = async () => {
    let res = await fetch("https://api.spacexdata.com/v4/company");
    let data = await res.json();
    return data;
}


export const informationOfCompany = async (Company) =>{

    let centerbottom = document.querySelector("#sucess_rate2")
    centerbottom.innerHTML = /*html*/ `
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
            <td><b>founder: </b>${Company.founder}</td>
            
            </tr>
            <tr>
            <td><b>founded: </b>${Company.founded}</td>
            </tr>
            <tr>
            <td><b>employees: </b>${Company.employees}</td>
            </tr>

            
        </tbody>
    </table>


`
let centerbottomleft = document.querySelector("#sucess_rate")
centerbottomleft.innerHTML = /*html*/ `
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
    <td><b>vehicles: </b>${Company.vehicles}</td>

    </tr>
    <tr>
    <td><b>ceo: </b>${Company.ceo}</td>

    </tr>
    <tr>
    <td><b>coo: </b>${Company.coo}</td>

    </tr>
        
    </tbody>
</table>
`
let centerbottomright = document.querySelector("#information__table__1")
centerbottomright.innerHTML = /*html*/ `
    <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #0d1117;
        color: #c9d1d9;
        margin: 0;
        padding: 0;
    }
    table {
       
    height: 10rem;
        
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
        <td><b>flickr: </b>${Company.links.flickr}</td>

        </tr>
        <tr>
        <td><b>twitter: </b>${Company.links.twitter}</td>

        </tr>
        <tr>
        <td><b>elon_twitter: </b>${Company.links.elon_twitter}</td>

        </tr>
    </tbody>
</table>


`
let centertopright = document.querySelector("#information__table__2")
centertopright.innerHTML = /*html*/ `
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
        <td><b>address: </b>${Company.headquarters.address}</td>
        
        </tr>
        <tr>
        <td><b>city: </b>${Company.headquarters.city}</td>

        </tr>
        <tr>
        <td><b>website: </b>${Company.links.website}</td>

        </tr>
        
    </tbody>
</table>
`
let centerimgLeftR= document.querySelector("#section__image")
            centerimgLeftR.innerHTML = /*html*/ `
        
        
            <img id="galax" style="height: 210px; position: absolute; margin-left: 2rem;" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXZqZGtoa3Q0a2hseGVha3A4Y3dsdjlveTd2cmVja3ptdmF5bHA5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TEuthoLlrKREs/giphy.gif" alt="">
           
        
            `
            let centerimgLeftRr= document.querySelector("#description__item")
            centerimgLeftRr.innerHTML = /*html*/ `
        
        
            <img id="galax" style="height: 210px; position: absolute; margin-left: 2rem;" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTc3eXVvY3A3Yjl6YjRqMTE4aGN4aDd4cW5tdmJzMmVob2R1d3h6diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yDxEtkDK1cUh5l5FQK/giphy.gif" alt="">
           
        
            `
            let centerimgLeftRrr= document.querySelector("#information__2")
            centerimgLeftRrr.innerHTML = /*html*/ `
        
        
            <img id="galax" style="height: 160px; position: absolute; margin-right: 5rem;" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTVtYnY4Y3QzaHg1ejQ5OHJzZ2V3bnYydG5pdzhpajJmd3NoZmFieSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2bvoZ9luTg2kM/giphy.gif" alt="">
           
        
            `
}

