export const rocketsmodel = (rocket) => {
    let information = [];
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("description__container__box1")
    let divInformationImg = document.createElement("img");
    if (rocket.id== "5e9d0d95eda69955f709d1eb") {
        divInformationImg.src = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Falcon_1_Flight_4_liftoff.jpg";
    } else{
        divInformationImg.src = rocket.flickr_images[1]
    }
    divInformationContainer.append(divInformationImg)
    
    
    let box1__container = document.createElement("div");
    box1__container.classList.add("box1__container")
    let nameRokectTitle= document.createElement("h1");
    nameRokectTitle.textContent = rocket.name;
    

    let pfirst = document.createElement("p");
    pfirst.classList.add("pfirst");
    pfirst.textContent = `First flight : ${rocket.first_flight}`;

    let psecond = document.createElement("p");
    psecond.classList.add("psecond");
    psecond.textContent = `Description : ${rocket.description}`;

    let rocketId = document.createElement("small");
    rocketId.classList.add("rocket_id");
    rocketId.textContent = `ID : ${rocket.id}`;
    
    
    
    
    
    
    box1__container.append(nameRokectTitle);
    box1__container.append(pfirst)
    box1__container.append(psecond)
    box1__container.append(rocketId)

    information.push(divInformationContainer)
    information.push(box1__container)


    return information
}


{/* <div class="description__container__box1">
    <img src="https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg">
</div>
<div class="box1__container">
    <h1 >Falcon 9</h1>
    <p class ="pfirst">First flight : 2010-06-04</p>
    <p class ="psecond">Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.</p>
    <small class = "rocket_id">5e9d0d95eda69973a809d1ec</small>
</div> */}