let endDate;

do {
  endDate = prompt("Enter End Date for Counter in format (16 May 2023 2:00 PM)");

  // Regular expression to match the expected format
  const dateRegex = /^(\d{1,2}) (\w{3}) (\d{4}) (\d{1,2}):(\d{2}) (AM|PM)$/;

  // Check if the entered value matches the expected format
  if (!dateRegex.test(endDate)) {
    alert("Invalid date format! Please enter the date in the format '16 May 2023 2:00 PM'.");
    continue;
  }

  const [, day, month, year, hour, minute, period] = dateRegex.exec(endDate);

  // Check if the entered day is within the limit of 1-31
  if (parseInt(day) < 1 || parseInt(day) > 31) {
    alert("Invalid day! Please enter a day between 1 and 31.");
    continue;
  }

  // Check if the entered month is within the limit of 1-12
  if (parseInt(month) < 1 || parseInt(month) > 12) {
    alert("Invalid month! Please enter a month between 1 and 12.");
    continue;
  }

  // Additional checks and validations for year, hour, minute, and period can be added here if needed

  // If all validations pass, break out of the loop
  break;

} while (true);

// Use the validated endDate for your countdown timer logic
console.log("Valid end date:", endDate);


// endDate = "19 May 2023 4:00 PM";
const inputs = document.querySelectorAll("input")

document.getElementById("end-date").innerText = endDate;

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000; // difference 


    if (diff < 0) return;

    // days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    // seconds
    inputs[3].value = Math.floor(diff) % 60;
}

clock();

setInterval(() => {
    clock()
}, 1000);

// ...

// Get reference to the reset button
const resetButton = document.getElementById("reset-button");

// Add click event listener to the reset button
resetButton.addEventListener("click", () => {
  location.reload(); // Reload the page
});

// ...



// 1 day=24 hr
// 1 hr =60minutes
// 60 min =3600 sec