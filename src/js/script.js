/* let consulting = document.querySelector(".consulting");
let send_btn = document.querySelector('.send');
let consulting_block = document.querySelector('.consulting__block');
let consulting_inputs = document.querySelector('.consulting__inputs');
let show = `<div class="alert alert-success" role="alert">
<h4 class="alert-heading">Well done!</h4>
<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
<hr>
<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>`;
send_btn.addEventListener('click', function(){
    consulting_block.style.display="none";
    consulting_inputs.style.display="none";
    consulting.innerHTML=`<div class="container"><div class="alert alert-success w-100 h-100" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div></div>`;
});
 */

let col = document.querySelectorAll('.faq_collapse');
let p = document.querySelectorAll('.p');
let fa  = document.querySelector('.fas');
let icon = document.querySelector('.faq_section_icon');

for (let i = 0; i < p.length; i++){
    if(col[i].ariaExpanded == "true"){
        col[i].innerHTML = `<i class="fas fa-minus-square"></i>`;
        p[i].style.color = "#fc694c";
       
    }else {
        col[i].innerHTML = `<i class="fas fa-plus-square"></i>`;
        p[i].style.color = "";
    }
        p[i].addEventListener('click', function(){
            if(col[i].ariaExpanded == "true"){
            col[i].innerHTML = `<i class="fas fa-minus-square"></i>`;
            p[i].style.color = "#fc694c";
           
        }else {
            col[i].innerHTML = `<i class="fas fa-plus-square"></i>`;
            p[i].style.color = "";
        }
        })
        col[i].addEventListener('click', function(){
            if(col[i].ariaExpanded == "true"){
                col[i].innerHTML = `<i class="fas fa-minus-square"></i>`;
                p[i].style.color = "#fc694c";
            }else {
                col[i].innerHTML = `<i class="fas fa-plus-square"></i>`;
                p[i].style.color = "";
            }
        })
}

const contact_input = document.querySelectorAll('.con-field');

contact_input.forEach(e => {
    e.addEventListener('input', evt => {
        const value = e.value
        
        if (!value) {
            e.style.border= "1px solid #fff";
          return
        }
        const trimmed = value.trim()
        
        if (trimmed) {
          e.dataset.state = 'valid'
          e.style.border= "1px solid green";
        } else {
            e.style.border= "1px solid #fff";
        }
      })
})

let solid = document.querySelectorAll('.area_practice__solid');

for (let i = 0; i < solid.length; i++) {
    solid[0].style.width= '57%';
    solid[1].style.width= '63%';
    solid[2].style.width= '57%';
    solid[3].style.width= '86%';
    solid[4].style.width= '54%';
    solid[5].style.width= '73%';
}

/* const static_number =  document.querySelector('.static_number');

let num = 0;
 
function myStatic(){
    num += 1;
    //console.log(num)
    static_number.innerHTML = num + "%";
    if( num > 98){
        return num;
    }
    setTimeout(myStatic, 20)
}


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    myStatic();
  }
  else{
    static_number.innerHTML="1" 
  }
} */

/* section text speed*/
/* let out = document.querySelector('.out'); */
/* for (let i = 0; i < 5; i++){
    for(let k = 0; k < 10; k++){
        out.innerHTML += k;
    }
    out.innerHTML += ' ';
} */

/* for (let i = 1; i < 10; i++){
  
    for(let k = 1 ; k < 10; k++){
        out.innerHTML += `${i} * ${k}=${i * k} <br>`;
    }
} */
/* let a = 2;
let b = 4;
function multi(a ,b){
    return a * b 
}

let j = multi(2, 5);
console.log(j);
 */

/* let text = "";
const titleText = ["საოჯახო სამართალი", "სამეწარმეო სამართალი","სისხლის სამართალი","ადმინისტრიციული სამართალი","შრომის სამართალი","საერთაშორისო სამართალი"];
let solid = document.querySelectorAll('.area_practice__solid');
let title = document.querySelectorAll('.area_practice__titledes');
 for (const e of titleText) {
    text += e + "<br>";
    console.log(text);
  }
 
 
document.querySelector('.out').innerHTML = text;
  */
/*   solid.forEach(element =>{
    console.log(element);
    element.style.width=`${e.length}rem`;
    
}) */


/* const inpt = document.querySelectorAll('.con-field');
const submit = document.querySelector('.submit-contact');
const result = document.querySelector('.alma');
let newText = "";   

submit.addEventListener('click', function(){
   
    for (const e of inpt) {
    newText += e.value;
    result.innerHTML= newText;
    console.log(newText)
    
    }
    
})

 */
/*  */
/* let a =  new Set(); */
/* a.add(1); */
/* a.add("1"); */
/*  */
/* console.log(a); */
/* console.log(a.has('2')); */

/* let j = [3,4,5,10,7,200,9];
let b = j.map((item, index ) =>{
    return item * 5;
})

console.log(b) */

/* let a = 5;
a = a *2; 
try {
    document.querySelector('.test').innerHTML = a;
}
catch(err){
    console.log('1');
}
f1();
console.log(a)
function f1(){
    console.log("hello")
}
 */

/* class Alert{
    constructor(a, c, d){
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }
    shouAlert(){
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
    }
}

class Alert2 extends Alert{
    constructor(a, c, d , icon){
        super(a, c, d);
        this.icon = icon;
    }
    showIconAlert(){
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><i class="fab ${this.icon}"></i>${this.message}</p>`;

    }
 
}


let m = new Alert('Hello', 'bg' ,'.out');
    console.log(m) 
    m.shouAlert();

let m2 = new Alert2('Hello', 'bg' ,'.out', 'fa-apple');
    m2.showIconAlert();
    console.log(m2)  */