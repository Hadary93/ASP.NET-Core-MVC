
function wordClicked(td) {

    if (td.classList.contains("selectedItem")) return;

    td.classList.remove("btn-success")
    td.classList.add("btn-secondary")
    td.classList.add("selectedItem")
    // Update the HTML content in the answer row
    const answerRow = document.getElementById("answerDiv");


    // Create a button element
    const newA = document.createElement("a");
    newA.innerText = AddSpaceOrNo(td.innerText) + ' '; // Set the text content of the button
    newA.setAttribute("itemId", td.getAttribute("itemId"))

    newA.classList.add("answerItem")
    //newA.classList.add("delete")
    newA.addEventListener("click", function () {
        AnswerClicked(newA);
    });
    // Append the cell to the row
    answerRow.appendChild(newA);


    const corretOrWrong = EvaluateAnswer(td.innerText)

    newA.classList.add(corretOrWrong);

}

function AnswerClicked(a) {

    const germanItems = document.getElementsByClassName("germanItem");


    Array.from(germanItems).forEach(x => {
        if (x.getAttribute("itemId") == a.getAttribute("itemId")) {
            x.classList.add("btn-success")
            x.classList.remove("btn-secondary")
            x.classList.remove("selectedItem")
        }
    })

    let div = a.parentNode

    div.removeChild(a);
}



function EvaluateAnswer(selectedWord) {

    const answerButtons = document.getElementById("answerDiv").querySelectorAll("a");

    let result = ""

    // Iterate through each button element
    answerButtons.forEach(a => {
        // Perform some action for each button
        result = result + a.innerText + " "
    });

    const germanText = document.getElementById("germanText").innerText;

    var answerBit = result.trim();
    var germanBit = germanText.substring(0, answerBit.length);


    if (answerBit === germanBit) {

  

        if (germanText === answerBit) {

            const sucessAlert = Array.from(document.getElementsByClassName("alert-success"));

            sucessAlert.forEach(x => x.removeAttribute("hidden"))

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

        return "btn-outline-success"
    }
    return "btn-outline-danger"
}

function AddSpaceOrNo(word) {
    switch (word) {
        //case ",":
        //    return word;
        //case ".":
        //    return word;
        //case ":":
        //    return word;
        default:
            return " " + word
    }
}
