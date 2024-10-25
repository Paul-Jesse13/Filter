//select all filer buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-class .card");


//Define filterCard function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    //Iterate over each filterable card
    filterableCards.forEach(card => {
        //Add "hide" class to hide initially
        card.classList.add("hide")

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide")
        }
    });
}

//Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards) )