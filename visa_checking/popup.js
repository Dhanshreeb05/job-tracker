// This script runs when the popup is opened
document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the button and result container
    const checkVisaBtn = document.getElementById("checkVisaBtn");
    const resultDiv = document.getElementById("result");
    const statusMessage = document.getElementById("statusMessage");
    
    // Get the current tab information
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const currentTab = tabs[0];
      
      // Add click event listener to the button
      checkVisaBtn.addEventListener("click", function() {
        // For now, just display a placeholder message
        resultDiv.innerHTML = `
          <p style="margin-top: 15px; padding: 10px; background-color: #FFF9C4; border-radius: 4px;">
            <strong>Demo Result:</strong> This job posting appears to 
            <span style="color: green; font-weight: bold;">mention visa sponsorship</span>.
          </p>
        `;
        
        // In the future, this is where you'd call your GraphQL API
      });
    });
  });