function normalURL(input) {
    if (!input.startsWith("http")) {
        return "https://" + input;
    }
    return input;
}
function isImageURL(url) {
    return /\.(png|jpg|jpeg|gif|webp|ico|svg)$/i.test(url);
}
function getGoogleFavicons(url, size = 128) {
    try {
        const parsed = new URL(url);
        return `https://www.google.com/s2/favicons?domain=${parsed.hostname}&sz=${size}`;
    } catch {
        return null;
    }
}
function setFavicon(href) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
    }
    link.href = href;
}
document.getElementById("load").addEventListener("click", () => {
    const raw = document.getElementById("siteinput").value.trim();
    if (!raw) return;
    const normalindeed = normalURL(raw);
    let faviconURL = null;
    if (isImageURL(normalindeed)) {
        faviconURL = normalindeed;
    } else {
        faviconURL = getGoogleFavicons(normalindeed, 128)
    }
    if (!faviconURL) {
        document.getElementById("error") = "Invalid / Error"
    return; }
    setFavicon(faviconURL);
    document.getElementsByTagName('img').src = faviconURL;
})