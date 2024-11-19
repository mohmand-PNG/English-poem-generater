function generatePoem(response) {
  console.log(response.data.answer);
  let poem = response.data.answer;
  new Typewriter("#generatingPlace", {
    strings: `${poem}`,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function hundleApi(event) {
  event.preventDefault();
  let form = document.querySelector("#formInput");
  let poemGeneratingPlace = document.querySelector("#generatingPlace");
  let apiKey = `1b099ef35faf21o7cfb3ad6cete3a47b`;
  let prompt = `user instructions: Generate a poem about ${form.value}`;
  let context =
    "you are a romantic poem expert and love to write short poems. your mission is to generate a 4 line poem and seperate each line with <br/>. make sure to follow the user instructions. sign the poem with `Marwa Mohmand AI` inside a <strong></strong> element with purple color.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(generatePoem);
}

let buttonInput = document.querySelector("#submitInput");
buttonInput.addEventListener("click", hundleApi);
