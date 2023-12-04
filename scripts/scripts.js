/* Treshia Mia Castillo

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

let modelName, duration;
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    modelName = document.getElementById("model-text").innerText.replace("Model ", "");
    duration = parseInt(document.getElementById("duration-text").innerText);

    let newTotalCost = 0;
    //check model
    if (modelName === "XYZ") {
        newTotalCost = duration * 100;

    } else if (modelName === "CPRG") {
        newTotalCost = duration * 213;
    }
    // Set the value of the calculated-cost element's innerHTML
    costLabel.innerHTML = newTotalCost.toFixed(2);
}

/****************** model button logic ******************/
document.addEventListener("DOMContentLoaded", function () {
    let modelButton = document.getElementById("model-button");
    function changeModel() {
        let modelTextElement = document.getElementById("model-text");
        // Check the value of the modelName variable and update it accordingly
        if (modelName === "XYZ") {
            modelName = "CPRG";
            modelTextElement.innerHTML = "Model CPRG";
        } else if (modelName === "CPRG") {
            modelName = "XYZ";
            modelTextElement.innerHTML = "Model XYZ";
        }
        // Recalculate the total cost
        recalculate();
    }
    // Attach the event listener
    modelButton.addEventListener("click", changeModel);
});

/****************** duration button logic ******************/
document.addEventListener("DOMContentLoaded", function () {
    let durationButton = document.getElementById("duration-button");

    function changeDuration() {
        let durationTextElement = document.getElementById("duration-text");
        // Prompt the user for a new duration
        let newDuration = prompt("Enter the new duration:");
        // Validate if the user entered a valid number
        if (!isNaN(newDuration) && newDuration !== null) {
            // Update the duration variable and the innerHTML of the duration-text span element
            duration = parseInt(newDuration);
            durationTextElement.innerHTML = duration;

            // Recalculate the total cost
            recalculate();
        } else {
            alert("Please enter a valid number for the duration.");
        }

    }
    // Attach the event listener
    durationButton.addEventListener("click", changeDuration);
});




