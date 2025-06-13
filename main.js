// 현재 시간 표시
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const timeEl = document.getElementById("time");
  if (timeEl) timeEl.textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

// 그라데이션 배경 적용 함수
function pink() {
  document.body.style.backgroundImage = "linear-gradient(to right, #ff9a9e, #fad0c4)";
}
function lightblue() {
  document.body.style.backgroundImage = "linear-gradient(to right, #89f7fe, #66a6ff)";
}
function yellow() {
  document.body.style.backgroundImage = "linear-gradient(to right, #fceabb, #f8b500)";
}
function reset() {
  document.body.style.backgroundImage = "";
}

