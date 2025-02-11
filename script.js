function updateWidget() {
  const today = new Date();
  const ramadanStart = new Date(today.getFullYear(), 2, 23); // Example: March 23, 2024
  const ramadanEnd = new Date(today.getFullYear(), 3, 20); // Example: April 20, 2024

  // Calculate day number and days left
  let dayNumber = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24)) + 1;
  let daysLeft = Math.floor((ramadanEnd - today) / (1000 * 60 * 60 * 24));

  // Update Ramadan date display
  if (today < ramadanStart) {
    document.getElementById('ramadanDate').innerText = `Ramadan starts in ${daysLeft} days`;
  } else if (today > ramadanEnd) {
    document.getElementById('ramadanDate').innerText = 'Ramadan has ended';
  } else {
    document.getElementById('ramadanDate').innerText = `Day ${dayNumber} of Ramadan`;
  }

  // Example times (replace with dynamic calculation or API call)
  document.getElementById('maghribTime').innerText = '7:12 PM';
  document.getElementById('fairTime').innerText = '4:56 AM';
}

// Initial update
updateWidget();

// Update every 24 hours
setInterval(updateWidget, 86400000);
