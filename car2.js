
// მანქანები დაემატა მწარმოებლის, მოდელის, კატეგორიის(ჯიპი/სედანი), ფასის, გამოშვების წლის, სერიის.
// დამატებული მანქანები გამოჩნდება ქარდბეის სახით როგორიც არის myuato-ზე.
// ვამატებთ ძებნას. ავირჩევთ იმას თუ რას ვეძებთ და შესაბამიად გამოდის პასუხები. შეიძლება არჩეული 
// იყოს ყველა პარამეტრი, რამდენიმე პარამეტრი ან სულაც ერთი.
// დავამატოთ მანქანების ქარდებზე ერთი delete ღილაკი. ღილაკზე კლიკის შემთხვევაში მანქანა წაიშალოს სიიდან. 
// არ იქნება არც ვიზუალზე და არც მასივში.

var fullarr = JSON.parse(localStorage.getItem("cardizainfull"))
var body = document.querySelector("body")

for(var i of fullarr){
  var hourgone = parseInt(((new Date().getTime() - i.time)/1000)/60/60)
  // if(hourgone >= 60){
  //   console.log(hourgone + " " + "საათის წინ")
  // }
  
  // var minutegone = parseInt(((new Date().getTime() - i.time)/1000)/60)
  // if(minutegone < 60){
  //   console.log(minutegone + " " + "წუთის წინ")
  // }

  let tmp = `
  <div class="cardiv">
    <div class="cardiv2" onclick="see()">
      <div class="carphoto" style="background-image: url(${i.newimage})">      
      </div>
        <div class="model_years">
        <div>${i.manufacturer}</div> <div>${i.model}</div> <div>${i.year} წ</div>
        </div>
        <div class="engine">
          <div class="enginesharp">
            <div class="">${i.engine}</div>
            <h1 class="enginesharph1">${i.Fuel_Type}</h1>
          </div>
          <div class="gear">
            <div class=""><i class="fa-solid fa-gear"></i></div>
            <h1 class="gearh1">${i.transmission}</h1>
          </div>
        </div>
        <div class="see">
          <div class="vipdiv">S-VIP</div>
          <div class="">${i.count} ნახვა</div>
          <div class="">
              ${hourgone + " " + "საათის წინ"}
          </div>
        </div>
        <div class="deldiv">
          <button class="dlt">წაშლა</button>
        </div>
        <div class="km">
          <div class="speed">
            <div class=""><i class="fa-solid fa-gauge"></i></div>
            <h1 class="speedh1">${i.mileage} კმ</h1>
          </div>
          <div class="whell">
            <div class=""><i class="fa-solid fa-dharmachakra"></i></div>
            <h1 class="whellh1">${i.Wheel_main}</h1>
          </div>
        </div>
        <div class="border_price">
          <h1 class="h1red">განბაჟება 2,345 ₾</h1>
          <h1 class="h1dark">${i.locations}</h1>
        </div>
        <div class="price">
          <div class="valut">
            <div class="cash">${i.price}</div>
            <div class="wallut">
              <div class="dollar">$</div>
              <div class="lari">₾</div>
            </div>
          </div>
        </div>
        <div class="favourite">
          <i class="fa-sharp fa-solid fa-message"></i>
          <i class="fa-solid fa-location-dot"></i>
          <i class="fa-regular fa-heart"></i>
        </div>
    </div>
  </div>
  `
  body.innerHTML += tmp
}
console.log(fullarr)

class CarInfo{
  constructor(manufacturer,model,category,fromprice,toprice,fromengine,toengine,fromyears,toyears,frommileage,tomileage,
              transmission,Fuel_Type,Wheel_main,locations){
    this.manufacturer = manufacturer
    this.model = model
    this.category = category
    this.fromprice = fromprice
    this.toprice = toprice
    this.fromengine = fromengine
    this.toengine = toengine
    this.fromyears = fromyears
    this.toyears = toyears
    this.frommileage = frommileage
    this.tomileage = tomileage
    this.transmission = transmission
    this.Fuel_Type = Fuel_Type
    this.Wheel_main = Wheel_main
    this.locations = locations
  }
}

var manufacturer = document.querySelector(".manufactorer")
var model = document.querySelector(".model")
var category = document.querySelector(".category")
var fromprice = document.querySelector(".fromprice")
var toprice = document.querySelector(".toprice")
var fromengine = document.querySelector(".fromengine")
var toengine = document.querySelector(".toengine")
var fromyears = document.querySelector(".fromyears")
var toyears = document.querySelector(".toyears")
var frommileage = document.querySelector(".frommileage")
var tomileage = document.querySelector(".tomileage")
var transmission = document.querySelector(".transmission")
var Fuel_Type = document.querySelector(".Fuel_Type")
var Wheel_main = document.querySelector(".Wheel_main")
var locations = document.querySelector(".locations")

var manufacturerarr = new Set([...fullarr.map(i=> i.manufacturer)])
for(var i of manufacturerarr){
    var manufactureropt = document.createElement("option")
    manufactureropt.innerText = i
    manufacturer.appendChild(manufactureropt)
}
manufacturer.addEventListener("click", function(){
    model.innerText = ''
    var modelarr = new Set([...fullarr.filter(i=> i.manufacturer == manufacturer.value).map(o=> o.model)])
    for(var i of modelarr){
        var model_opt = document.createElement("option")
        model_opt.innerText = i
        model.appendChild(model_opt)
    }
});
model.addEventListener("change", function(){
  category.innerHTML = ''
    var categoryarr = new Set([...fullarr.filter(i=> i.model == model.value).map(o=> o.category)])
    for(var i of categoryarr){
        var category_opt = document.createElement("option")
        category_opt.innerText = i
        category.appendChild(category_opt)
    }
});

var btnsearch = document.querySelector(".btnsearch")
btnsearch.addEventListener("click", function(){
  body.innerHTML = ""
  for(var i of fullarr){
    var minprice = fromprice.value
    var maxprice = toprice.value
    var minyears = fromyears.value
    var maxyears = toyears.value
    var minengine = fromengine.value
    var maxengine = toengine.value

    if(i.price >= minprice && maxprice >= i.price && i.year >= minyears && maxyears >= i.year 
       && i.engine >= minengine && maxengine >= i.engine){
      var tmp = `
      <div class="cardiv">
        <div class="cardiv2" onclick="see()">
          <div class="carphoto" style="background-image: url(${i.newimage})">      
          </div>
            <div class="model_years">
            <div>${i.manufacturer}</div> <div>${i.model}</div> <div>${i.year} წ</div>
            </div>
            <div class="engine">
              <div class="enginesharp">
                <div class="">${i.engine}</div>
                <h1 class="enginesharph1">${i.Fuel_Type}</h1>
              </div>
              <div class="gear">
                <div class=""><i class="fa-solid fa-gear"></i></div>
                <h1 class="gearh1">${i.transmission}</h1>
              </div>
            </div>
            <div class="see">
              <div class="vipdiv">S-VIP</div>
              <div class="">${i.count} ნახვა</div>
              <div class="">${timegone} წუთის წინ</div>
            </div>
            <div class="deldiv">
              <button class="dlt">წაშლა</button>
            </div>
            <div class="km">
              <div class="speed">
                <div class=""><i class="fa-solid fa-gauge"></i></div>
                <h1 class="speedh1">${i.mileage} კმ</h1>
              </div>
              <div class="whell">
                <div class=""><i class="fa-solid fa-dharmachakra"></i></div>
                <h1 class="whellh1">${i.Wheel_main}</h1>
              </div>
            </div>
            <div class="border_price">
              <h1 class="h1red">განბაჟება 2,345 ₾</h1>
              <h1 class="h1dark">${i.locations}</h1>
            </div>
            <div class="price">
              <div class="valut">
                <div class="cash">${i.price}</div>
                <div class="wallut">
                  <div class="dollar">$</div>
                  <div class="lari">₾</div>
                </div>
              </div>
            </div>
            <div class="favourite">
              <i class="fa-sharp fa-solid fa-message"></i>
              <i class="fa-solid fa-location-dot"></i>
              <i class="fa-regular fa-heart"></i>
            </div>
        </div>
      </div>
      `
      body.innerHTML += tmp
    }
    else if(i.price <= minprice && maxprice <= i.price && i.year <= minyears && maxyears <= i.year 
            && i.engine <= minengine && maxengine <= i.engine){
      console.log("wrong")
    }
  }
});

function see(){
  for(var i of fullarr){
      i.count += 1
      localStorage.setItem("cardizainfull",JSON.stringify(fullarr))
  }
}

const dlt = document.querySelectorAll(".dlt")
let cardiv = document.querySelectorAll(".cardiv")
cardiv = [...cardiv]

for(var i=0; i<dlt.length; i++){
  dlt[i].addEventListener("click", function(){
    // fullarr.splice(i,1)
    // [...dlt].indexOf(this)
    console.log([...dlt].indexOf(this))
    // console.log([...cardiv].indexOf(this))
    cardiv[i].classList.add("none");
    // console.log(body[cardiv].classList.add("none"))
    localStorage.setItem("cardizainfull", JSON.stringify(fullarr))
  });
}