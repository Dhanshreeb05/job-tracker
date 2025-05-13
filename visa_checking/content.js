// Very clear logging at the start
console.log("🔍 JOB VISA CHECKER: Content script is running on this page");

// Simplified job page detection function
function detectJobPage() {
  const url = window.location.href.toLowerCase();
  const pageText = document.body.innerText.toLowerCase();
  const pageTitle = document.title.toLowerCase();
  
  // Look for job-related keywords
  const jobKeywords = ["job", "career", "position", "employment", "vacancy"];
  
  // Check URL and title for job keywords
  const urlHasJobKeyword = jobKeywords.some(keyword => url.includes(keyword));
  const titleHasJobKeyword = jobKeywords.some(keyword => pageTitle.includes(keyword));
  
  // Very basic content check
  const contentHasJobKeywords = 
    pageText.includes("job description") || 
    pageText.includes("responsibilities") || 
    pageText.includes("requirements") ||
    pageText.includes("qualifications");
  
  // Log what we found to help with debugging
  console.log("🔍 JOB VISA CHECKER: Detection results:", {
    url: url,
    urlHasJobKeyword: urlHasJobKeyword,
    titleHasJobKeyword: titleHasJobKeyword,
    contentHasJobKeywords: contentHasJobKeywords
  });
  
  // Return true if any detection method succeeds
  return urlHasJobKeyword || titleHasJobKeyword || contentHasJobKeywords;
}

// Also check the page after it's fully loaded (for dynamic content)
window.addEventListener('load', function() {
  console.log("🔍 JOB VISA CHECKER: Page fully loaded, checking for jobpage...");
  const isJobPageAfterLoad = detectJobPage();
  console.log("🔍 JOB VISA CHECKER: Is job page after load?", isJobPageAfterLoad);
  
  if (isJobPageAfterLoad) {
    console.log("✅ JOB VISA CHECKER: JOB PAGE DETECTED AFTER LOAD!");
    
    try {
      chrome.runtime.sendMessage({ 
        action: "jobPageDetected", 
        url: window.location.href 
      });
      console.log("✅ JOB VISA CHECKER: Message sent to background script after load");
    } catch (error) {
      console.error("❌ JOB VISA CHECKER: Error sending message after load:", error);
    }
  }
});