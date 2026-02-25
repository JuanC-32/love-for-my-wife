const btn = document.getElementById("btn");
const message = document.getElementById("message");
const signature = document.getElementById("signature");

const text = `
Eres mi lugar seguro, mi risa favorita y
la razón por la que cada día vale la pena.
No hay casualidades contigo, solo amor,
complicidad y un “para siempre” que elijo
todos los días.
`;

let index = 0;

btn.addEventListener("click", () => {
  btn.style.display = "none";
  message.textContent = "";
  signature.classList.remove("hidden");

  const typing = setInterval(() => {
    message.textContent += text[index];
    index++;
    if (index >= text.length) clearInterval(typing);
  }, 40);
});