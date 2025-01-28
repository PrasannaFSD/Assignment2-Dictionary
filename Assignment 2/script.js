document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const word = document.getElementById('wordInput').value;
  const resultDiv = document.getElementById('result');

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(data => {
          if (data.title && data.title === "No Definitions Found") {
              resultDiv.innerHTML = "No definitions found. Please try another word.";
          } else {
              const definition = data[0].meanings[0].definitions[0].definition;
              resultDiv.innerHTML = `<strong>${word}:</strong> ${definition}`;
          }
      })
      .catch(error => {
          resultDiv.innerHTML = "An error occurred. Please try again.";
          console.error('Error fetching data:', error);
      });
});
