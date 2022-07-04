import browser from "webextension-polyfill";

// On first install, open a new tab with Frontier
browser.runtime.onInstalled.addListener(({ reason }) => {
    console.log("background install done", reason);
});
