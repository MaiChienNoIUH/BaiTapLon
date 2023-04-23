if (typeof $ === "undefined") {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
}

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

//const groupWidth = importGroups[0].offsetWidth;
//Chuyển động phù hợp với kích cỡ màn hình
var groupWidth;
var screenWidth = document.documentElement.clientWidth;
if (screenWidth < 740) groupWidth = 340;
else if (screenWidth >= 740 && screenWidth < 1024) groupWidth = 740;
else if (screenWidth >= 1024) groupWidth = 1170;

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
