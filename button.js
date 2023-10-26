function downloadResume() {
    // Define the URL of your resume
    var resumeUrl = "https://drive.google.com/uc?export=download&id=192eoX4BAtJtataTiFsRfjLr41fhAQedY";
    
    // Create a hidden link element to trigger the download
    var downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = "Aani_Joy_Resume.pdf";

    // Trigger a click event on the hidden link
    downloadLink.click();
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the download button element by its ID
    var downloadButton = document.getElementById("downloadButton");

    // Add a click event listener to the button, calling the downloadResume function
    downloadButton.addEventListener("click", downloadResume);
});
