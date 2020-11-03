const args = process.argv.splice(2);
for (let arg of args) {
  if (arg == undefined || arg < 0 || arg == NaN) {
    return;
  }
  let t = arg * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log('beep!', t / 1000, 'seconds');
  }, t)
}