document.getElementById('travel-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const nationality = document.getElementById('nationality').value;
    const timeSlot = document.getElementById('time-slot').value;
    const paymentOption = document.getElementById('payment-option').value;

    let totalCost;
    if (nationality === 'indian') {
        totalCost = 12000;
    } else if (nationality === 'foreigner') {
        totalCost = 50000;
    }

    console.log(`Name: ${name}`);
    console.log(`Gender: ${gender}`);
    console.log(`Nationality: ${nationality}`);
    console.log(`Time Slot: ${timeSlot}`);
    console.log(`Payment Option: ${paymentOption}`);
    console.log(`Total Cost: ${totalCost}`);

    document.getElementById('total-cost').innerHTML = `Total Cost: ${totalCost}`;
});