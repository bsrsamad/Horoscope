let formc = document.getElementById("form");

formc.addEventListener("submit",(e) => {
    e.preventDefault();
    sam()
});
// areis
let arimonth1 = 'MARCH'; let ariday1 = 21; let arimonth2 = "APRIL"; let ariday2 = 19;

// taurus
 let tarmo1 = 'APRIL'; let tarda1 = 20; let tarmo2 = "MAY"; let tarda2 = 20;

//gemini
let gemo1 = 'MAY'; let geda1= 21; let gemo2 = 'JUNE'; let geda2 = 20;

// cancer
let camo1 = 'JUNE'; let cada1 = 21; let camo2 = 'JULY'; let cada2 = 22;

// leo
let leom1 = 'JULY'; let leod1 = 32; let leom2 = "AUGUST"; let loed2 = 22;

// vigor
let vigorm1 = 'AUGUST'; let vigord1 = 23; let vigorm2 = 'SEPTEMBER'; let vigord2 = 22;

// libra
let libram1 = 'SEPTEMBER'; let librad1 = 23;let libram2 = "OCTOBER"; let librad2 =22;

// scopio
let scorpiom1 = 'OCTOBER'; let scorpiod1 = 23; let scorpiom2 = "NOVEMBER"; let scorpiod2 = 21;

// segittaruis
let segm1 = 'NOVEMBER'; let segd1 = 22; let segm2 = "DECEMBER"; let segd2 = 21;

// capricon
let capm1 = 'DECEMBER'; let capd1 = 22; let capm2 = "JANUARY"; let capd2 = 19;

// aquaruis
let aquam1 = 'JANUARY'; let aquad1 = 20; let aquam2 = "FEBUARY"; let aquad2 = 18;

// pisces
let pism1 = 'FEBUARY'; let pisd1 = 18; let pism2 = "MARCH"; let pisd2 = 20;



function sam(){
let month = document.getElementById("option").value
let day = document.getElementById("sel").value
let  result = " ";

let all ={
    month,
    day
}


console.log(all);

if ((arimonth1 == month && ariday1 <= day ) || (arimonth2 == month && ariday2 >= day)){
console.log("u ar an aries" )
 result =  "u ar an aries"
}
else if ((tarmo1 == month && tarda1 <= day ) || (tarmo2 == month && tarda2 >= day)){
    console.log("u ar an taurus")
    result =  "u ar an taurus"
}
else if (( gemo1 == month && geda1 <= day ) || ( gemo2 == month && geda2 >= day)){
    console.log("u ar an gemini")
    result =  "u ar an gemini"
}
else if ((camo1 == month && cada1 <= day ) || (camo1 == month && cada1 >= day)){
    console.log("u ar an cancer")
    result =  "u ar an cancer"
}
else if ((leom1 == month && leod1 <= day ) || (leom2 == month && leod2 >= day)){
    console.log("u ar an leo")
    result =  "u ar an leo"
}
else if ((vigorm1 == month && vigord1 <= day ) || (vigorm2 == month && vigord2 >= day)){
    console.log("u ar an vigor")
    result =  "u ar an vigor"
}
else if ((libram1 == month && librad1 <= day ) || (libram2 == month && librad2 >= day)){
    console.log("u ar an libra")
    result =  "u ar an libra"
}
else if ((scorpiom1 == month && scorpiod1 <= day ) || (scorpiom2 == month && scorpiod2 >= day)){
    console.log("u ar an scorpio")
    result =  "u ar an scorpio"
}

else if ((segm1 == month && segd1 <= day ) || (segm2 == month && segd2 >= day)){
    console.log("u ar an sagittarius")
     result =  "u ar an sagittarius"
}

else if ((capm1 == month && capd1 <= day ) || (capm2 == month && capd2 >= day)){
    console.log("u ar an capricon")
    result =  "u ar an capricon"
}

else if ((aquam1 == month && aquad1 <= day ) || (aquam2 == month && aquad2 >= day)){
    console.log("u ar an aquarius")
    result =  "u ar an aquarius"
}

else if ((pism1 == month && pisd1 <= day ) || (pism2 == month && pisd2 >= day)){
    console.log("u ar an pisces")
    result =  "u ar an pisces"
}
else{
    console.log("does not exist")
}

  document.getElementById('res').innerHTML=result
// let tr = document.createElement('tr');
// tdtask.textContent = all.task;
// tr.appendChild(tdtask)
//     tbody.appendChild(tr);

};







