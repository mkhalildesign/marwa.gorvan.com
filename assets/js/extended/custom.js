const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a fake noodle? An impasta!",
    "Why did the coffee file a police report? It got mugged.",
    "How does a penguin build its house? Igloos it together."
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