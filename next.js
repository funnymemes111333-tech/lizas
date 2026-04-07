const terminal = document.getElementById("terminal");

// универсальная функция "печати"
function typeLines(lines, callback) {
  terminal.innerHTML = "";
  let i = 0;

  function addLine() {
    if (i < lines.length) {
      const p = document.createElement("p");
      p.className = "line";
      p.textContent = lines[i];
      terminal.appendChild(p);

      i++;
      setTimeout(addLine, 500);
    } else if (callback) {
      setTimeout(callback, 500);
    }
  }

  addLine();
}

// старт
document.getElementById("startTestBtn").addEventListener("click", () => {
  startTest();
});

function startTest() {
  typeLines([
    "> Анализ ответа...",
    "> Уровень уверенности: подозрительно высокий",
    "> Запуск мини-теста..."
  ], () => {
    createButton("я готова 😎", showQuestion1);
  });
}

// создание кнопки
function createButton(text, onClick) {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.onclick = onClick;
  terminal.appendChild(btn);
}

// ===== ВОПРОС 1 =====
function showQuestion1() {
  typeLines([
    "> Вопрос 1:",
    "> Кто самый лучший парень?"
  ], () => {

    createAnswer("пфф..Чонгук🙄", answerSecret);
    createAnswer("Не знаю", answerDontKnow);
    createAnswer("Егорка)) 😎", answerEgor);

  });
}

function answerEgor() {
  typeLines([
    "> ✔ Правильный ответ)) "
  ], showQuestion2);
}

function answerDontKnow() {
  typeLines([
    "> ❌ как это не знаешь 😑",
    "> быстра отвечать!!"
  ], showQuestion1);
}

function answerSecret() {
  typeLines([
    "> 🤨 Чонгук?",
    "> Подумай еще)) "
  ], showQuestion1);
}

// ===== ВОПРОС 2 =====
function showQuestion2() {
  typeLines([
    "> Вопрос 2:",
    "> Ты меня любишь?)"
  ], () => {

    createAnswer("Нет",  answerNO);
    createAnswer("эээ...", answerIDK);
    createAnswer("ДААА ОЧЕЕНЬ СИЛЬНО!!!", answerYES);

  });
}

function answerNO() {
    typeLines([
      ">я и обидится могу!!!! (твой айпи уже просканирован)",
    ], showQuestion2);
  }
  function answerIDK(){
    typeLines([
      "> ❌ ну ты чего 😑",
      "> попробуй ещё"
    ], showQuestion2);
  }
  function answerYES(){
     typeLines([
      "> Я тоже тебя сильно люблю мое золото😍🥰🥰"
    ], showFinalQuestion);

  }
   

// ===== ФИНАЛЬНЫЙ ВОПРОС =====
function showFinalQuestion() {
  typeLines([
    "> Финальный вопрос...",
    "> ...",
    "> анализ..."
  ], () => {

    setTimeout(() => {
      typeLines([
        "> ❌ ошибка",
        "> система не может сформулировать вопрос"
      ], () => {

        setTimeout(() => {
          typeLines([
            "> причина:",
            "> ответ уже очевиден"
          ], () => {

            createAnswer("и какой?", finalReveal);
            createAnswer("серьёзно?", finalReveal);

          });
        }, 800);

      });
    }, 800);

  });
}

function finalReveal() {
  typeLines([
    "> ...",
    "> ты для меня слишком важна,",
    "> чтобы проверять это тестами"
  ], () => {

    setTimeout(() => {
      typeLines([
        "> ты просто есть — и этого достаточно 💚"
      ], () => {

        createButton("иди ко мне 🐾", () => {
          window.location.href = "end.html";
        });

      });
    }, 1000);

  });
}

// ===== СОЗДАНИЕ ОТВЕТОВ =====
function createAnswer(text, handler) {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.onclick = handler;
  terminal.appendChild(btn);
}