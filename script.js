let tipPercent = 20;

function setTip(percent, btn) {
  tipPercent = percent;
  document.querySelectorAll('.tip-buttons button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  calculate();
}
function calculate() {
  const bill = parseFloat(document.getElementById('bill').value) || 0;
   const people = parseInt(document.getElementById('people').value) || 1;

    const tipAmount = bill * (tipPercent / 100);
  const total = bill + tipAmount;
  const perPerson = total / people;

}