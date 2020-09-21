const sentence = "hello there from lighthouse labs";
let t = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, t);
  t += 50;
}
console.log('\n');
