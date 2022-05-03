let price= 0;
let result = 0;
let result1 = 0;
let result2 = 0;
let result3 = 0;
let result4 = 0;
let result5 = 0;
let result6 = 0;
let result7 = 0;
let result8 = 0;
let result9 = 0;
let result10 = 0;
let result11 = 0;


function plus1(count,price) {
  result += parseInt(price);
  result1 ++;
  document.querySelector("#order1").innerText = "잔치국수 " + result1 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus2(count,price) {
  result += parseInt(price);
  result2 ++;
  document.querySelector("#order2").innerText = "비빔국수 " + result2 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus3(count,price) {
  result += parseInt(price);
  result3 ++;
  document.querySelector("#order3").innerText = "냉면 " + result3 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus4(count,price) {
  result += parseInt(price);
  result4 ++;
  document.querySelector("#order4").innerText = "간장비빔국수 " + result4 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus5(count,price) {
  result += parseInt(price);
  result5 ++;
  document.querySelector("#order5").innerText = "우동 " + result5 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus6(count,price) {
  result += parseInt(price);
  result6 ++;
  document.querySelector("#order6").innerText = "불고기 덮밥 " + result6 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus7(count,price) {
  result += parseInt(price);
  result7 ++;
  document.querySelector("#order7").innerText = "제육 덮밥 " + result7 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus8(count,price) {
  result += parseInt(price);
  result8 ++;
  document.querySelector("#order8").innerText = "참치 주먹밥 " + result8 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus9(count,price) {
  result += parseInt(price);
  result9 ++;
  document.querySelector("#order9").innerText = "코카콜라 " + result9 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus10(count,price) {
  result += parseInt(price);
  result10 ++;
  document.querySelector("#order10").innerText = "스프라이트 " + result10 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function plus11(count,price) {
  result += parseInt(price);
  result11 ++;
  document.querySelector("#order11").innerText = "환타 " + result11 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function minus1(count,price) {
  if(result1>=1){
  result -= parseInt(price);
  result1 --;
  }
  if(result1==0){
    document.querySelector("#order1").innerText = "" ;
  }
  else
  document.querySelector("#order1").innerText = "잔치국수 " + result1 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus2(count,price) {
  if(result2>=1){
  result -= parseInt(price);
  result2 --;
}
if(result2==0){
  document.querySelector("#order2").innerText = "" ;
}
else
  document.querySelector("#order2").innerText = "비빔국수 " + result2 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus3(count,price) {
  if(result3>=1){
  result -= parseInt(price);
  result3 --;
}
if(result3==0){
  document.querySelector("#order3").innerText = "" ;
}
else
  document.querySelector("#order3").innerText = "냉면 " + result3 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus4(count,price) {
  if(result4>=1){
  result -= parseInt(price);
  result4 --;
}
if(result4==0){
  document.querySelector("#order4").innerText = "" ;
}
else
  document.querySelector("#order4").innerText = "간장비빔국수 " + result4 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus5(count,price) {
  if(result5>=1){
  result -= parseInt(price);
  result5 --;
}
if(result5==0){
  document.querySelector("#order5").innerText = "" ;
}
else
  document.querySelector("#order5").innerText = "우동 " + result5 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus6(count,price) {
  if(result6>=1){
  result -= parseInt(price);
  result6 --;
}
if(result6==0){
  document.querySelector("#order6").innerText = "" ;
}
else
  document.querySelector("#order6").innerText = "불고기 덮밥 " + result6 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus7(count,price) {
  if(result7>=1){
  result -= parseInt(price);
  result7 --;
}
if(result7==0){
  document.querySelector("#order7").innerText = "" ;
}
else
  document.querySelector("#order7").innerText = "제육 덮밥 " + result7 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus8(count,price) {
  if(result8>=1){
  result -= parseInt(price);
  result8 --;
}
if(result8==0){
  document.querySelector("#order8").innerText = "" ;
}
else
  document.querySelector("#order8").innerText = "참치 주먹밥 " + result8 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus9(count,price) {
  if(result9>=1){
  result -= parseInt(price);
  result9 --;
}
if(result9==0){
  document.querySelector("#order9").innerText = "" ;
}
else
  document.querySelector("#order9").innerText = "코카콜라 " + result9 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus10(count,price) {
  if(result10>=1){
  result -= parseInt(price);
  result10 --;
}
if(result10==0){
  document.querySelector("#order10").innerText = "" ;
}
else
  document.querySelector("#order10").innerText = "스프라이트 " + result10 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}
function minus11(count,price) {
  if(result11>=1){
  result -= parseInt(price);
  result11 --;
  }
  if(result11==0){
    document.querySelector("#order11").innerText = "" ;
  }
  else
  document.querySelector("#order11").innerText = "환타 " + result11 ;
  document.querySelector("#total").innerText = result.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원";
}

function reset() {
price = 0;
result = 0;
result1 = 0;
result2 = 0;
result3 = 0;
result4 = 0;
result5 = 0;
result6 = 0;
result7 = 0;
result8 = 0;
result9 = 0;
result10 = 0;
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