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

function addDrink() {
    let type = document.getElementById("drinkType").value;
    let amount = document.getElementById("drinkAmount").value;
    let customAmount = document.getElementById("customAmount").value;

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
