const inputDOM = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const blocksArea = document.getElementById('blocks');
const submitGem = document.getElementById('gemination-submit');
const geminationArea = document.querySelector('.gemination-blocks-area');

function queryGemination(str) {
    geminationArea.style.opacity = 1;
    let child = blocksArea.lastElementChild;
    while (child) {
        blocksArea.removeChild(child);
        child = blocksArea.lastElementChild;
    }

    const output = str.split('');

    for (let i = 0; i < output.length; i++ ) {
        const element = document.createElement('span');
        const letter = document.createTextNode(output[i]);
        element.appendChild(letter);
        element.classList.add('block');
        element.addEventListener('click', function() {
            this.classList.toggle('active');
        });
        blocksArea.appendChild(element);
    }
    return output;
}

submitGem.addEventListener('click', function() {
    const hasActive = document.getElementById('blocks').childNodes;
    let output = ""

    for (let i = 0; i < hasActive.length; i++) {
        if (hasActive[i].classList.contains('active')) {
            output += hasActive[i].innerHTML;
            output += hasActive[i].innerHTML;
        } else {
            output += hasActive[i].innerHTML;
        }
    }

    console.log(output);
});


submitBtn.addEventListener("click", () => {
    queryGemination(inputDOM.value.toString());
});

window.addEventListener("keydown", e => {
  if (13 == e.keyCode) {
      queryGemination(inputDOM.value.toString());
  }
});
