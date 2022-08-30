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
