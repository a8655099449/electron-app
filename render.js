const app = document.querySelector("#app");
app.innerHTML = `version:${versions.electron()}`;

const ping = async () => {
  const response = await window.versions.ping();
  alert(response);
};

const button = document.querySelector("button");
button.addEventListener("click", ping);
