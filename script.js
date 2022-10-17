
const TAGS_COUNT = 10;
const EXTRA_OFFSET = 20;
const container = document.querySelector('.tags-container');
const overflowWrapper = document.querySelector('.overflow-wrapper');
function initialise() {
    const someRandomTags = generateRandomTexts(TAGS_COUNT);
     for(let index = 0; index < TAGS_COUNT; index++){
        const tag = document.createElement('DIV');
        tag.classList.add('tags');
        tag.textContent = `${someRandomTags[index]}  ${index + 1}`;
        container.append(tag)
     }
}

function calculateTagsOrientation(extraOffset = 0) {
    const tags = document.querySelectorAll('.tags');
    let totalOverFlowingElements = [];
    const containerLength = container.clientWidth;
    // console.log(`container info: `, container.offsetWidth, container.clientWidth, container.offsetLeft);

    tags.forEach(tag => {
        // console.log(` length of ${tag.textContent} is ${tag.offsetLeft}`);
        const offsetLeft = tag.offsetLeft + extraOffset;
        if (offsetLeft > containerLength) {
            totalOverFlowingElements.push(tag);
        }
    });
    console.log(`items overflowed: `, totalOverFlowingElements.length);
    if(totalOverFlowingElements.length > 0){
        buildOverFlowingElements(totalOverFlowingElements.length);
    }
}

function buildOverFlowingElements(count) {
    const overflowingCount = document.createElement('DIV');
    overflowingCount.textContent = `+${count}`;
    overflowingCount.classList.add('overflowing-count');
    overflowWrapper.append(overflowingCount);
}

function generateRandomTexts(count){
    const texts =[];
    for (let index = 0; index < count; index++) {
        texts.push(getSomeRandomTexts());
    }
    return texts;
}

function getSomeRandomTexts() {
    const stringPool = `abcdefghijklmnopqrstuvwxyz123456789`;
    const startIndex = getRandomNumber(0, stringPool.length - 2);
    const endIndex = getRandomNumber(startIndex, stringPool.length - 1);
    return stringPool.substring(startIndex, endIndex);
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + max;
}

initialise();
calculateTagsOrientation(EXTRA_OFFSET);