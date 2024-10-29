function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const hobbies = document.getElementById("hobbies").value;
  const aboutMe = document.getElementById("aboutMe").value;
  const photo = document.getElementById("photo").value;

  // Save text data to localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("address", address);
  localStorage.setItem("education", education);
  localStorage.setItem("skills", skills);
  localStorage.setItem("hobbies", hobbies);
  localStorage.setItem("aboutMe", aboutMe);

  // Save image data as a Base64 URL in localStorage (temporary solution)
  if (photo) {
    const reader = new FileReader();
    reader.onload = function(e) {
      localStorage.setItem("photo", e.target.result); // Save Base64 string
    };
    reader.readAsDataURL(photo);
  }

  return true; // Submit the form
}


window.onload = function() {
  if (window.location.pathname.includes("resume.html")) {
      document.getElementById("displayName").innerText = localStorage.getItem("name");
      document.getElementById("displayEmail").innerText = localStorage.getItem("email");
      document.getElementById("displayPhone").innerText = localStorage.getItem("phone");
      document.getElementById("displayAddress").innerText = localStorage.getItem("address");
      document.getElementById("displayEducation").innerText = localStorage.getItem("education");
      document.getElementById("displaySkills").innerText = localStorage.getItem("skills");
      document.getElementById("displayHobbies").innerText = localStorage.getItem("hobbies");
      document.getElementById("displayAboutMe").innerText = localStorage.getItem("aboutMe");

      // Retrieve and display the photo if it exists
      const photoData = localStorage.getItem("photo");
      if (photoData) {
          document.querySelector(".profile-pic").src = photoData;
      }
  }
};
