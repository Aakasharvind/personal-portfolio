document.addEventListener("DOMContentLoaded", function () {
    const blogForm = document.getElementById("blogForm");
    const blogPosts = document.getElementById("blogPosts");

    if (blogForm) {
        blogForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const title = document.getElementById("blogTitle").value;
            const content = document.getElementById("blogContent").value;

            const postDiv = document.createElement("div");
            postDiv.innerHTML = `<h3>${title}</h3><p>${content}</p><hr>`;

            blogPosts.prepend(postDiv);

            document.getElementById("blogTitle").value = "";
            document.getElementById("blogContent").value = "";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.querySelector(".profile-pic");

    profileImage.addEventListener("click", function () {
        alert("Hey! This is Aakash's Professional Portfolio!");
    });
});
