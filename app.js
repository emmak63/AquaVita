function toggleForm() {
    let form = document.getElementById("drinkForm");
    let addDrinkBtn = document.getElementById("addDrinkBtn");

    if (form.style.display === "none") {
        form.style.display = "block";
        addDrinkBtn.style.display = "none"; // Paslēpj pogu
    } else {
        form.style.display = "none";
        addDrinkBtn.style.display = "block";
    }
}

// MODĀLAIS LOGS
function openDrinkModal() {
    document.getElementById("drinkModal").style.display = "block";
}

function closeDrinkModal() {
    document.getElementById("drinkModal").style.display = "none";
}

function selectDrink(drink) {
    document.getElementById("selectedDrink").textContent = drink;
    document.getElementById("selectedDrink").setAttribute("data-value", drink);
    closeDrinkModal();
}

function addDrink() {
    let type = document.getElementById("selectedDrink").getAttribute("data-value");
    let amount = document.getElementById("drinkAmount").value;
    let customAmount = document.getElementById("customAmount").value;

    if (!type) {
        alert("Lūdzu izvēlieties dzēriena veidu!");
        return;
    }

    let finalAmount = customAmount ? customAmount : amount;

    if (!finalAmount || finalAmount <= 0) {
        alert("Lūdzu ievadiet derīgu mililitru daudzumu!");
        return;
    }

    let list = document.getElementById("drinkList");
    let listItem = document.createElement("li");
    listItem.innerHTML = `${type} - ${finalAmount}ml <button class="delete-btn" onclick="removeDrink(this)">✖</button>`;

    list.appendChild(listItem);

    // Parāda dzērienu ar animāciju
    listItem.style.opacity = "0";
    setTimeout(() => {
        listItem.style.opacity = "1";
    }, 10);

    // Paslēpj formu un atgriež pogu
    document.getElementById("drinkForm").style.display = "none";
    document.getElementById("addDrinkBtn").style.display = "block";
}

function removeDrink(button) {
    button.parentElement.remove();
}

let dailyGoal = 0;
let currentIntake = 0;

// Funkcija, lai iestatītu dienas mērķi
document.getElementById("set-goal").addEventListener("click", function () {
    const inputGoal = document.getElementById("daily-goal").value;
    
    if (inputGoal > 0) {
        dailyGoal = parseInt(inputGoal);
        document.getElementById("goal").textContent = dailyGoal;
        document.getElementById("progress-container").style.display = "block";
        document.getElementById("goal-container").style.display = "none"; // Paslēpj mērķa ievadi
    }
});

// Funkcija, lai atjauninātu progresu pēc dzēriena pievienošanas
function updateProgress(ml) {
    currentIntake += ml;
    document.getElementById("progress").textContent = currentIntake;
}

// Atjauno dzēriena pievienošanas loģiku
document.getElementById("add-drink-button").addEventListener("click", function () {
    let selectedMl = parseInt(document.getElementById("drink-amount").value);
    
    if (!isNaN(selectedMl) && selectedMl > 0) {
        updateProgress(selectedMl);
    }
});
