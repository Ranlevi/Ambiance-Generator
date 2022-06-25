let btn = document.getElementById("button");

let osc = new Tone.Oscillator.toDestination();
// osc.connect(Tone.Master);
// osc.toDestination();
osc.volume.value = -12;

btn.addEventListener('click', async () => {
  await osc.start();
});
