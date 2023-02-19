// let mission = process.argv[2]

// if(mission === 'learning') {
//   console.log('Learning node again hope i finish this time guys');
// }else {
//   console.log(`Let's ${mission} this node for real brother's`)
// }

const EventEmitter = require('events');
// const exit = require('exit');


const celebrity = new EventEmitter();

// observer one
celebrity.on('race win', () => console.log('You win'));

// observer 2
celebrity.on('race win', () => console.log('Boo, loser'));

process.on('exit', (code) => console.log(code));

celebrity.emit('race win', () => console.log('You win'));
celebrity.emit('race win', () => console.log('Boo, loser'));