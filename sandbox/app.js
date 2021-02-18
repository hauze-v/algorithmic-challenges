console.log("Starting");
let image;

fetch(
  "https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg"
)
  .then((response) => {
    console.log("It worked :)");
    return response.blob();
  })
  .then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
    console.log("All done!");
  })
  .catch((error) => {
    console.log(
      "There has been a problem with your fetch operation: " + error.message
    );
  });
