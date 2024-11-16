const jokes = [
    "★ Why did the scarecrow win an award? Because he was outstanding in his field ★",
    "★ Why should you never trust an atom? Because they make up everything ★",
    "★ How does a penguin build its house? Igloos it together ★",
    "★ A dung beetle walks into a bar and asks 'Is this stool taken?' ★",
    "★ What do you call a cow with a twitch? Beef jerky ★",
];

function getRandomJoke() {
    return new Promise((resolve, reject) => {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const joke = jokes[randomIndex];
        setTimeout(() => {
            resolve(joke);
        }, 1000);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    getRandomJoke().then(function(joke) {
        document.getElementById('joke').innerText = joke;
    }).catch(function(error) {
        console.warn('Error fetching joke:', error);
    });
});