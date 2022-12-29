const seasonalThemeDiv = document.createElement("div");
seasonalThemeDiv.id = "seasonal-theme";
document.body.appendChild(seasonalThemeDiv);

// --------------------------------------------------
// ---------Common for all seasonal themes-----------
// 2 icons for enable theme and disable theme
const seasonalThemeButtonEnabledIcon = `<svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223.9,149.1a7.9,7.9,0,0,1-5.6,9.8l-25.1,6.8,6.7,25a7.9,7.9,0,0,1-5.6,9.8l-2.1.3a8,8,0,0,1-7.7-5.9l-7.9-29.6L136,141.9v46.8l21.7,21.6a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,203.3l-18.3,18.4a8.1,8.1,0,0,1-11.4-11.4L120,188.7V141.9L79.4,165.3l-7.9,29.6a8,8,0,0,1-7.7,5.9l-2.1-.3a7.9,7.9,0,0,1-5.6-9.8l6.7-25-25.1-6.8a8,8,0,1,1,4.2-15.4l29.5,7.9L112,128,71.4,104.6l-29.5,7.9a7.6,7.6,0,0,1-2.1.3,8,8,0,0,1-2.1-15.7l25.1-6.8-6.7-25a8,8,0,0,1,15.4-4.2l7.9,29.6L120,114.1V67.3L98.3,45.7a8.1,8.1,0,0,1,11.4-11.4L128,52.7l18.3-18.4a8.1,8.1,0,0,1,11.4,11.4L136,67.3v46.8l40.6-23.4,7.9-29.6a8,8,0,1,1,15.4,4.2l-6.7,25,25.1,6.8a8,8,0,0,1-2.1,15.7l-2.1-.3-29.5-7.9L144,128l40.6,23.4,29.5-7.9A7.9,7.9,0,0,1,223.9,149.1Z" fill="white"></path></svg>`;
const seasonalThemeButtonDisabledIcon = `<svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223.9,149.1a7.9,7.9,0,0,1-5.6,9.8l-25.1,6.8,6.7,25a7.9,7.9,0,0,1-5.6,9.8l-2.1.3a8,8,0,0,1-7.7-5.9l-7.9-29.6L136,141.9v46.8l21.7,21.6a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,203.3l-18.3,18.4a8.1,8.1,0,0,1-11.4-11.4L120,188.7V141.9L79.4,165.3l-7.9,29.6a8,8,0,0,1-7.7,5.9l-2.1-.3a7.9,7.9,0,0,1-5.6-9.8l6.7-25-25.1-6.8a8,8,0,1,1,4.2-15.4l29.5,7.9L112,128,71.4,104.6l-29.5,7.9a7.6,7.6,0,0,1-2.1.3,8,8,0,0,1-2.1-15.7l25.1-6.8-6.7-25a8,8,0,0,1,15.4-4.2l7.9,29.6L120,114.1V67.3L98.3,45.7a8.1,8.1,0,0,1,11.4-11.4L128,52.7l18.3-18.4a8.1,8.1,0,0,1,11.4,11.4L136,67.3v46.8l40.6-23.4,7.9-29.6a8,8,0,1,1,15.4,4.2l-6.7,25,25.1,6.8a8,8,0,0,1-2.1,15.7l-2.1-.3-29.5-7.9L144,128l40.6,23.4,29.5-7.9A7.9,7.9,0,0,1,223.9,149.1Z" fill="#ccc"></path><path d="M 250 0 L 0 250" stroke="#ccc" stroke-width="15"/></svg>`;

const seasonalThemeToggleButton = document.createElement('button');
seasonalThemeToggleButton.classList.add("md-header__button");
seasonalThemeToggleButton.classList.add("md-icon");
seasonalThemeToggleButton.innerHTML = seasonalThemeButtonEnabledIcon;
seasonalThemeToggleButton.type = "radio";
seasonalThemeToggleButton.addEventListener('click', () => {
    isHidden = !isHidden;
    seasonalThemeToggleButton.innerHTML = isHidden ? seasonalThemeButtonDisabledIcon : seasonalThemeButtonEnabledIcon;
    console.log(isHidden);
});
const headerNav = document.getElementsByClassName("md-header__inner")[0];
console.log(headerNav);
headerNav.appendChild(seasonalThemeToggleButton);
// ---------Common for all seasonal themes--------- END
// ----------------------------------------------------

var isHidden = false;

setInterval(() => {
    if(!isHidden) createSnowflake();
}, 1000);

// Winter Snowflakes theme

const snowflakes = [
    `<circle cx="5" cy="5" r="5" fill="#fff" />`,
    `<path id="snowflake" fill="#fff" d="m21.16 16.13l-2-1.15l.89-.24a1 1 0 1 0-.52-1.93l-2.82.76L14 12l2.71-1.57l2.82.76h.26a1 1 0 0 0 .26-2L19.16 9l2-1.15a1 1 0 0 0-1-1.74L18 7.37l.3-1.11a1 1 0 1 0-1.93-.52l-.82 3L13 10.27V7.14l2.07-2.07a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0l-.65.65V2a1 1 0 0 0-2 0v2.47l-.81-.81a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41L11 7.3v3L8.43 8.78l-.82-3a1 1 0 1 0-1.93.52L6 7.37L3.84 6.13a1 1 0 0 0-1 1.74l2 1.13l-.84.26a1 1 0 0 0 .26 2h.26l2.82-.76L10 12l-2.71 1.57l-2.82-.76A1 1 0 1 0 4 14.74l.89.24l-2 1.15a1 1 0 0 0 1 1.74L6 16.63l-.3 1.11A1 1 0 0 0 6.39 19a1.15 1.15 0 0 0 .26 0a1 1 0 0 0 1-.74l.82-3L11 13.73v3.13l-2.07 2.07a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l.65-.65V22a1 1 0 0 0 2 0v-2.47l.81.81a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.41L13 16.7v-3l2.57 1.49l.82 3a1 1 0 0 0 1 .74a1.15 1.15 0 0 0 .26 0a1 1 0 0 0 .71-1.23L18 16.63l2.14 1.24a1 1 0 1 0 1-1.74Z"></path>`,
];

function createSnowflake() {
    const snowflake = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    snowflake.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    snowflake.classList.add('snowflake');
    var snowflakeRandomIndex = Math.floor(Math.random() * snowflakes.length);
    snowflake.innerHTML = snowflakes[snowflakeRandomIndex];
    snowflake.setAttribute("viewBox", "0 0 25 25");
    snowflake.setAttribute("preserveAspectRatio", "none");
    snowflake.style.width = Math.floor(Math.random() * 6) + 5 + "px";
    snowflake.style.height = Math.floor(Math.random() * 6) + 5 + "px";
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    seasonalThemeDiv.appendChild(snowflake);
    setTimeout(() =>
        snowflake.remove()
    , 15000);
}