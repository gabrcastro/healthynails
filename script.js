const texts = {
  title: "Take Care of Your Nails the Natural Way",
  subtitle: "Have you ever wondered how to keep your nails healthy, strong and free from problems such as fungus or brittleness, without resorting to aggressive chemical products?",
};

document.getElementById("text_title").textContent = texts.title;
document.getElementById("text_subtitle").textContent = texts.subtitle;

const encryptedLink = "https://6df2f5bz42ip8j19hqcr011m8v.hop.clickbank.net?cbpage=tsl";

document.querySelectorAll("[data-product]").forEach(link => {
  link.href = encryptedLink;
});

// Configure o redirecionamento pelo clique na imagem e no texto diretamente
document.querySelectorAll("[data-product]").forEach(link => {
  link.addEventListener("click", () => {
    window.open(encryptedLink, "_self");
  });
});

function redirectToHoplink() {
  window.open(encryptedLink, "_self");
}

document.getElementById("button_see_more").addEventListener("click", redirectToHoplink);

let hasScrolled = false;
document.addEventListener("scroll", () => {
  if (!hasScrolled) {
    if (window.scrollY > 100) {
      redirectToHoplink();
      hasScrolled = true; // Impede redirecionamentos adicionais
    }
  }
});