const content = document.querySelector(".content")
const title = document.querySelector("h1")


const getSlug = () => {
    return window.location.href.split("?")[1]
}

const getBlog = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    console.log(json.data)
    showBlog(json?.data)
}


getBlog(`https://www.wp-course.site/wp-json/youthink/post?slug=${getSlug()}`)


const showBlog = (singleBlog) => {
    title.innerHTML = singleBlog.title
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
}

