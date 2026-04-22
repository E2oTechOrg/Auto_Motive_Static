// header + footer loader
function loadComponent(id, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error("Failed to load " + file);
      return res.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;

      requestAnimationFrame(() => {

        if (id === "header-container") {
          initHeader();
          setActiveMenu();
        }

        if (id === "footer-container") {
          initFooter();
        }

        window.dispatchEvent(new Event("resize"));
      });
    })
    .catch(err => console.error(err));
}

function initHeader() {
  const header = document.getElementById("mainHeader");

  if (!header) {
    console.error("Header not found!");
    return;
  }

  console.log("Header loaded successfully");
}

function initFooter() {
  const footer = document.getElementById("footer");

  if (!footer) {
    console.error("Footer not found!");
    return;
  }

  console.log("Footer loaded successfully");
}

// ✅ Active menu function
function setActiveMenu() {
  const links = document.querySelectorAll(".navbar-nav .nav-link");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

loadComponent("header-container", "header.html");
loadComponent("footer-container", "footer.html");

//gallery modal
document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.getElementById("closeModal");

  // Only run if modal exists
  if (modal && modalImg && closeBtn) {

    document.querySelectorAll(".rent-item img").forEach(img => {
      img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
      });
    });

    closeBtn.onclick = () => modal.style.display = "none";

    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };

  }

});