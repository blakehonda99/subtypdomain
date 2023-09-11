// script.js
function generateLinks() {
    var driveLink = document.getElementById("driveLink").value;
    var fileId = extractFileId(driveLink);

    if (fileId) {
        var downloadLink = "https://docs.google.com/uc?export=download&id=" + fileId;
        var viewLink = "https://docs.google.com/uc?export=view&id=" + fileId;

        document.getElementById("downloadLink").href = downloadLink;
        document.getElementById("viewLink").href = viewLink;
    } else {
        alert("Invalid Google Drive link. Please provide a valid link.");
    }
}

function extractFileId(driveLink) {
    var match = driveLink.match(/\/(d|spreadsheets)\/([^/]+)\//);
    if (match && match[2]) {
        return match[2];
    }
    return null;
}

document.getElementById("generateButton").addEventListener("click", generateLinks);
