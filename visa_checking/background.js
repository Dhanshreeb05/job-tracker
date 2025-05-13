// Log when the background script initializes
console.log("🔍 JOB VISA CHECKER: Background script initialized");

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Log all received messages to help debugging
  console.log("🔍 JOB VISA CHECKER: Message received:", message);
  console.log("🔍 JOB VISA CHECKER: Message sender:", sender);
  
  if (message.action === "jobPageDetected") {
    console.log("✅ JOB VISA CHECKER: Job page detection confirmed in background script!");
    
    // Set badge text to indicate a job page was detected
    try {
      chrome.action.setBadgeText({ 
        text: "JOB",
        tabId: sender.tab.id
      });
      
      // Set badge background color (green)
      chrome.action.setBadgeBackgroundColor({
        color: "#4CAF50",
        tabId: sender.tab.id
      });
      
      console.log("✅ JOB VISA CHECKER: Badge set for tab", sender.tab.id);
    } catch (error) {
      console.error("❌ JOB VISA CHECKER: Error setting badge:", error);
    }
  }
});

// Log a confirmation that the event listener is set up
console.log("🔍 JOB VISA CHECKER: Message listener registered in background script");