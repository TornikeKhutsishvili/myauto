
var filtermanufactorer = document.querySelector(".filtermanufactorer")
var filtermodel = document.querySelector(".filtermodel")
var filterCategory = document.querySelector(".filterCategory")
var fromyears = document.querySelector(".fromyears")
var toyears = document.querySelector(".toyears")
var fromprice = document.querySelector(".fromprice")
var toprice = document.querySelector(".toprice")
var fromengine = document.querySelector(".fromengine")
var toengine = document.querySelector(".toengine")
var body = document.querySelector("body")


var fullarr = JSON.parse(localStorage.getItem("cardizainfull"))
for(var i of fullarr){
    let tmp = `
    <div class="cardiv">
    <div class="cardiv2">
      <div class="carphoto style="background-image: url(${i.newimage})">
        <div class="model_years">
        <div>${i.manufacturer}</div> <div>${i.model}</div> <div>${i.year} წ</div>
        </div>
        <div class="engine">
          <div class="enginesharp">
            <div class="">${i.engine}</div>
            <h1 class="enginesharph1">ბენზინი</h1>
          </div>
          <div class="gear">
            <div class=""><i class="fa-solid fa-gear"></i></div>
            <h1 class="gearh1">ტიპტრონიკი</h1>
          </div>
        </div>
        <div class="">

        </div>
        <div class="see">
          <div class="vipdiv">S-VIP</div>
          <div class="">458 ნახვა</div>
          <div class="">3 წუთის წინ</div>
        </div>
        <div class="km">
          <div class="speed">
            <div class=""><i class="fa-solid fa-gauge"></i></div>
            <h1 class="speedh1">165800 კმ</h1>
          </div>
          <div class="whell">
            <div class=""><i class="fa-solid fa-dharmachakra"></i></div>
            <h1 class="whellh1">მარცხენა</h1>
          </div>
        </div>
        <div class="border_price">
          <h1 class="h1red">განბაჟება 2,345 ₾</h1>
          <h1 class="h1dark">თბილისი</h1>
        </div>
        <div class="price">
          <div>

          </div>
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
  </div>
  `
  body.innerHTML += tmp
}
console.log(fullarr)


// btnsearch.addEventListener("click", function(){
//   for(var i of fullarr){
//     if(i.manufactorer == "mercedes" && i.category == "jeep" && i.model == "GL-class"){
//       fullarr.sort(function(){
//         body.innerHTML += fullarr
//       });
//           var tmp1 = `
//           <div class="cardiv">
//           <div class="cardiv2">
//             <div class="carphoto">
//               <div class="model_years">
//               <div>${i.manufacturer}</div> <div>${i.model}</div> <div>${i.year} წ</div>
//               </div>
//               <div class="engine">
//                 <div class="enginesharp">
//                   <div class="">${i.engine}</div>
//                   <h1 class="enginesharph1">ბენზინი</h1>
//                 </div>
//                 <div class="gear">
//                   <div class=""><i class="fa-solid fa-gear"></i></div>
//                   <h1 class="gearh1">ტიპტრონიკი</h1>
//                 </div>
//               </div>
//               <div class="">
        
//               </div>
//               <div class="see">
//                 <div class="vipdiv">S-VIP</div>
//                 <div class="">458 ნახვა</div>
//                 <div class="">3 წუთის წინ</div>
//               </div>
//               <div class="km">
//                 <div class="speed">
//                   <div class=""><i class="fa-solid fa-gauge"></i></div>
//                   <h1 class="speedh1">165800 კმ</h1>
//                 </div>
//                 <div class="whell">
//                   <div class=""><i class="fa-solid fa-dharmachakra"></i></div>
//                   <h1 class="whellh1">მარცხენა</h1>
//                 </div>
//               </div>
//               <div class="border_price">
//                 <h1 class="h1red">განბაჟება 2,345 ₾</h1>
//                 <h1 class="h1dark">თბილისი</h1>
//               </div>
//               <div class="price">
//                 <div>
        
//                 </div>
//                 <div class="valut">
//                   <div class="cash">${i.price}</div>
//                   <div class="wallut">
//                     <div class="dollar">$</div>
//                     <div class="lari">₾</div>
//                   </div>
//                 </div>
//               </div>
//               <div class="favourite">
//                 <i class="fa-sharp fa-solid fa-message"></i>
//                 <i class="fa-solid fa-location-dot"></i>
//                 <i class="fa-regular fa-heart"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//         `
//         body.innerHTML += tmp1
//     }
//  }
// });