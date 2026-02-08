
function updateCards() {
    const name = inputValue("input-name");
    const title = inputValue("input-title");
    const phone = inputValue("input-phone");
    const email = inputValue("input-email");
    const company = inputValue("input-company");
    const github = inputValue("input-github");

    setText(".card-name", name);
    setText(".card-title", title);
    setText(".card-phone", phone);
    setText(".card-email", email);
    setText(".card-company", company);

    // GITHUB
    document.querySelectorAll(".card-github").forEach(link => {
        if (github.trim() !== "") {
            const url = github.startsWith("http")
                ? github
                : "https://github.com/" + github;

            link.textContent = github;
            link.href = url;
        } else {
            link.textContent = "";
            link.removeAttribute("href");
        }
    });
}

function setText(selector, value) {
    document.querySelectorAll(selector).forEach(el => {
        el.textContent = value;
    });
}

function inputValue(id) {
    return document.getElementById(id).value;
}
