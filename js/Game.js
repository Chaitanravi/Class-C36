class Game {
  constructor() {}

  start() {
    form = new Form(); // 3. form class object created and constructor will execute 
    form.display(); // 6. calling display () of form class 
    player = new Player(); //7. creating object of player class
  }
}
