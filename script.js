

function toggleMenu() {
    document.querySelector('.hamburger').classList.toggle('open');
}


document.getElementById("form-page").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission
    
    // Create a FormData object from the form
    const formData = new FormData(event.target);
  
    // Convert FormData to a plain object
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    console.log(formObject)

    // Send data to Azure Web Service (Azure Function or App Service)
    fetch("https://<your-azure-web-service-url>/api/your-endpoint", {
      method: "POST", // or "PUT", depending on your API
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject), // Convert form data to JSON
    })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      document.getElementById("form-page").reset(); 
      // Handle success (e.g., display a success message)
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Something went wrong")
      // Handle error (e.g., display an error message)
    });

    
  });  


  
