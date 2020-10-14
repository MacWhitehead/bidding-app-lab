const LOCAL_STORAGE_BIDS_KEY = 'bids';
const inputBid1 = document.querySelector("[data-bidder1]");
const inputBid2 = document.querySelector("[data-bidder2]");
const bidForm1 = document.querySelector("[data-form1]");
const bidForm2 = document.querySelector("[data-form2]");
const bidButton1 = document.querySelector("[data-submit-1]");
const bidButton2 = document.querySelector("[data-submit-2]");
const displayBids = document.getElementById("displayBids");

let bidList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_BIDS_KEY)) || [];

renderBids();

function save() {
    localStorage.setItem(LOCAL_STORAGE_BIDS_KEY, JSON.stringify(bidList));
}

function renderBids() {
    let bidsHTML = '';
    bidList.forEach(bid => {
        bidsHTML += `<li> ${bid} </li>`;
    });
    displayBids.innerHTML = bidsHTML;
};

bidForm1.addEventListener('submit', event => {
    event.preventDefault();
    const bidValue = inputBid1.value
    if (bidValue == null || bidValue === '') {
        return
    }
    bidForm1.reset();
    bidList.push('Bidder 1 bids: ' + bidValue);
    save();
    renderBids()

})

bidForm2.addEventListener('submit', event => {
    event.preventDefault();
    const bidValue = inputBid2.value
    if (bidValue == null || bidValue === '') {
        return
    }
    bidForm2.reset();
    bidList.push('Bidder 2 bids: ' + bidValue);
    save();
    renderBids()
})

