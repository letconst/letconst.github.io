/**
 * ページ上のすべての外部リンクに「target="_blank"」属性を設定する
 */
const addBlankTargetToExternalLinks = () => {
    const externalLinks = document.querySelectorAll(`a[href^="http"]:not([href*="${ location.hostname }"])`);

    for (const link of externalLinks) {
        link.setAttribute('target', '_blank');
    }
};

/**
 * 画面内に表示された下線付きヘッダーにアニメーションclassを付与する
 * @param {HTMLElement} targetElem アニメーションclassを付与する対象の要素
 */
const headerAnimationOnInView = (targetElem) => {
    const windowHeight = window.innerHeight;
    const elemTop      = targetElem.getBoundingClientRect().top;
    const elemBottom   = elemTop + targetElem.offsetHeight;

    const isTargetInView = (elemTop <= windowHeight) && (elemBottom >= 0);

    if (isTargetInView) {
        targetElem.classList.add('js-animated');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    addBlankTargetToExternalLinks();

    const underlineHeaders = document.querySelectorAll('.main-content h2');

    // 下線付きヘッダーのアニメーショントリガー
    window.addEventListener('scroll', () => {
        underlineHeaders.forEach((elem) => {
            headerAnimationOnInView(elem);
        });
    });
});
