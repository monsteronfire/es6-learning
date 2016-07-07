let title = 'God of Small Things';
let string = 'lol';

let heading = "The Art of The Title";
let padder = '='.repeat(10);

//'string'.includes()
//'string'.startsWith()
//'string'.endsWith()
//'string'.repeat()

if (title.startsWith('God')) {
  console.log('This could be a religious book');
}

if(title.startsWith('i', 5)) {
  console.log('Offset by 5 characters works')
} else {
  console.log('no');
}

if(title.endsWith('Things')) {
  console.log('What things?');
}

if(title.includes('Small')) {
  console.log('Maybe these things aren\'t big');
}

console.log(
  'tro' + string.repeat(100)
);

console.log(
  `tro${string.repeat(100)}`
);

console.log(
  `${'>='.repeat(5)} ${heading} ${'=<'.repeat(5)}`
);

console.log(
  `${padder} ${heading} ${padder}`
);
