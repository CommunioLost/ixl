const form = document.getElementById('uv-form');
const address = document.getElementById('uv-address');
const splash = document.getElementById('splash');

const splashes = ["no corners allowed.", "stay hidden.", "free the web.", "devil bear is watching."];
splash.innerText = splashes[Math.floor(Math.random() * splashes.length)];

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // Default search engine is Google
    const url = search(address.value, 'https://www.google.com/search?q=%s');
    
    // Encodes the URL for Ultraviolet
    const encodedUrl = __uv$config.encodeUrl(url);
    
    // Store and redirect to the proxy frame
    sessionStorage.setItem("encodedUrl", encodedUrl);
    window.location.href = "embed.html";
});
