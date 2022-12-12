
// მანქანები დაემატა მწარმოებლის, მოდელის, კატეგორიის(ჯიპი/სედანი), ფასის, გამოშვების წლის, სერიის.
// დამატებული მანქანები გამოჩნდება ქარდბეის სახით როგორიც არის myuato-ზე.
// ვამატებთ ძებნას. ავირჩევთ იმას თუ რას ვეძებთ და შესაბამიად გამოდის პასუხები. შეიძლება არჩეული 
// იყოს ყველა პარამეტრი, რამდენიმე პარამეტრი ან სულაც ერთი.
// მანქანები ასევე დაემატება გარბენის, გადაცემათა კოლოფის, საწვავის ტიპის, საჭის მდებარეობის მანქანაში და 
// ადგილმდებარობის მხრივ. ასევე დავამატოთ თუ რამდენი წუთის წინ არის განცხადება განტავსებული და ასევე რამდენმა
// ნახა ეს კონკრეტული განცხადება.

class Car{
    constructor(manufacturer,model,category,price,engine,year,mileage,transmission,
                Fuel_Type,Wheel_main,locations,newimage,deletee,count){
        this.manufacturer = manufacturer
        this.model = model
        this.category = category
        this.price = price
        this.engine = engine
        this.year = year
        this.mileage = mileage
        this.transmission = transmission
        this.Fuel_Type = Fuel_Type
        this.Wheel_main = Wheel_main
        this.locations = locations
        this.newimage = newimage
        this.time = new Date().getTime()
        this.deletee = deletee
        this.count = count
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
var mileage = document.querySelector(".mileage")
var transmission = document.querySelector(".transmission")
var Fuel_Type = document.querySelector(".Fuel_Type")
var Wheel_main = document.querySelector(".Wheel_main")
var locations = document.querySelector(".locations")
var body = document.querySelector("body")

var image = document.querySelector("#image");
var myimage = document.querySelector("#myimage")
var newimage = "";
image.addEventListener("change", function(){
    var reader = new FileReader();
    reader.addEventListener("load", () => {
        newimage = reader.result;
        myimage.style.backgroundImage = `url(${newimage})`
    });
    reader.readAsDataURL(this.files[0]);
});

var arr = [
    new Car("Mercedes", "E-class", "სედანი"),
    new Car("Mercedes", "S-class", "სედანი"),
    new Car("Mercedes", "GL-class", "ჯიპი"),
    new Car("BMW", "3er", "სედანი"),
    new Car("BMW", "5er", "სედანი"),
    new Car("BMW", "7er", "სედანი"),
    new Car("Audi", "A7", "სედანი"),
    new Car("Audi", "A8", "სედანი"),
    new Car("Audi", "Q7", "ჯიპი"),
    new Car("Toyota", "Prado", "ჯიპი"),
    new Car("Toyota", "Camry", "სედანი"),
    new Car("Toyota", "4Runner", "ჯიპი")
];

var manufacturerarr = new Set([...arr.map(i=> i.manufacturer)])
for(var i of manufacturerarr){
    var manufacturer_opt = document.createElement("option")
    manufacturer_opt.innerText = i
    manufacturer.appendChild(manufacturer_opt)
}
manufacturer.addEventListener("change", function(){
    model.innerText = ''
    var modelarr = new Set([...arr.filter(i=> i.manufacturer == manufacturer.value).map(o=> o.model)])
    for(var i of modelarr){
        var model_opt = document.createElement("option")
        model_opt.innerText = i
        model.appendChild(model_opt)
    }
});
model.addEventListener("change", function(){
    category.innerHTML = ''
    var categoryarr = new Set([...arr.filter(i=> i.model == model.value).map(o=> o.category)])
    for(var i of categoryarr){
        var category_opt = document.createElement("option")
        category_opt.innerText = i
        category.appendChild(category_opt)
    }
});


bottomsave.addEventListener("click", function(){
    var obj = new Car(manufacturer.value,model.value,category.value,price.value,engine.value,year.value,mileage.value,
                    transmission.value,Fuel_Type.value,Wheel_main.value,locations.value,newimage,this.time,this.deletee,this.count)
    if(manufacturer.value != '' && model.value != '' && category.value != '' && price.value != '' && engine.value != '' 
       && year.value != ''){
        fullarr.push(obj)
        localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
    }
    else{
        console.log("wrong")
    }
});
console.log(fullarr)
// localStorage.clear()