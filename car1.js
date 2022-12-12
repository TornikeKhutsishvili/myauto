
class Car{
    constructor(manufacturer,model,category,price,engine,year,newimage){
        this.manufacturer = manufacturer
        this.model = model
        this.category = category
        this.price = price
        this.engine = engine
        this.year = year
        this.newimage = newimage
    }
}

var bottomsave = document.querySelector(".bottomsave")
var fullarr = JSON.parse(localStorage.getItem("cardizainfull")) || []

var manufacturer = document.querySelector(".manufacturer")
var model = document.querySelector(".model")
var category = document.querySelector(".category")
var price = document.querySelector(".price")
var engine = document.querySelector(".engine")
var year = document.querySelector(".year")
var body = document.querySelector("body")


var image = document.querySelector("#image");
var myimage = document.querySelector("#myimage")
var newimage = "";
image.addEventListener("change", function(){
    var reader = new FileReader();
    reader.addEventListener("load", () => {
        newimage = reader.result;
        myimage.style.backgroundImage = `url(${newimage})`
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    });
    reader.readAsDataURL(this.files[0]);
});


bottomsave.addEventListener("click", function(){
    var obj = new Car(manufacturer.value,model.value,category.value,price.value,engine.value,year.value,newimage)

    // jeeps
    // mercedes jeeps
    if(obj.manufacturer == "mercedes" && obj.category == "jeep" && obj.model == "GL-class"){
        fullarr.push(obj)
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    }
    else if(obj.manufacturer == "mercedes" && obj.category != "jeep" && obj.model == "GL-class"){
        console.log("wrong")
    }

    // audi jeeps
    else if(obj.manufacturer == "audi" && obj.category == "jeep" && obj.model == "Q7"){
        fullarr.push(obj)
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    }
    else if(obj.manufacturer == "audi" && obj.category != "jeep" && obj.model == "Q7"){
        console.log("wrong")
    }

    // toyota jeeps
    else if(obj.manufacturer == "toyota" && obj.category == "jeep" && obj.model == "Prado" || obj.model == "4Runner"){
        fullarr.push(obj)
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    }
    else if(obj.manufacturer == "toyota" && obj.category != "jeep" && obj.model == "Prado" || obj.model == "4Runner"){
        console.log("wrong")
    }

    // sedan
    // mercedes sedan
    else if(obj.manufacturer == "mercedes" && obj.category == "sedan" && obj.model == "E-class" || obj.model == "S-class"){
        fullarr.push(obj)
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    }
    else if(obj.manufacturer == "mercedes" && obj.category != "sedan" && obj.model == "E-class" || obj.model == "S-class"){
        console.log("wrong")
    }

    // toyota sedan
    else if(obj.manufacturer == "toyota" && obj.category == "sedan" && obj.model == "Camry"){
        fullarr.push(obj)
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    }
    else if(obj.manufacturer == "toyota" && obj.category != "sedan" && obj.model == "Camry"){
        console.log("wrong")
    }

    // audi sedan
    else if(obj.manufacturer == "audi" && obj.category == "sedan" && obj.model == "A7" || obj.model == "A8"){
        fullarr.push(obj)
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    }
    else if(obj.manufacturer == "audi" && obj.category != "sedan" && obj.model == "A7" || obj.model == "A8"){
        console.log("wrong")
    }

    // bmw sedan
    else if(obj.manufacturer == "bmw" && obj.category == "sedan" && obj.model == "3er" || obj.model == "5er" || obj.model == "7er"){
        fullarr.push(obj)
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    }
    else if(obj.manufacturer == "bmw" && obj.category != "sedan" && obj.model == "3er" || obj.model == "5er" || obj.model == "7er"){
        console.log("wrong")
    }

    // mercedes
    else if(obj.manufacturer == "mercedes" && obj.model == "E-class" || obj.model == "S-class" || obj.model == "GL-class"){
        fullarr.push(obj)
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    }
    else if(obj.manufacturer == "mercedes" && obj.model != "E-class" || obj.model == "S-class" || obj.model == "GL-class"){
        console.log("wrong")
    }

    // bmw
    else if(obj.manufacturer == "bmw" && obj.model == "3er" || obj.model == "5er" || obj.model == "7er"){
        fullarr.push(obj)
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    }

    // audi
    else if(obj.manufacturer == "audi" && obj.model == "A7" || obj.model == "A8" || obj.model == "Q7"){
        fullarr.push(obj)
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    }

    // toyota
    else if(obj.manufacturer == "toyota" && obj.model == "Prado" || obj.model == "Camry" || obj.model == "4Runner"){
        fullarr.push(obj)
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    }
});
console.log(fullarr)
// localStorage.clear()