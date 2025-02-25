document
  .getElementById("seat-container-A")
  .addEventListener("click", function (event) {
    if (event.target.value !== "A") {
      const seat = event.target.closest(".close");
      const selectedSeat = seat.innerText;
      const calculationSection = document.getElementById("calculation-section");
      const div = document.createElement("div");
      document.getElementById("remove-click").style.display = "none";
      div.classList.add("flex", "justify-between", "items-center");
      const priceCaculation =
        document.getElementById("price-calculation").innerText;
      let priceNum = parseInt(priceCaculation);
      let priceSum = 550;
      priceNum = priceNum + priceSum;
      document.getElementById("price-calculation").innerText = priceNum;
      document.getElementById("price-cuppon-added").innerText = priceNum;

      const btnClicked = document.getElementById("apply-btn");
      btnClicked.addEventListener("click", function () {
        const grandTotal =
          document.getElementById("price-cuppon-added").innerText;
        if (document.getElementById("cupon-input").value === "Sifat") {
          document.getElementById("price-cuppon-added").innerText =
            priceNum - (priceNum * 10) / 100;
        }
      });
      div.innerHTML = `
      <span class="text-gray-700 font-medium">${selectedSeat}</span>
                            <span class="text-gray-500">Economy</span>
                            <span class="text-gray-700 font-semibold">550</span>
      `;
      calculationSection.appendChild(div);
    }

    document.getElementById("input-submit").onclick = function () {
      const inputName = document.getElementById("input-name").value.trim();
      const inputMail = document.getElementById("input-mail").value.trim();
      const inputNumber = document.getElementById("input-phone").value.trim();
      if (document.getElementById("price-cuppon-added").innerText > 0) {
        if (inputMail.includes("@") && inputNumber.length === 11) {
          if (inputName !== "") {
            window.location.href = "payment.html";
          } else {
            alert("Please Input your name");
          }
        } else {
          alert("Please input the right email or phone number");
        }
      } else{
        alert("Please select at least one seat");
      }
    };
  });
