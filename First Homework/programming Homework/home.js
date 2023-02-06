const content = document.querySelector('.content');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let images = [
    'https://www.wp-course.site/wp-content/uploads/2020/08/nostalgia-at-work-800x460.jpg',
    'https://www.wp-course.site/wp-content/uploads/2020/08/overhead-view-raw-ravioli-with-ingredients-800x460.jpg',
    'https://www.wp-course.site/wp-content/uploads/2020/08/organic-vegetables-800x460.jpg'
];

let currentImage = 0;

prev.addEventListener('click', () => {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    content.style.backgroundImage = `url(${images[currentImage]})`;
});

next.addEventListener('click', () => {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    content.style.backgroundImage = `url(${images[currentImage]})`;
});


let emails = [];

const emailInput = document.getElementById("email");
const susbscribeBtn = document.getElementById("susbscribe");
const thankYouMessage = document.createElement("p");

susbscribeBtn.addEventListener("click", () => {
    const email = emailInput.value;
    if (emails.includes(email)) {
        thankYouMessage.textContent = "You are already subscribed";
        thankYouMessage.style.color = "red";
    } else {
        emails.push(email);
        thankYouMessage.textContent = "Thank you for subscribing";
        thankYouMessage.style.color = "green";
    }
    emailInput.after(thankYouMessage);
});




/*
const susbscribed = getElementById("susbscribe");
function susbscribe() {
    let email = document.getElementById("email").value;
    let subscribedEmails = [];
  
    if (subscribedEmails.includes(email)) {
      alert("You are already subscribed");
      return;
    }
  
    subscribedEmails.push(email);
    alert("Thank you for subscribing");
  }

/*
document.getElementById("prev").addEventListener("click", function() {
    document.querySelector(".content").style.backgroundImage = "url('https://www.wp-course.site/wp-content/uploads/2020/08/overhead-view-raw-ravioli-with-ingredients-800x460.jpg')";
});

document.getElementById("next").addEventListener("click", function() {
    document.querySelector(".content").style.backgroundImage = "url('https://www.wp-course.site/wp-content/uploads/2020/08/organic-vegetables-800x460.jpg')";
});
*/
