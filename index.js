homeScoreEl = document.getElementById("homescore-el")
guestScoreEl = document.getElementById("guestscore-el")

let homeScore = 0
homeScoreEl.textContent = homeScore
let guestScore = 0
guestScoreEl.textContent = guestScore

function add1PointHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function add2PointHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function add3PointHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function add1PointGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function add2PointGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function add3PointGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
