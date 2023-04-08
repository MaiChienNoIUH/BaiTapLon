const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Slider Run Every 3 second
// Lấy ra các Slider

var sliders = $$(".img-fruit");
var currentIndex = 0;
const sliderLength = sliders.length;
setInterval(() => {
    currentIndex++;
    if (currentIndex >= sliderLength) currentIndex = 0;
    sliders.forEach(function (slider, index) {
        if (currentIndex === index) slider.classList.add("active");
        else slider.classList.remove("active");
    });
}, 3000);

// Xử lý prev / next list fruit
const listPrevBtn = $$(".prev-btn");
const listNextBtn = $$(".next-btn");

const fruit = $$(".fruits");
const importGroups = $$(".import-fruits .group");

const premiumGroups = $$(".premium-fruits .group");
const specialtyGroups = $$(".specialty-fruits .group");
const dryGroups = $$(".dry-fruits .group");

console.log(importGroups, premiumGroups, specialtyGroups, dryGroups);

//const groupWidth = importGroups[0].offsetWidth;
//Chuyển động phù hợp với kích cỡ màn hình
var groupWidth;
var screenWidth = document.documentElement.clientWidth;
if(screenWidth < 740)
    groupWidth = 340;
else if(screenWidth >= 740 && screenWidth < 1024)
    groupWidth = 740;
else if(screenWidth >= 1024)
    groupWidth = 1170;
    
const groupLength = importGroups.length;

let index = 0;
let index1 = 0;
let index2 = 0;
let index3 = 0;

listPrevBtn[0].onclick = () => {
    index--;
    if (index < 0) index = groupLength - 1;
    updateGroups(index, importGroups);
};

listNextBtn[0].onclick = () => {
    index++;
    if (index >= groupLength) index = 0;
    updateGroups(index, importGroups);
};

listPrevBtn[1].onclick = () => {
    index1--;
    if (index1 < 0) index1 = groupLength - 1;
    updateGroups(index1, premiumGroups);
};

listNextBtn[1].onclick = () => {
    index1++;
    if (index1 >= groupLength) index1 = 0;
    updateGroups(index1, premiumGroups);
};

listPrevBtn[2].onclick = () => {
    index2--;
    if (index2 < 0) index2 = groupLength - 1;
    updateGroups(index2, specialtyGroups);
};

listNextBtn[2].onclick = () => {
    index2++;
    if (index2 >= groupLength) index2 = 0;
    updateGroups(index2, specialtyGroups);
};

listPrevBtn[3].onclick = () => {
    index3--;
    if (index3 < 0) index3 = groupLength - 1;
    updateGroups(index3, dryGroups);
};

listNextBtn[3].onclick = () => {
    index3++;
    if (index3 >= groupLength) index3 = 0;
    updateGroups(index3, dryGroups);
};

function updateGroups(index, groups) {
    const distance = -index * groupWidth;
    groups.forEach((group) => {
        group.style.transform = `translateX(${distance}px)`;
    });
}



//Modal Sign Up
const signUpBtns = document.querySelectorAll('.SignUp');
const modal_SignUp = document.querySelector('.modal-SignUp');
const modal_SignUpContainer = document.querySelector('.modal-SignUp-container');
const modal_SignUpClose = document.querySelector('.modal-SignUp-close');


//Modal Sign In
const signInBtns = document.querySelectorAll('.SignIn');
const modal_SignIn = document.querySelector('.modal-SignIn');
const modal_SignInContainer = document.querySelector('.modal-SigIn-container');
const modal_SignInClose = document.querySelector('.modal-SignIn-close');

//Hàm hiển thị modal
function showSignUp(){
    modal_SignUp.classList.add('open');
}
function showSignIn(){
    modal_SignIn.classList.add('open');
}

//hàm ẩn modal
function hideSignUp(){
    modal_SignUp.classList.remove('open');
}
function hideSignIn(){
    modal_SignIn.classList.remove('open');
}

//lặp qua từng thẻ button và nghe hành vi click
for(const signUpBtn of signUpBtns){
    signUpBtn.addEventListener('click',showSignUp);
}
for(const signInBtn of signInBtns){
    signInBtn.addEventListener('click',showSignIn);
}

//Nghe hành vi khi click chuột vào button close
modal_SignUpClose.addEventListener('click',hideSignUp);
modal_SignInClose.addEventListener('click',hideSignIn);

//Bấm bất kỳ, cửa sổ modal sẽ đog lại
modal_SignUp.addEventListener('click',hideSignUp);
// modal_SignIn.addEventListener('click',hideSignIn);

// //Ngừng việc nổi bọt, làm cho khi click chuột vào containner nó không bị mất
modal_SignUpContainer.addEventListener('click',function(event){
    event.stopPropagation();
})
modal_SignInContainer.addEventListener('click',function(event){
    event.stopPropagation();
})



