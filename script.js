
const cards = document.querySelectorAll("[data-job-card]");

const total = document.getElementById("total");
const interviews = document.getElementById("interviews");
const rejected = document.getElementById("rejected");

const allBtn = document.getElementById("all");
const interviewFilter = document.getElementById("interviews-filter");
const rejectedFilter = document.getElementById("rejected-filter");

const jobCount = document.getElementById("job-count");


cards.forEach(card => {

    const interviewBtn = card.querySelector('[data-action="interview"]');
    const rejectedBtn = card.querySelector('[data-action="rejected"]');
    const status = card.querySelector("[data-status]");

    interviewBtn.addEventListener("click", function () {

        status.innerText = "Applied";
        status.className = "inline-block w-fit bg-green-200 text-green-800 p-2 rounded";

        updateCount();
    });

    rejectedBtn.addEventListener("click", function () {

        status.innerText = "Rejected";
        status.className = "inline-block w-fit bg-red-200 text-red-800 p-2 rounded";

        updateCount();
    });
});


function updateCount() {

    let interview = 0;
    let reject = 0;

    cards.forEach(card => {

        const status = card.querySelector("[data-status]").innerText;

        if (status === "Applied") {
            interview++;
        }

        else if (status === "Rejected") {
            reject++;
        }
    });

    total.innerText = cards.length;
    interviews.innerText = interview;
    rejected.innerText = reject;
}

// All button
allBtn.addEventListener("click", function () {

    cards.forEach(card => {
        card.style.display = "block";
    });

    jobCount.innerText = cards.length + " Jobs";
});

// Interview filter
interviewFilter.addEventListener("click", function () {

    let count = 0;

    cards.forEach(card => {

        const status = card.querySelector("[data-status]").innerText;

        if (status === "Applied") {
            card.style.display = "block";
            count++;
        }
        else {
            card.style.display = "none";
        }
    });

    jobCount.innerText = count + " Jobs";
});


rejectedFilter.addEventListener("click", function () {

    let count = 0;

    cards.forEach(card => {

        const status = card.querySelector("[data-status]").innerText;

        if (status === "Rejected") {
            card.style.display = "block";
            count++;
        }
        else {
            card.style.display = "none";
        }
    });

    jobCount.innerText = count + " Jobs";
});


updateCount();
