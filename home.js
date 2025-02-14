

  fetch("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://khan-1291.github.io/ViraBank/&screenshot=true")
  .then(response => response.json())
  .then(data => {
    let screenshot = data.lighthouseResult.audits["final-screenshot"].details.data;
    document.getElementById("thumb").src = screenshot;
  });
  


        const accordions = document.querySelectorAll(".accordion");

        accordions.forEach((accordion) => {
            accordion.addEventListener("click", function () {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        });
       
        document.getElementById("darkLight").addEventListener("click", function () {
          let currentBackgroundColor = document.body.style.backgroundColor;
      
          if (currentBackgroundColor !== "white") {
              // Switch to Light Mode
              document.body.style.backgroundColor = "white";
      
              document.querySelectorAll(".changeColor").forEach(el => {
                  el.style.color = "black";  // Change text color dynamically
              });
      
              // Change icon to sun ☀️
              document.getElementById("icon").classList.replace("bi-sun-fill", "bi-moon-fill");
              document.getElementById("icon").style.color=" #1d2738";
      
          } else {
              // Switch to Dark Mode
              document.body.style.backgroundColor = " #1d2738";
      
              document.querySelectorAll(".changeColor").forEach(el => {
                  el.style.color = "white";
              });
      
              // Change icon to moon 🌙
              document.getElementById("icon").classList.replace("bi-moon-fill", "bi-sun-fill");
              document.getElementById("icon").style.color="yellow";
          }
      });
      document.addEventListener("DOMContentLoaded", function () {
        const mobileNav = document.querySelector(".mobile-nav");
        const menuBar = document.querySelector(".menubar");
    
        mobileNav.addEventListener("click", function () {
            menuBar.classList.toggle("mobilenav-activate");
        });
    });
    document.getElementById("subscribe-form").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent default form submission
    
        let emailValue = document.getElementById("email").value;
    
        fetch("https://formspree.io/f/xqaeykqd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: emailValue }) // Send proper JSON format
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Subscription successful!");
            } else {
                alert("Error: " + JSON.stringify(data));
            }
        })
        .catch(error => console.error("Error:", error));
    });