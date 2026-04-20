//header
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
  const footer = document.getElementById("footer");

  if (!header || !footer) {
    console.error("Header not found!");
    return;
  }

  console.log("Header loaded successfully");
}

loadComponent("header-container", "header.html");
loadComponent("footer-container", "footer.html");
