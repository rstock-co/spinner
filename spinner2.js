// note: I didn't know we'd be refactoring the code from spinner 1 in spinner 2. 
// I'm unable to see any place where I can refactor, so spinner 1 === spinner 2.

const spinnerLoop = "|/-\|/-\|/-\|/-\|/-\|/-\|/-\|";

const animateSpinner = (delay, i = 0) => {  
  setTimeout(() => {
    if (i < spinnerLoop.length) {
      process.stdout.write(`\r${spinnerLoop[i]}   `);
      if (i === spinnerLoop.length - 1) process.stdout.write('\n')
      animateSpinner(delay, i + 1);
    }
  }, delay);
}

animateSpinner(200);
