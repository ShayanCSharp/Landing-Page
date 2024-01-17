var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/657f94f207843602b8030f27/1hht5rl7d";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

// Hamburger

let hamOpen = document.querySelector(".ri-menu-3-line");
let hamclose = document.querySelector(".hamHead i");
let ul = document.querySelector("nav ul");

hamOpen.addEventListener("click", () => {
  ul.style.top = "0";
});

hamclose.addEventListener("click", () => {
  ul.style.top = "-100dvh";
});

// Pop up Submit

document.querySelector(".pop").addEventListener("submit", (e) => {
  e.preventDefault();
});

// jQuery

$(document).ready(function () {
  $(function () {
    $(".pop").draggable();
  });
});

// Hero form regex

let nameVali = () => {
  let name = document.querySelector("#heroFormName");
  let nameRegex = /^[A-Za-z ]{2,}$/;
  let errorSpan = document.querySelector("#nameError");

  if (!nameRegex.test(name.value)) {
    errorSpan.classList.add("show");
    return false;
  }
  errorSpan.classList.remove("show");
  return true;
};

let emailVali = () => {
  let email = document.querySelector("#heroFormEmail");
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let errorSpan = document.querySelector("#emailError");

  if (!emailRegex.test(email.value)) {
    errorSpan.classList.add("show");
    return false;
  }
  errorSpan.classList.remove("show");
  return true;
};

let phoneVali = () => {
  let phone = document.querySelector("#heroFormNumber");
  let phoneRegex = /^\+?(\d{1,4}[-.\s]?)?(\d{3}[-.\s]?){1,4}\d$/;
  let errorSpan = document.querySelector("#phoneError");

  if (!phoneRegex.test(phone.value)) {
    errorSpan.classList.add("show");
    return false;
  }
  errorSpan.classList.remove("show");
  return true;
};

document.querySelector("#heroForm").addEventListener("submit", (e) => {
  if (nameVali() && emailVali() && phoneVali()) {
    e.preventDefault();
    sendMail();
  } else {
    e.preventDefault();
  }
});

let sendMail = () => {
  let uname = document.querySelector("#heroFormName").value;
  let uemail = document.querySelector("#heroFormEmail").value;
  let number = document.querySelector("#heroFormNumber").value;
  let msg = document.querySelector("#msg").value;

  let Emessage = `
  <b>Name:</b> ${uname}
  <br>
  <b>Email:</b> ${uemail}
  <br>
  <b>Number:</b> ${number}
  <br>
  <b>Message:</b> ${msg}
`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "shayanalam8931@gmail.com",
    Password: "BD4F4CE3D7BB48019BEF1169120E7EE7054E",
    To: "info@cybiltechnologies.com",
    From: "shayanalam8931@gmail.com",
    Subject: "Landing Page. All the info is is body",
    Body: Emessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Submit",
        text: "Your form has been submitted. We will contact you as soon as possible.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "There is a error. Try again.",
        icon: "error",
      });
    }
  });
};

let sendMailPop = () => {
  let uname = document.querySelector("#name").value;
  let uemail = document.querySelector("#email").value;
  let number = document.querySelector("#number").value;
  let msg = document.querySelector("#popMSG").value;

  let Emessage = `
  <b>Name:</b> ${uname}
  <br>
  <b>Email:</b> ${uemail}
  <br>
  <b>Number:</b> ${number}
  <br>
  <b>Message:</b> ${msg}
`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "shayanalam8931@gmail.com",
    Password: "BD4F4CE3D7BB48019BEF1169120E7EE7054E",
    To: "info@cybiltechnologies.com",
    From: "shayanalam8931@gmail.com",
    Subject: "Landing Page Pop Up. All the info is is body",
    Body: Emessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Submit",
        text: "Your form has been submitted. We will contact you as soon as possible.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "There is a error. Try again.",
        icon: "error",
      });
    }
  });
};

document.querySelector(".pop").addEventListener("submit", (e) => {
  sendMailPop();
});

document.querySelector(".pop").style.opacity = "0";
document.querySelector(".pop").style.visibility = "hidden";

setTimeout(() => {
  document.querySelector(".pop").style.opacity = "1";
  document.querySelector(".pop").style.visibility = "visible";
}, 3000);

// Pop Removed

const closePop = document.querySelector(".pop i");
let popUp = document.querySelector(".pop");

closePop.addEventListener("click", () => {
  popUp.style.opacity = "0";
  popUp.style.visibility = "visible";
  popUp.style.left = "-150vw";
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelector(".contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  footerEmail();
});

let footerEmail = () => {
  let uname = document.querySelector("#fName").value;
  let uemail = document.querySelector("#fEmail").value;
  let number = document.querySelector("#fPhone").value;
  let msg = document.querySelector("#fMsg").value;

  let Emessage = `
  <b>Name:</b> ${uname}
  <br>
  <b>Email:</b> ${uemail}
  <br>
  <b>Number:</b> ${number}
  <br>
  <b>Message:</b> ${msg}
`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "shayanalam8931@gmail.com",
    Password: "BD4F4CE3D7BB48019BEF1169120E7EE7054E",
    To: "info@cybiltechnologies.com",
    From: "shayanalam8931@gmail.com",
    Subject: "Landing Page Footer. All the info is is body",
    Body: Emessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Submit",
        text: "Your form has been submitted. We will contact you as soon as possible.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "There is a error. Try again.",
        icon: "error",
      });
    }
  });
};

// Show Pop

let btns = document.querySelectorAll(".livechat");

Array.from(btns).forEach((e) => {
  e.addEventListener("click", () => {
    popUp.style.opacity = "1";
    popUp.style.visibility = "visible";
    popUp.style.left = "50%";
  });
});

