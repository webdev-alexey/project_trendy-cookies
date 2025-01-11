// Scroll-инг плавный
document.getElementById("main-action-button").onclick = function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

const links = document.querySelectorAll(".menu__item > a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

const buttons = document.querySelectorAll(".products__item .button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  };
}

// Перевод валют
const prices = document.getElementsByClassName("products__item-price");
document.getElementById("change-currency").onclick = function (e) {
  const currentCurrency = e.target.innerText;

  let newCurrency = "$";
  let coefficient = 1;
  if (currentCurrency === "$") {
    newCurrency = "₽";
    coefficient = 90;
  } else if (currentCurrency === "₽") {
    newCurrency = "BYN";
    coefficient = 3;
  } else if (currentCurrency === "BYN") {
    newCurrency = "€";
    coefficient = 0.9;
  } else if (currentCurrency === "€") {
    newCurrency = "¥";
    coefficient = 6.9;
  }

  e.target.innerText = newCurrency;
  for (i = 0; i < prices.length; i++) {
    prices[i].innerText =
      +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) +
      " " +
      newCurrency;
  }
};

// Валидация формы
const product = document.getElementById("product");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
  let hasError = false;

  [product, name, phone].forEach((item) => {
    if (!item.value) {
      item.style.borderColor = "red";
      hasError = true;
    } else {
      item.style.borderColor = "";
    }
  });

  if (!hasError) {
    [product, name, phone].forEach((item) => {
      item.value = "";
    });
    alert("Спасибо за заказ! Мы скоро свяжемся с Вами!");
  }
};
