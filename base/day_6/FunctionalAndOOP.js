class Car {
  name;
  power;

  constructor(name, power) {
    this.name = 'ten xe la: ' + name;
    this.power = power + 'Hp';
  }

  run() {
    console.log(this.name + ' ma luc ' + this.power);
  }
}

function buildCarObject(name, power) {
  return {
    name: 'ten xe la: ' + name,
    power: power + 'Hp',
    run() {
      console.log(this.name + ' ma luc ' + this.power);
    }
  }
}

class AppHocTiengAnh {
  static main() {
    const toyoda = new Car('Toyoda', '300');
    const nissan = buildCarObject('Nissan', '500');
    toyoda.run();
    nissan.run();
  }
}

// Entry point
AppHocTiengAnh.main();