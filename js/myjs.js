let price= 0;
let result = 0;
let count1= 0;
let result1 = 0;
let count2= 0;
let result2 = 0;
let count3= 0;
let result3 = 0;
let count4= 0;
let result4 = 0;
let count5= 0;
let result5 = 0;
let count6= 0;
let result6 = 0;
let count7= 0;
let result7 = 0;
let count8= 0;
let result8 = 0;
let count9= 0;
let result9 = 0;
let count10= 0;
let result10 = 0;
let count11= 0;
let result11 = 0;


function plus1(count1,price) {
  result += parseInt(price);
  result1 += parseInt(count1);
  document.querySelector("#order1").innerText = "잔치국수 " + result1 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus2(count2,price) {
  result += parseInt(price);
  result2 += parseInt(count2);
  document.querySelector("#order2").innerText = "비빔국수 " + result2 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus3(count3,price) {
  result += parseInt(price);
  result3 += parseInt(count3);
  document.querySelector("#order3").innerText = "냉면 " + result3 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus4(count4,price) {
  result += parseInt(price);
  result4 += parseInt(count4);
  document.querySelector("#order4").innerText = "간장비빔국수 " + result4 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus5(count5,price) {
  result += parseInt(price);
  result5 += parseInt(count5);
  document.querySelector("#order5").innerText = "우동 " + result5 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus6(count6,price) {
  result += parseInt(price);
  result6 += parseInt(count6);
  document.querySelector("#order6").innerText = "불고기 덮밥 " + result6 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus7(count7,price) {
  result += parseInt(price);
  result7 += parseInt(count7);
  document.querySelector("#order7").innerText = "제육 덮밥 " + result7 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus8(count8,price) {
  result += parseInt(price);
  result8 += parseInt(count8);
  document.querySelector("#order8").innerText = "참치 주먹밥 " + result8 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus9(count9,price) {
  result += parseInt(price);
  result9 += parseInt(count9);
  document.querySelector("#order9").innerText = "코카콜라 " + result9 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus10(count10,price) {
  result += parseInt(price);
  result10 += parseInt(count10);
  document.querySelector("#order10").innerText = "스프라이트 " + result10 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus11(count11,price) {
  result += parseInt(price);
  result11 += parseInt(count11);
  document.querySelector("#order11").innerText = "환타 " + result11 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function minus1(count1,price) {
  if(result1>=1){
  result -= parseInt(price);
  result1 -= parseInt(count1);
  }
  if(result1==0){
    document.querySelector("#order1").innerText = "" ;
  }
  else
  document.querySelector("#order1").innerText = "잔치국수 " + result1 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus2(count2,price) {
  if(result2>=1){
  result -= parseInt(price);
  result2 -= parseInt(count2);
}
if(result2==0){
  document.querySelector("#order2").innerText = "" ;
}
else
  document.querySelector("#order2").innerText = "비빔국수 " + result2 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus3(count3,price) {
  if(result3>=1){
  result -= parseInt(price);
  result3 -= parseInt(count3);
}
if(result3==0){
  document.querySelector("#order3").innerText = "" ;
}
else
  document.querySelector("#order3").innerText = "냉면 " + result3 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus4(count4,price) {
  if(result4>=1){
  result -= parseInt(price);
  result4 -= parseInt(count4);
}
if(result4==0){
  document.querySelector("#order4").innerText = "" ;
}
else
  document.querySelector("#order4").innerText = "간장비빔국수 " + result4 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus5(count5,price) {
  if(result5>=1){
  result -= parseInt(price);
  result5 -= parseInt(count5);
}
if(result5==0){
  document.querySelector("#order5").innerText = "" ;
}
else
  document.querySelector("#order5").innerText = "우동 " + result5 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus6(count6,price) {
  if(result6>=1){
  result -= parseInt(price);
  result6 -= parseInt(count6);
}
if(result6==0){
  document.querySelector("#order6").innerText = "" ;
}
else
  document.querySelector("#order6").innerText = "불고기 덮밥 " + result6 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus7(count7,price) {
  if(result7>=1){
  result -= parseInt(price);
  result7 -= parseInt(count7);
}
if(result7==0){
  document.querySelector("#order7").innerText = "" ;
}
else
  document.querySelector("#order7").innerText = "제육 덮밥 " + result7 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus8(count8,price) {
  if(result8>=1){
  result -= parseInt(price);
  result8 -= parseInt(count8);
}
if(result8==0){
  document.querySelector("#order8").innerText = "" ;
}
else
  document.querySelector("#order8").innerText = "참치 주먹밥 " + result8 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus9(count9,price) {
  if(result9>=1){
  result -= parseInt(price);
  result9 -= parseInt(count9);
}
if(result9==0){
  document.querySelector("#order9").innerText = "" ;
}
else
  document.querySelector("#order9").innerText = "코카콜라 " + result9 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus10(count10,price) {
  if(result10>=1){
  result -= parseInt(price);
  result10 -= parseInt(count10);
}
if(result10==0){
  document.querySelector("#order10").innerText = "" ;
}
else
  document.querySelector("#order10").innerText = "스프라이트 " + result10 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus11(count11,price) {
  if(result11>=1){
  result -= parseInt(price);
  result11 -= parseInt(count11);
  }
  if(result11==0){
    document.querySelector("#order11").innerText = "" ;
  }
  else
  document.querySelector("#order11").innerText = "환타 " + result11 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function reset() {
price;
result = 0;
count1 = 0;
result1 = 0;
count2 = 0;
result2 = 0;
count3 = 0;
result3 = 0;
count4 = 0;
result4 = 0;
count5 = 0;
result5 = 0;
count6 = 0;
result6 = 0;
count7 = 0;
result7 = 0;
count8 = 0;
result8 = 0;
count9 = 0;
result9 = 0;
count10 = 0;
result10 = 0;
count11 = 0;
result11 = 0;

document.querySelector("#order1").innerText = "";
document.querySelector("#order2").innerText = "";
document.querySelector("#order3").innerText = "";
document.querySelector("#order4").innerText = "";
document.querySelector("#order5").innerText = "";
document.querySelector("#order6").innerText = "";
document.querySelector("#order7").innerText = "";
document.querySelector("#order8").innerText = "";
document.querySelector("#order9").innerText = "";
document.querySelector("#order10").innerText = "";
document.querySelector("#order11").innerText = "";
document.querySelector("#total").innerText = "";
}

function ordercom() {
  alert('주문완료입니다.');
}