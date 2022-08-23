import { exec } from "child_process";

const speedTest = () => new Promise((resolve, reject) => {
  console.warn('Evaluando...');
  console.time('\nResultado en');
  exec("speed-test --json", (err, stdout, stderr) => {
    if (err || stderr) {
      reject('No se ha podido obtener la velocidad de internet');
    }
    resolve(JSON.parse(stdout));
  })
});

speedTest()
  .then(data => {
    const { ping, download, upload } = data;
    console.log(`Ping: ${ping} ms\nDownload: ${download} Mbps\nUpload: ${upload} Mbps`);
  })
  .catch(err => console.error(err))
  .finally(() => console.timeEnd('\nResultado en'));