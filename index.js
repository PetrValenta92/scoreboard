let homePoints = 0
let guestPoints = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

homeEl.textContent = homePoints
guestEl.textContent = guestPoints

function homePlusTwoPoints() {
    homePoints += 2
    homeEl.textContent = homePoints 
}

function homePlusThreePoints() {
    homePoints += 3
    homeEl.textContent = homePoints 
}

function homePlusFivePoints() {
    homePoints += 5
    homeEl.textContent = homePoints 
}

function guestPlusTwoPoints() {
    guestPoints += 2
    guestEl.textContent = guestPoints 
}

function guestPlusThreePoints() {
    guestPoints += 3
    guestEl.textContent = guestPoints 
}

function guestPlusFivePoints() {
    guestPoints += 5
    guestEl.textContent = guestPoints 
}
