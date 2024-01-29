function updateHtmlContent(word) {

        let color = EvaluateAnswer(word);

        // Update the HTML content in the answer row
        const answerRow = document.getElementById("answer");
        const wordsRow = document.getElementById("words");

        // Create a button element
        const button = document.createElement("button");
        button.textContent = word; // Set the text content of the button
        button.style.background = color;

        // Add an event listener or any other attributes to the button if needed
        button.addEventListener("click", buttonClickHandler);

        // Create a table cell (<td>) to hold the button
        const cell = document.createElement("td");

        // Append the button to the cell
        cell.appendChild(button);

        // Append the cell to the row
        answerRow.appendChild(cell);

        wordsRow.removeChild(document.getElementById(word).parentNode)

    }

    // Define the event listener function
    function buttonClickHandler() {
        let color = EvaluateAnswer(this.textContent);

        const answerRow = document.getElementById("answer");
        const wordsRow = document.getElementById("words");


        // Create a button element
        const button = document.createElement("button");
        button.textContent = this.textContent; // Set the text content of the button



        // Add an event listener or any other attributes to the button if needed
        button.addEventListener("click", buttonClickHandler);

        // Create a table cell (<td>) to hold the button
        const cell = document.createElement("td");

        // Append the button to the cell
        cell.appendChild(button);



        if (this.parentNode.parentNode === answerRow) {
                // Append the cell to the row
                wordsRow.appendChild(cell);

                answerRow.removeChild(this.parentNode)
        }else {

            button.style.background = color;
            // Append the cell to the row
            answerRow.appendChild(cell);

            wordsRow.removeChild(this.parentNode)
        } 
      
    }

function EvaluateAnswer(selectedWord) {

     

        const answerButtons = document.getElementById("answer").querySelectorAll("button");

            let result = ""

        // Iterate through each button element
        answerButtons.forEach(button => {
                // Perform some action for each button
                result = result + button.innerText.trim() + " "
            });

            const germanText = document.getElementById("germanText").value.trim();

            var answerBit = result + selectedWord;
            var germanBit = germanText.substring(0,answerBit.length);

    if (answerBit === germanBit) {



             if(germanText === answerBit){

                // Make an AJAX request to update the database
                $.ajax({
                    type: "POST",  // Use POST or another HTTP method based on your requirements
                    url: "/Sentences/UpdateDatabase",  // Replace with the actual URL of your server-side action method
                    data: {
                        id: Model.Id,
            practiced: "yes"
                },
            success: function (response) {
                console.log("Database updated successfully");
                },
            error: function (error) {
                console.error("Error updating database:", error);
                }
                });
            }

            return "lightgreen"
        }


            return "red"
    }

          function updateCircleClass() {
                // Make an AJAX request to get the updated practiced value from the server
              fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        const circle = document.getElementById('circle');
                        circle.className = 'circle ' + data.practicedValue;
                    })
                    .catch(error => {
                        console.error('Error updating circle:', error);
                    });
          }

            // Update the circle every 5 seconds (adjust the interval as needed)
            setInterval(updateCircleClass, 1000);

        function handleClick() {
            // Your code to handle the click event goes here
            var germanTextElement = document.getElementById('germanTextDiv');
        
            // Remove the 'hidden' attribute
            germanTextElement.removeAttribute('hidden');
        }


        // Function to handle double-click event
function handleDoubleClick() {
                $('#germanTextInput').removeAttr('readonly');
}


