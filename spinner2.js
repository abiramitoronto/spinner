process.stdout.write('hello from spinner1.js... \rheyyy\n');

const replace = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];
for (let i = 0; i < replace.length; i++) {
  setTimeout(()=> process.stdout.write(`${replace[i]}`),100 * i);
}