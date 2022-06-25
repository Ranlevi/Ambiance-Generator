// import * as Tone from 'tone';

let btn = document.getElementById("button");

let osc = new Tone.Oscillator();
osc.connect(Tone.Master);

btn.addEventListener('click', async () => {
  await osc.start();
});
