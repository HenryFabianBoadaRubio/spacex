import { 
    load,
    paginationCapsules,
    paginationRockets,
    paginationCores,
    paginationCrew,
    paginationDragons,
    paginationHistory,
    paginationLandspads,
    getCompany,
    paginationLaunches,
    paginationLaunchpads,
    paginationPayloads,
    getRoadster
} from "./modulesComponents/pagination.js";

let footerSelect = async(e, id)=>{
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}


let rocket = document.querySelector("#rocket")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
} )

let capsules = document.querySelector("#capsules")
capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})

//comienzo capsulas nuevas 

let company = document.querySelector("#company")
company.addEventListener("click", async(e)=>{
    await footerSelect(e, company)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    await getCompany()
})

let cores = document.querySelector("#cores")
cores.addEventListener("click", async(e)=>{
    await footerSelect(e, cores)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCores())
})
let crew = document.querySelector("#crew")
crew.addEventListener("click", async(e)=>{
    await footerSelect(e, crew)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCrew())
})
let dragons = document.querySelector("#dragons")
dragons.addEventListener("click", async(e)=>{
    await footerSelect(e, dragons)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationDragons())
})
let history = document.querySelector("#history")
history.addEventListener("click", async(e)=>{
    await footerSelect(e, history)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationHistory())
})
let landspads = document.querySelector("#landspads")
landspads.addEventListener("click", async(e)=>{
    await footerSelect(e, landspads)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLandspads())
})
let launches = document.querySelector("#launches")
launches.addEventListener("click", async(e)=>{
    await footerSelect(e, launches)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunches())
})
let launchpads = document.querySelector("#launchpads")
launchpads.addEventListener("click", async(e)=>{
    await footerSelect(e, launchpads)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunchpads())
})


let Payloads = document.querySelector("#payloads")
Payloads.addEventListener("click", async(e)=>{
    await footerSelect(e, Payloads)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationPayloads())
})
let roadster = document.querySelector("#roadster")
roadster.addEventListener("click", async(e)=>{
    await footerSelect(e, roadster)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    await getRoadster()
})
rocket.click();
