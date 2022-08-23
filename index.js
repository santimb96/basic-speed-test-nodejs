import { exec } from "child_process";

const speedTest = () => new Promise((resolve, reject) => {
  console.warn('Evaluando...');
  console.time('Resultado en');
  exec("speed-test --json", (err, stdout, stderr) => {
    if (err || stderr) {
      reject('No se ha podido obtener la velocidad de internet');
    }
    resolve(JSON.parse(stdout));
  })
});

speedTest()
  .then(data => {
    console.table({
      Ping: data?.ping,
      Descarga: data?.download,
      Subida: data?.upload,
    });
    console.timeEnd('Resultado en');
  })
  .catch(err => console.error(err))
  .finally(() => process.exit(0));