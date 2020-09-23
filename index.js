let bubbleIsOpened;
let openedBubble;

function closeBubbleArrowOnClick() {
    hideContent(openedBubble);
    removeOpenedClasses(openedBubble);
    let inspirations = openedBubble.getElementsByClassName('bubble-inscription-opened');
    removeOpenedClassesForCollection(inspirations);
    doAfter(function () {
        removeHidedFromBubbles();
        bubbleIsOpened = false;
    }, 500);
}

function bubbleOnClick(bubble) {
    if (bubbleIsOpened)
        return;

    setOpenedClasses(bubble);
    let inspirations = bubble.getElementsByClassName('bubble-inscription');
    setOpenedClassesForCollection(inspirations);

    openedBubble = bubble;
    bubbleIsOpened = true;

    hideNotOpenedBubbles();
    doAfter(function () {
        renderContent(openedBubble);
    }, 1500);

}

function getAllNotOpenedBubbles() {
    return document.getElementsByClassName("bubble");
}

function hideNotOpenedBubbles() {
    let notOpenedBubbles = getAllNotOpenedBubbles();
    for (let bubble of notOpenedBubbles) {
        bubble.classList.add('bubble-hided');
    }
}

function removeHidedFromBubbles() {
    removeClassFromCollection(getAllNotOpenedBubbles(), 'bubble-hided');
}

function renderContent(elem) {
    let contents = elem.getElementsByClassName('content');
    for (let content of contents)
        content.hidden = false;
}

function hideContent(elem) {
    let contents = elem.getElementsByClassName('content');
    for (let content of contents)
        content.hidden = true;
}

function doAfter(func, delayInMilliseconds) {
    setTimeout(func, delayInMilliseconds);
}


