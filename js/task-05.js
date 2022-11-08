const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.output.textContent = event.currentTarget.value;
};

refs.input.addEventListener('input', () => {
    if (refs.input.value) {
      refs.output.textContent = refs.input.value;
    } else {
      refs.output.textContent = "Anonymous";
    }
  });