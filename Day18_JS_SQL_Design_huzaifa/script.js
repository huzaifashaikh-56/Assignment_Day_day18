const form = document.getElementById("markForm");
const tableBody = document.querySelector("#dataTable tbody");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const marks = document.getElementById("marks").value;

  if (name && subject && marks !== "") {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${name}</td><td>${subject}</td><td>${marks}</td>`;
    tableBody.appendChild(row);

    form.reset();
  } else {
    alert("Please fill all fields correctly.");
  }
});
