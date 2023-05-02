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

// Chuyển động phù hợp với kích cỡ màn hình
const GROUP_WIDTHS = {
    SMALL: 340,
    MEDIUM: 740,
    LARGE: 1170,
};

const groupLength = importGroups.length;

const groups = [
    {
        btnPrev: listPrevBtn[0],
        btnNext: listNextBtn[0],
        index: 0,
        items: importGroups,
        wrap: "import-fruits",
    },
    {
        btnPrev: listPrevBtn[1],
        btnNext: listNextBtn[1],
        index: 0,
        items: premiumGroups,
        wrap: "premium-fruits",
    },
    {
        btnPrev: listPrevBtn[2],
        btnNext: listNextBtn[2],
        index: 0,
        items: specialtyGroups,
        wrap: "specialty-fruits",
    },
    {
        btnPrev: listPrevBtn[3],
        btnNext: listNextBtn[3],
        index: 0,
        items: dryGroups,
        wrap: "dry-fruits",
    },
];

groups.forEach((group) => {
    group.btnPrev.addEventListener("click", () => {
        group.index = (group.index - 1 + groupLength) % groupLength;
        updateGroups(group.index, group.items, group.wrap);
    });

    group.btnNext.addEventListener("click", () => {
        group.index = (group.index + 1) % groupLength;
        updateGroups(group.index, group.items, group.wrap);
    });
});

function updateGroups(index, items, wrap) {
    const screenWidth = document.documentElement.clientWidth;
    let groupWidth;
    // Thêm code xử lý class active cho span.dot
    const dots = $$(`.${wrap} .animation .dots > .dot`);
    dots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });

    if (screenWidth < 740) groupWidth = GROUP_WIDTHS.SMALL;
    else if (screenWidth >= 740 && screenWidth < 1024)
        groupWidth = GROUP_WIDTHS.MEDIUM;
    else if (screenWidth >= 1024) groupWidth = GROUP_WIDTHS.LARGE;

    const distance = -index * groupWidth;
    items.forEach((item) => {
        item.style.transform = `translateX(${distance}px)`;
    });
}
