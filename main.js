// 1. Create a javascript file

// console.log each variable. How are they different? Try adding an additional class of "currentBlog" to the elements using classList.add. Does it work? Why or why not? If not, what do you need to do to meet the requirement of adding a class?

// 2. Use document.querySelector('.blogPosts') to create a variable called blogContainer
let blogContainer = document.querySelector(".blogPosts");
console.log(blogContainer);

// 3. Use document.querySelectorAll('.blogArticle') to create variable called myArticles
let myArticles = document.querySelectorAll('.blogArticle');
console.log(myArticles);

blogContainer.classList.add("currentBlog");

for (let i = 0; i < myArticles.length; i++) {
    myArticles[i].classList.add("currentBlog");
}