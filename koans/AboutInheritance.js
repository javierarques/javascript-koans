class Muppet {
  constructor(age, hobby) {
    this.age = age;
    this.hobby = hobby;
  }

  answerNanny() {
    return "Everything's cool!";
  }
}

class SwedishChef extends Muppet {
  constructor(age, hobby, mood) {
    super(age, hobby);
    this.mood = mood;
  }

  cook() {
    return "Mmmm soup!";
  }
}

describe("About inheritance", () => {
  beforeEach(() => {
    this.muppet = new Muppet(2, "coding");
    this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("should be able to call a method on the derived object", () => {
    expect(this.swedishChef.cook()).toEqual("Mmmm soup!");
  });

  it("should be able to call a method on the base object", () => {
    expect(this.swedishChef.answerNanny()).toEqual("Everything's cool!");
  });

  it("should set constructor parameters on the base object", () => {
    expect(this.swedishChef.age).toEqual(2);
    expect(this.swedishChef.hobby).toEqual("cooking");
  });

  it("should set constructor parameters on the derived object", () => {
    expect(this.swedishChef.mood).toEqual("chillin");
  });
});
