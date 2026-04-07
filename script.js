const terminal = document.getElementById("terminal");

// печать строк
function typeLines(lines, callback) {
  let i = 0;

  function typeLine() {
    if (i < lines.length) {
      const p = document.createElement("p");
      p.className = "line";
      terminal.appendChild(p);

      let j = 0;
      const text = lines[i];

      function typeChar() {
        if (j < text.length) {
          p.textContent += text[j];
          j++;
          setTimeout(typeChar, 25); // скорость печати
        } else {
          i++;
          setTimeout(typeLine, 300); // пауза между строками
        }
      }

      typeChar();

    } else if (callback) {
      setTimeout(callback, 400);
    }
  }

  typeLine();
}

// старт сцены
typeLines([
  "> Запуск системы...",
  "> Сканирование пользователя...",
  "> Совпадение: 12% ⚠️",
  "",
  "> Это вы самая лучшая девушка в мире???"
], () => {
  showButtons();
});

// кнопки
function showButtons() {
  const yesBtn = document.createElement("button");
  yesBtn.innerText = "Я самая лучшая девушка в мире 😎";
  yesBtn.onclick = () => {
    window.location.href = "next.html";
  };

  const noBtn = document.createElement("button");
  noBtn.innerText = "Я... не уверена 👀";

  terminal.appendChild(yesBtn);
  terminal.appendChild(noBtn);

  makeRunaway(noBtn);
}

// убегающая кнопка
function makeRunaway(btn) {
  let attempts = 0;

  btn.addEventListener("click", () => {
    if (attempts < 5) {
      attempts++;

      move(btn);
      changeText(btn, attempts);
    } else {
      window.location.href = "error.html";
    }
  });
}

function move(btn) {
  const container = document.querySelector(".terminal");

  const rect = container.getBoundingClientRect();

  const padding = 20;

  const maxX = rect.width - btn.offsetWidth - padding;
  const maxY = rect.height - btn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btn.style.position = "absolute";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}
function changeText(btn, attempt) {
  const texts = [
    "не так быстро 😏",
    "поймай меня 😂",
    "почти получилось",
    "ещё чуть-чуть 👀",
    "ладно ладно..."
  ];

  btn.innerText = texts[attempt - 1];
}