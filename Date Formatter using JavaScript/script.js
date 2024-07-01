const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const currentDate =new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth() +1;
const year = currentDate.getFullYear();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const formattedDate = `${date}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
    switch(dateOptionsSelectElement.value){
    
    case "yyyy-mm-dd":
        currentDateParagraph.textContent = `${year}-${month}-${date}`
        break;
    case "mm-dd-yyyy-h-mm":
        currentDateParagraph.textContent = `${month}-${date}-${year}-${hours} Hours ${minutes} Minutes`;
        break;

    default:
        currentDateParagraph.textContent = formattedDate;
}
});



