
class Romao {
  constructor(task) {
    this.alive = true; //always true, cannot die
    this.task = task;
    setInterval(() => {
      if (this.isAlive())
        this.task();
      else
      console.log("Error EOTW - END OF THE WORLD");
    }, 1000);
  }

  isAlive() {
    return this.alive;
  }
}

module.exports = Romao;