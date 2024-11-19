function hundleApi(event) {
  event.preventDefault();
  let form = document.querySelector("#formInput");
  console.log(form.value);
  let poemGeneratingPlace = document.querySelector("#generatingPlace");
  poemGeneratingPlace.innerHTML = form.value;
}

let buttonInput = document.querySelector("#submitInput");
buttonInput.addEventListener("click", hundleApi);
