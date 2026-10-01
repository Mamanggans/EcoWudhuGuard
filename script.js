const slides = [...document.querySelectorAll('.slide')];
const navItems = [...document.querySelectorAll('.nav-item')];
const sectionKicker = document.querySelector('#sectionKicker');
const sectionTitle = document.querySelector('#sectionTitle');
const progressBar = document.querySelector('#progressBar');
const titles = ['Membaca setiap tetes.','Mengapa alat ini dibutuhkan.','Mengukur agar bisa berubah.','Tiga warna, satu ajakan.','Dari aliran menjadi kesadaran.','Logika kecil, dampak nyata.','Coba satu sesi. Lihat responsnya.'];
const kickers = ['BERANDA · 01','LATAR & TUJUAN · 02','METODOLOGI · 03','HASIL PENELITIAN · 04','BLUEPRINT · 05','KODE & CATATAN · 06','SIMULASI & KREDIT · 07'];
let current = 0;
function showSlide(index){
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
  navItems.forEach((item, i) => item.classList.toggle('active', i === current));
  sectionKicker.textContent = kickers[current];
  sectionTitle.textContent = titles[current];
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
}
navItems.forEach(item => item.addEventListener('click', () => showSlide(Number(item.dataset.target))));
document.addEventListener('keydown', event => {
  if (document.querySelector('#presentation').classList.contains('visible')) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') showSlide(current + 1);
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') showSlide(current - 1);
  }
});
document.querySelector('#startButton').addEventListener('click', () => {
  document.querySelector('#boot').style.display = 'none';
  document.querySelector('#presentation').classList.add('visible');
  showSlide(0);
});

const codeBlock = document.querySelector('#fullCode');
const copyButton = document.querySelector('#copyCodeButton');
const copyFeedback = document.querySelector('#copyFeedback');
if (copyButton && codeBlock) {
  copyButton.addEventListener('click', async () => {
    const source = codeBlock.innerText;
    try {
      await navigator.clipboard.writeText(source);
      copyFeedback.textContent = 'Kode berhasil disalin';
      copyButton.textContent = '✓ Tersalin';
    } catch {
      const helper = document.createElement('textarea');
      helper.value = source;
      document.body.appendChild(helper);
      helper.select();
      document.execCommand('copy');
      helper.remove();
      copyFeedback.textContent = 'Kode berhasil disalin';
      copyButton.textContent = '✓ Tersalin';
    }
    setTimeout(() => { copyFeedback.textContent = ''; copyButton.textContent = '⧉ Salin kode'; }, 2200);
  });
}

const volumeSlider = document.querySelector('#volumeSlider');
const volumeValue = document.querySelector('#volumeValue');
const simStatus = document.querySelector('#simStatus');
const tankWater = document.querySelector('#tankWater');
const simLcd = document.querySelector('#simLcd');
const simLive = document.querySelector('#simLive');
const simControls = document.querySelector('.sim-controls');
const servoArm = document.querySelector('#servoArm');
const runButton = document.querySelector('#runSimulation');
const ledGreen = document.querySelector('#simLedGreen');
const ledYellow = document.querySelector('#simLedYellow');
const ledRed = document.querySelector('#simLedRed');
let running = false;
function updateSimulation(){
  const volume = Number(volumeSlider.value);
  volumeValue.textContent = `${volume.toLocaleString('id-ID')} mL`;
  const fill = Math.max(12, Math.min(92, ((volume - 100) / 2100) * 80 + 12));
  tankWater.style.height = `${fill}%`;
  let status, color, note, servo;
  if (volume < 800) { status = 'HEMAT'; color = 'green'; note = 'LED hijau · pesan hemat · servo terbuka penuh'; servo = -2; }
  else if (volume <= 1500) { status = 'NORMAL'; color = 'yellow'; note = 'LED kuning · buzzer singkat · servo 50%'; servo = -45; }
  else { status = 'BOROS'; color = 'red'; note = 'LED merah · buzzer berulang · servo pembatas'; servo = -45; }
  simStatus.innerHTML = `<span class="big-led ${color}"></span><div><b>${status}</b><small>${note}</small></div>`;
  simLcd.innerHTML = `${status}<br><small>${volume.toLocaleString('id-ID')} mL</small>`;
  servoArm.style.transform = `rotate(${servo}deg)`;
  [ledGreen,ledYellow,ledRed].forEach(led => led.className = '');
  document.querySelector(`#simLed${color[0].toUpperCase()+color.slice(1)}`).className = `on-${color}`;
  simLive.textContent = running ? `mengalir · respons ${color}` : `siap menerima simulasi · ${status.toLowerCase()}`;
}
volumeSlider.addEventListener('input', updateSimulation);
runButton.addEventListener('click', () => {
  running = !running;

  updateSimulation();
});
updateSimulation();
