function showRegister(){
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
}

function register(){
    localStorage.setItem("username", regUser.value);
    localStorage.setItem("password", regPass.value);
    alert("Register berhasil");
    location.reload();
}

function login(){
    if(
        loginUser.value === localStorage.getItem("username") &&
        loginPass.value === localStorage.getItem("password")
    ){
        loginPage.style.display = "none";
        musicPage.style.display = "block";
    }else{
        alert("Login gagal");
    }
}

/* SEARCH + ENTER */
function handleSearch(event){
    if(event.key === "Enter" || event.type === "keyup"){
        searchMusic();
    }
}

function searchMusic(){
    let keyword = searchInput.value.toLowerCase();
    let cards = document.querySelectorAll(".card");
    let found = false;

    cards.forEach(card => {
        let title = card.dataset.title;
        let artist = card.dataset.artist;

        if(title.includes(keyword) || artist.includes(keyword)){
            card.style.display = "block";
            found = true;
        }else{
            card.style.display = "none";
        }
    });

    notFound.style.display = found ? "none" : "block";
}