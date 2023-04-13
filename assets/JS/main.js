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

//Modal Sign Up
const signUpBtns = $$(".SignUp");
const modal_SignUp = $(".modal-SignUp");
const modal_SignUpContainer = $(".modal-SignUp-container");
const modal_SignUpClose = $(".modal-SignUp-close");

//Modal Sign In
const signInBtns = $$(".SignIn");
const modal_SignIn = $(".modal-SignIn");
const modal_SignInContainer = $(".modal-SignIn-container");
const modal_SignInClose = $(".modal-SignIn-close");

//Hàm hiển thị modal
function showSignUp() {
    modal_SignUp.classList.add("open");
}
function showSignIn() {
    modal_SignIn.classList.add("open");
}

//hàm ẩn modal
function hideSignUp() {
    modal_SignUp.classList.remove("open");
}
function hideSignIn() {
    modal_SignIn.classList.remove("open");
}

//lặp qua từng thẻ button và nghe hành vi click
for (const signUpBtn of signUpBtns) {
    signUpBtn.addEventListener("click", showSignUp);
}
for (const signInBtn of signInBtns) {
    signInBtn.addEventListener("click", showSignIn);
}

//Nghe hành vi khi click chuột vào button close
modal_SignUpClose.addEventListener("click", hideSignUp);
modal_SignInClose.addEventListener("click", hideSignIn);

//Bấm bất kỳ, cửa sổ modal sẽ đog lại
modal_SignUp.addEventListener("click", hideSignUp);
modal_SignIn.addEventListener("click", hideSignIn);

// //Ngừng việc nổi bọt, làm cho khi click chuột vào containner nó không bị mất
modal_SignUpContainer.addEventListener("click", function (event) {
    event.stopPropagation();
});
modal_SignInContainer.addEventListener("click", function (event) {
    event.stopPropagation();
});

// Regular expression
function kiemTraHoTen() {
    var re = /^([A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))+$/;
    if (re.test($("#txtHoTen").value) == false) {
        tbTen.innerText =
            "*Bắt buộc nhập ít nhất 2 từ, bắt đầu bằng kí tự in hoa";
        return false;
    } else {
        tbTen.innerText = "*";
        return true;
    }
}

function kiemTraEmail() {
    var mauKt = /^([a-zA-Z]{1})([a-zA-Z0-9-_])*(@gmail.com){1}$/;
    if (mauKt.test($("#txtEmail").value) == false) {
        tbEmail.innerText = "*Ký tự đầu là chữ cái, kết thúc bằng @gmail.com!!";
        return false;
    } else {
        tbEmail.innerText = "*";
        return true;
    }
}

function kiemTraNgaySinh() {
    var ns = new Date($("#txtNgaySinh").value);
    var today = new Date();
    if (eval(today.getFullYear() - ns.getFullYear() <= 10)) {
        tbNgaySinh.innerText = "Tuổi phải lớn hơn 10";
        return false;
    } else {
        tbNgaySinh.innerText = "*";
        return true;
    }
}

function kiemTraSoDienThoai() {
    var mauKt = /[0-9]{8,15}$/;
    if (mauKt.test($("#txtSDT").value) == false) {
        tbSoDt.innerText = "Số điện thoại phải từ 8-15 số !!";
        return false;
    } else {
        tbSoDt.innerText = "*";
        return true;
    }
}

function kiemTraPassWord() {
    var re = /(?=.*\d).{6,}/;
    if (re.test($("#txtMatKhau").value) == false) {
        mk.innerText = "*Phải có chữ, số, ít nhất 6 ký tự";
        return false;
    } else {
        mk.innerText = "*";
        return true;
    }
}

function kiemTraXacNhanMatKhau() {
    var cfirmPass = $("#txtNhapLaiMatKhau").value.trim();
    var mk = $("#txtMatKhau").value.trim();
    var nlmk = $("#nlmk");
    if (cfirmPass === mk) {
        nlmk.innerText = "*";
        return true;
    } else {
        nlmk.innerText = "* phải giống ô mật khẩu";
        return false;
    }
}

function submitForm() {
    if (
        kiemTraHoTen() === false ||
        kiemTraEmail() === false ||
        kiemTraSoDienThoai() === false ||
        kiemTraNgaySinh() === false ||
        kiemTraPassWord() === false ||
        kiemTraXacNhanMatKhau() === false
    ) {
        return false;
    } else {
        return true;
    }
}

// Xử lý đăng kí / đăng nhập với JS

// Lưu thông tin đăng ký vào localStorage
function registerUser(email, password) {
    localStorage.setItem(email, password);
}

// Kiểm tra thông tin đăng nhập và hiển thị thông báo thành công nếu đăng nhập thành công
function loginUser(email, password) {
    // Kiểm tra xem tên đăng nhập có tồn tại trong localStorage không
    if (localStorage.getItem(email) === password.toString()) {
        // Hiển thị thông báo thành công và lưu tên đăng nhập vào sessionStorage
        showSuccessSignInToast();
        sessionStorage.setItem("email", email);
        $(".action-btn").style.display = "none";
        $(".account-group").style.display = "flex";
        hideSignIn();
    } else {
        // Hiển thị thông báo lỗi nếu thông tin đăng nhập không chính xác
        showErrorSignInToast();
    }
}

// Xử lý sự kiện đăng ký
const signUpForm = $(".signUp-form-container");
signUpForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn form submit
    var email = $("#txtEmail").value;
    var password = $("#txtMatKhau").value;
    if (submitForm()) {
        showSuccessSignUpToast();
        registerUser(email, password);
        $(".action-btn").style.display = "none";
        $(".account-group").style.display = "flex";
        hideSignUp();
    } else {
        showErrorSignUpToast();
    }
});

// Xử lý sự kiện đăng nhập
const signInForm = $(".signIn-form-container");
signInForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn form submit
    var email = $("#txtEmail__login").value;
    var password = $("#txtMatKhau__login").value;
    loginUser(email, password);
});

// Xử lý phần chuyển sang đăng kí từ form đăng nhập
$(".register-request").onclick = function (e) {
    hideSignIn();
    showSignUp();
};

$(".login-request").onclick = function (e) {
    hideSignUp();
    showSignIn();
};

// Xử lý sự kiện đăng xuất
$(".account-feature .btnLogout").onclick = function (e) {
    showSuccessSignOutToast();
    $(".action-btn").style.display = "flex";
    $(".account-group").style.display = "none";
};

// Làm Toast Message SignUp / SignIn
// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle",
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
                      <div class="toast__icon">
                          <i class="${icon}"></i>
                      </div>
                      <div class="toast__body">
                          <h3 class="toast__title">${title}</h3>
                          <p class="toast__msg">${message}</p>
                      </div>
                      <div class="toast__close">
                          <i class="fas fa-times"></i>
                      </div>
                  `;
        main.appendChild(toast);
    }
}
function showSuccessSignUpToast() {
    toast({
        title: "Success!",
        message: "Bạn đã đăng ký thành công tài khoản.",
        type: "success",
        duration: 2000,
    });
}

function showSuccessSignInToast() {
    toast({
        title: "Success!",
        message: "Bạn đã đăng nhập thành công.",
        type: "success",
        duration: 2000,
    });
}

function showSuccessSignOutToast() {
    toast({
        title: "Success!",
        message: "Bạn đã đăng xuất thành công.",
        type: "success",
        duration: 2000,
    });
}

function showErrorSignUpToast() {
    toast({
        title: "Failed!",
        message: "Bạn chưa nhập đầy đủ thông tin.",
        type: "error",
        duration: 2000,
    });
}
function showErrorSignInToast() {
    toast({
        title: "Failed!",
        message: "Tên đăng nhập hoặc mật khẩu không đúng.",
        type: "error",
        duration: 2000,
    });
}
