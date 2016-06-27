class TaskCollection {
  constructor( tasks = [] ) {
    this.tasks = tasks;
  }

  log() {
    //ES5 function syntax
    //this.tasks.forEach(function(task){
    //  console.log(task);
    //});

    //ES6 arrow function syntax -- long form
    //this.tasks.forEach((task) => {
    //  console.log(task);
    //});

    //ES6 arrow function syntax -- short form
    //this.tasks.forEach( task => console.log(task) );
  }

  prepare() {
    this.tasks.forEach((task) => {
      task.toGulp()
    });
  }
}

class Task {
  toGulp() {
    console.log('converting to Gulp');
  }
}

new TaskCollection([
  new Task, new Task, new Task
]).prepare();
