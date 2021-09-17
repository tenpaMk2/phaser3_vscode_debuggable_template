import * as Phaser from "phaser";

export default class Demo extends Phaser.Scene {
  constructor() {
    super("demo");
  }

  preload() {
    this.load.image("logo", "assets/phaser3-logo.png");
    this.load.image("libs", "assets/libs.png");
  }

  create() {
    this.add.image(400, 300, "libs");

    const logo = this.add.image(400, 70, "logo");

    this.tweens.add({
      targets: logo,
      y: 350,
      duration: 1500,
      ease: "Sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 800,
  height: 600,
  scene: Demo,
};

const game = new Phaser.Game(config);
