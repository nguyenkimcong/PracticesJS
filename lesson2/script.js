function createParagraph() {
  const para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);

  // let a = 1;
  // let b = 22;
  // let name = "john"
  // // console.log(b+a);
  // // console.log(c);
  // // console.log(a + name);
  // // console.log(a + name + b);
  // // console.log(a + b + name);
  // // console.log(name + a);
  // // console.log(name + a + b);
  // // console.log(name + (a + b));
  // // console.log(`Hello ${name}`);
  // // console.log(`${name} + 1`);
  // // console.log(`${name + 1}`);
  // // console.log(`${name + a}`);
  // // console.log(`a + b = ${a + b}`);
  // // console.log(`a + b = ${1 + 2}`);
  // // console.log(`1 + 2 = ${1 + 2}`);
  // console.log(`1 + 2 = ${a + b}`);

}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', createParagraph);
}

