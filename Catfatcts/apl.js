
// let fact = document.querySelector("#fact");

// // let promise = fetch(URL)

// const getData = async () =>{
    //     console.log("getting data....")
    //     let response = await fetch(URL);
    //     console.log(response);   //JSON format
    //     let data = await response.json();
    //     console.log(data[0]);
    //     fact.innerText = data.data[0];
    
    // }   
    // getData();
    
const FACT_URL = "https://meowfacts.herokuapp.com";
const CAT_URL = "https://cataas.com/cat?timestamp=";

const fact = document.querySelector("#fact");
const btn = document.querySelector("#btn");
const loader = document.querySelector("#loader");
const img = document.querySelector("#catImg");
const toggleBtn = document.querySelector("#themeToggle");

const getData = async () => {
    loader.style.display = "block";
    fact.classList.add("fade");

    try {
        let response = await fetch(FACT_URL);
        let data = await response.json();

        setTimeout(() => {
            fact.innerText = data.data[0];
            fact.classList.remove("fade");
            loader.style.display = "none";
        }, 500);

        // Refresh cat image
        img.src = CAT_URL + new Date().getTime();

    } catch (error) {
        fact.innerText = "Failed to load fact 😿";
        loader.style.display = "none";
    }
};

btn.addEventListener("click", getData);

/* Dark Mode Toggle */
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.innerText = "☀ Light Mode";
    } else {
        toggleBtn.innerText = "🌙 Dark Mode";
    }
});

