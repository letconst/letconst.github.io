/**
 * ページ上のすべての外部リンクに「target="_blank"」属性を設定する
 */
const addBlankTargetToExternalLinks = () => {
    const externalLinks = document.querySelectorAll(`a[href^="http"]:not([href*="${ location.hostname }"])`);

    for (const link of externalLinks) {
        link.setAttribute('target', '_blank');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    addBlankTargetToExternalLinks();
});
