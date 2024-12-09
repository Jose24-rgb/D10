let searchJobs = (queryLocation, queryTitle) => {
  let results = {
    results: [],
    count: 0
  };
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    let currentJobLocation = job.location.toLowerCase();
    let currentJobTitle = job.title.toLowerCase();
    let queryTitleLower = queryTitle.toLowerCase();
    let queryLocationLower = queryLocation.toLowerCase();
    if (
      currentJobLocation.includes(queryLocationLower) &&
      currentJobTitle.includes(queryTitleLower)
    ) {
      results.results.push(job);
      results.count++;
    }
  }
  return results;
};
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  { title: "Customer Service - Cloud Video Production", location: "NZ, Auckland" },
  { title: "Commissioning Machinery Assistant (CMA)", location: "US, IA, Wever" },
  { title: "Account Executive - Washington DC", location: "US, DC, Washington" },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  { title: "Lead Guest Service Specialist", location: "US, CA, San Francisco" },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  { title: "Customer Service Associate - Part Time", location: "US, AZ, Phoenix" },
  { title: "ASP.net Developer Job opportunity at United States, New Jersey", location: "US, NJ, Jersey City" },
  { title: "Talent Sourcer (6 months fixed-term contract)", location: "GB, LND, London" },
  { title: "Applications Developer, Digital", location: "US, CT, Stamford" },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  { title: "VP of Sales - Vault Dragon", location: "SG, 01, Singapore" },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  { title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only", location: "GB, SOS, Southend-on-Sea" },
  { title: "Visual Designer", location: "US, NY, New York" },
  { title: "Process Controls Engineer - DCS PLC MS Office - PA", location: "US, PA, USA Northeast" },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  { title: "Vice President, Sales and Sponsorship (Businessfriend.com)", location: "US, CA, Carlsbad" },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  { title: "HAAD/DHA Licensed Doctors Opening in UAE", location: "AE, AZ, Abudhabi" },
  { title: "Talent Management Process Manager", location: "US, MO, St. Louis" },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  { title: "Customer Service Technical Specialist", location: "US, MA, Waltham" },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  { title: "English Teacher Abroad", location: "US, NY, Saint Bonaventure" }
];


const updateList = (results) => {
  let ul = document.getElementById("results");
  ul.innerHTML = "";
  if (results.count === 0) {
    const li = document.createElement("li");
    li.textContent = "No jobs found";
    ul.appendChild(li);
  } else {
    results.results.forEach((job) => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = "#";
      a.textContent = job.title + " - " + job.location;
      a.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Redirecting to: " + job.title + " - " + job.location);
      });

      li.appendChild(a); 
      ul.appendChild(li);
    });
  }
};


const searchOnClick = () => {
  let titleValue = document.querySelector("input#title").value;
  let locationValue = document.querySelector("input#location").value;
  const results = searchJobs(locationValue, titleValue);
  updateList(results);
};


const cancelSearch = () => {
  document.getElementById("title").value = "";
  document.getElementById("location").value = "";
  document.getElementById("results").innerHTML = "";
};


function redirectToPage(page) {
  window.location.href = page;
}

function redirectToPage(page) {
  window.location.href = page;
}

function redirectToPage(page) {
  window.location.href = page;
}

function redirectToPage(page) {
  window.location.href = page;
}


document.querySelectorAll('.header-buttons button').forEach((button) => {
  button.addEventListener('click', () => {
    let page;
    const buttonText = button.textContent.trim();
    if (button.id === 'authButton') {
      handleLogin();
      return;
    }
    switch (buttonText) {
      case "Post Job":
        page = "postJob.html"; 
        break;
      case "Search CV":
        page = "searchCVs.html";
        break;
      case "Products":
        page = "products.html";
        break;
      case "Resources":
        page = "resources.html"; 
        break;
      case "Support Center":
        page = "supportCenter.html";
        break;
      case "Looking for work":
        page = "lookingForWork.html"; 
        break;
      default:
        page = "#"; 
    }
    redirectToPage(page);
  });
});
function handleLogin() {
  alert('Login functionality not implemented yet!');
}


document.querySelector('header h1').addEventListener('click', () => {
  const page = "homePage.html"; 
  redirectToPage(page);
});


function changeButtonColor(button) {
  button.classList.toggle('clicked');
}


function triggerFileInput() {
  document.getElementById('photoUpload').click();
}
function uploadPhoto() {
  var fileInput = document.getElementById('photoUpload');
  var uploadStatus = document.getElementById('uploadStatus');
  var uploadedPhoto = document.getElementById('uploadedPhoto');
  if (fileInput.files && fileInput.files[0]) {
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      uploadedPhoto.style.display = 'block';
      uploadedPhoto.src = event.target.result;
      uploadStatus.textContent = 'Photo uploaded successfully!';
      uploadStatus.style.color = 'green';
    };
    reader.readAsDataURL(file);
  } else {
    uploadStatus.textContent = 'Please select a photo to upload.';
    uploadStatus.style.color = 'red';
  }
}


function showMoreComments() {
  alert("Non ci sono altri commenti da mostrare!");
}