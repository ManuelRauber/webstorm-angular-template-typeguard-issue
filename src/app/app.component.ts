import {Component} from '@angular/core';

export abstract class Animal {
  abstract eat();
}

export class Fish extends Animal {
  eat() {
    console.log('Yummy food');
  }

  swim() {
    console.log('swim swim swim');
  }
}

export class Bird extends Animal {
  eat() {
    console.log('Hmmm, seeds!');
  }

  fly() {
    console.log('Over the rainbows 🎵');
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  animal: Animal = new Bird();

  fishOrBird: Fish | Bird = new Fish();

  isFishByAnimal(animal: Animal): animal is Fish {
    return animal instanceof Fish;
  }

  isBirdByAnimal(animal: Animal): animal is Bird {
    return animal instanceof Bird;
  }

  isFishByFishOrBird(fishOrBird: Fish | Bird): fishOrBird is Fish {
    return fishOrBird instanceof Fish;
  }

  isBirdByFishOrBird(fishOrBird: Fish | Bird): fishOrBird is Bird {
    return fishOrBird instanceof Bird;
  }

  workingSampleInTypeScript() {
    if (this.isFishByAnimal(this.animal)) {
      this.animal.swim();
      this.animal.fly(); // fly does not exist on type Fish
    }

    if (this.isBirdByFishOrBird(this.fishOrBird)) {
      this.fishOrBird.fly();
      this.fishOrBird.swim(); // swim does not exist on type Bird
    }
  }
}
