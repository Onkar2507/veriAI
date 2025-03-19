function verifyClaim() {
    const claimInput = document.getElementById("claimInput").value.trim();
    if (!claimInput) {
        alert("Please enter data to verify.");
        return;
    }

    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block"; // Ensure result box is always displayed

    const sourcesList = document.getElementById("sourcesList");
    sourcesList.innerHTML = ""; // Clear previous sources

    let truthScore, aiScore, sources;

    // Predefined claim and results
    if (claimInput.toLowerCase() === "covid-19 originated in wuhan") {
        truthScore = 85;
        aiScore = 20;
        sources = [
            { name: "World Health Organization", link: "https://www.who.int" },
            { name: "Centers for Disease Control", link: "https://www.cdc.gov" }
        ];
    } else {
        // Generate random values for unknown claims
        truthScore = Math.floor(Math.random() * 100);
        aiScore = Math.floor(Math.random() * 50);
        sources = [
            { name: "BBC News", link: "https://www.bbc.com/news" },
            { name: "Reuters", link: "https://www.reuters.com" },
            { name: "FactCheck.org", link: "https://www.factcheck.org" }
        ];
    }

    // Update UI with results
    document.getElementById("truthScore").innerText = truthScore;
    document.getElementById("aiScore").innerText = aiScore;
    
    sources.forEach(source => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${source.link}" target="_blank">${source.name}</a>`;
        sourcesList.appendChild(li);
    });
}

function uploadFile() {
    alert("File upload feature is coming soon!");
}

// Allow pressing 'Enter' to verify
function handleKeyPress(event) {
    if (event.key === "Enter") {
        verifyClaim();
    }
}
