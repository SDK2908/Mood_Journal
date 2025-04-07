function saveEntry() {
    const mood = document.getElementById("mood").value;
    const note = document.getElementById("note").value;
    const entry = {
      mood: mood,
      note: note,
      date: new Date().toLocaleString()
    };
  
    const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
  
    entries.unshift(entry);
  
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  
    displayEntries();
  
    document.getElementById("note").value = "";
  }
  
  function displayEntries() {
    const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    const container = document.getElementById("saved-entry");
    container.innerHTML = ""; 
  
    entries.forEach(entry => {
      const div = document.createElement("div");
      div.classList.add("entry");
      div.innerHTML = `<strong>${entry.date}</strong><br>Mood: ${entry.mood}<br>Note: ${entry.note}<hr>`;
      container.appendChild(div);
    });
  }
  
  window.onload = function () {
    displayEntries();
  };
  