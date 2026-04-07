const terminal = document.getElementById("terminal");

const lines = [
  "> Ошибка: статус 'не уверена' не найден",
  "> Проверка данных...",
  "> ...",
  "> Обнаружено несоответствие ⚠️",
  "",
  "> Запуск углублённой проверки личности...",
  "> Доступ к скрытому модулю...",
  "> ...",
  "> ✔ Пользователь идентифицирован",
  "",
  "> Имя: Лиза",
  "> Статус: VIP 💎",
  "> Уровень: слишком особенная",
  "",
  "> Исправление ошибки...",
  "> ...",
  "> ⚠️ ВНЕШНЕЕ ВМЕШАТЕЛЬСТВО",
  "",
  " ты офигела что ли? 😑",
  "ты у меня самая лучшая девушка в мире",
  "я в восторге от глубины твоих глаз ",
  "от теплоты твоих слов.."
];

let i = 0;

function typeLine() {
  if (i < lines.length) {
    const p = document.createElement("p");
    p.classList.add("line");

    // выделяем "Егор"
    if (lines[i].startsWith("Егор")) {
      p.style.color = "#ffffff";
    }

    p.textContent = lines[i];
    terminal.appendChild(p);

    i++;
    setTimeout(typeLine, 600);
  } else {
    showButtons();
  }
}

function showButtons() {
  setTimeout(() => {
    const container = document.createElement("div");

    const yesBtn = document.createElement("button");
    yesBtn.innerText = "ладно, убедил… 😌";
    yesBtn.onclick = () => {
      window.location.href = "index.html";
    };

    const noBtn = document.createElement("button");
    noBtn.innerText = "не переубедил 😏";

    container.appendChild(yesBtn);
    container.appendChild(noBtn);
    terminal.appendChild(container);

    makeRunaway(noBtn);

  }, 1000);
}

typeLine();
function makeRunaway(btn) {
  let attempts = 0;

  btn.addEventListener("click", () => {
    if (attempts < 3) {
      attempts++;

      move(btn);
      changeText(btn, attempts);

    } else {
      window.location.href = "final.html";
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
    "не верю 😏",
    "да ну? 😂",
    "ладно всё..."
  ];

  btn.innerText = texts[attempt - 1];
}