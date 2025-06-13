
function setLanguage(lang) {
  const text = {
    ar: "أهلاً بك في حسابك",
    en: "Welcome to your account"
  };
  document.getElementById("welcome-text").innerText = text[lang];
}
