const getJokes = async () => {
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        const myJoke = document.querySelector('#myJoke');  // Updated to match HTML
        myJoke.innerHTML = data.value;
    } catch (error) {
        console.error("Error fetching the joke:", error);
    }
};

window.addEventListener("load", () => {
    getJokes();
});
