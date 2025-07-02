const quiz = {
  question: "システム開発の早い段階で、目に見える形で利用者の要求が確認できるように確認用のソフトウェアを作成するソフトウェア開発モデルとして、最も適切なのはどれか。",
  choices: [
    "アジャイル",
    "ウォーターフォール",
    "スパイラル",
    "プロトタイピング"
  ],
  correctIndex: 3 // 「プロトタイピング」
};

// 初期表示
window.onload = function () {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  questionEl.textContent = quiz.question;

  quiz.choices.forEach((choice, index) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.id = "choice" + index;
    input.value = index;

    const label = document.createElement("label");
    label.htmlFor = "choice" + index;
    label.textContent = choice;

    optionsEl.appendChild(input);
    optionsEl.appendChild(label);
    optionsEl.appendChild(document.createElement("br"));
  });
};

// 解答チェック関数
function checkAnswer() {
  const selected = document.querySelector("input[name='answer']:checked");

  const resultEl = document.getElementById("result");

  if (!selected) {
    resultEl.textContent = "選択肢を選んでください。";
    resultEl.style.color = "red";
    return;
  }

  const selectedIndex = parseInt(selected.value);

  if (selectedIndex === quiz.correctIndex) {
    resultEl.textContent = "正解です！";
    resultEl.style.color = "green";
  } else {
    resultEl.textContent = "不正解です。";
    resultEl.style.color = "red";
  }
}