let tipPercent = 20;

function setTip(percent, btn) {
  tipPercent = percent;
  document.querySelectorAll('.tip-buttons button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  calculate();
}
function calculate() {
  const bill = parseFloat(document.getElementById('bill').value) || 0;
}