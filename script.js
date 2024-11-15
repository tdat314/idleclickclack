let coins = 0;          // Total coins
let rate = 1;           // Coins collected per second
let upgradeCost = 10;   // Cost for the next upgrade

const coinsDisplay = document.getElementById('coins');
const rateDisplay = document.getElementById('rate');
const upgradeCostDisplay = document.getElementById('upgrade-cost');
const upgradeBtn = document.getElementById('upgrade-btn');

// Function to update the display
function updateDisplay() {
    coinsDisplay.textContent = coins;
    rateDisplay.textContent = rate;
    upgradeCostDisplay.textContent = upgradeCost;
    upgradeBtn.disabled = coins < upgradeCost; // Disable button if not enough coins
}

// Function to collect coins over time
function collectCoins() {
    coins += rate;
    updateDisplay();
}

// Function to buy an upgrade
function buyUpgrade() {
    if (coins >= upgradeCost) {
        coins -= upgradeCost;
        rate += 1; // Increase collection rate
        upgradeCost = Math.ceil(upgradeCost * 1.5); // Increase upgrade cost
        updateDisplay();
    }
}

// Attach event listener to the upgrade button
upgradeBtn.addEventListener('click', buyUpgrade);

// Start the idle coin collection
setInterval(collectCoins, 1000);

// Initial display update
updateDisplay();
