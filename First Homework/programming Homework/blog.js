let currPage = 1
const content = document.querySelector("#content")
let htmlBlogs = null
const showMore = document.getElementById("myButton")


const showBlogs = (blogs) => {
  blogs.map(singleBlog => {
    content.innerHTML += `
    <div  class="post">
      <img  id="${singleBlog.slug}" src="${singleBlog.thumbnail}">
      <div class="info">
        <h4 class="boldp">${singleBlog.title}</h4>
        <p> ${singleBlog.excerpt}</p>
        <p> ${singleBlog.views} ${singleBlog.date} ${singleBlog.tags}</p>
      </div>
    </div>
    `
  })
}

const getBlogs = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  showBlogs(json?.data)
  htmlBlogs = Array.from(document.querySelectorAll(".post"))
  console.log(htmlBlogs)

  htmlBlogs?.map(htmlBlog => {
    htmlBlog.addEventListener("click", e => {
      if (e.target.src) { // to check if it is img
        window.location.href = `./singlePost.html?${e.target.id}`
      }
    })
  })
}




getBlogs(`https://www.wp-course.site/wp-json/youthink/posts?page=${currPage}`)


const next = () => {
  getBlogs(`https://www.wp-course.site/wp-json/youthink/posts?page=${++currPage}`)
}





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