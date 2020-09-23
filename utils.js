let map = [
    ['bubble', 'bubble-opened'],
    ['career', 'career-opened'],
    ['education', 'education-opened'],
    ['education-work', 'education-work-opened'],
    ['seminars', 'seminars-opened'],
    ['bubble-inscription', 'bubble-inscription-opened']
];

function setOpenedClasses(bubble) {
    for (let pair of map) {
        bubble.classList.replace(pair[0], pair[1]);
    }
}

function setOpenedClassesForCollection(htmlCollection) {
    let elements = htmlCollectionToArray(htmlCollection);
    for (let element of elements) {
        setOpenedClasses(element);
    }
}

function removeOpenedClasses(bubble) {
    for (let pair of map) {
        bubble.classList.replace(pair[1], pair[0]);
    }
}

function removeOpenedClassesForCollection(htmlCollection) {
    let elements = htmlCollectionToArray(htmlCollection);
    for (let element of elements) {
        removeOpenedClasses(element);
    }
}

function removeClassFromCollection(htmlCollection, className) {
    let elements = htmlCollectionToArray(htmlCollection);
    for (let element of elements) {
        element.classList.remove(className);
    }
}

function htmlCollectionToArray(htmlCollection) {
    let length = htmlCollection.length;
    let elements = [];
    for (let i = 0; i < length; i++) {
        elements.push(htmlCollection[i]);
    }
    return elements;
}
