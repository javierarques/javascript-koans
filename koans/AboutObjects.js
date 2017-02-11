describe("About Objects", function() {

  describe("Properties", function() {
    var megalomaniac;

    beforeEach(function() {
      megalomaniac = {
        mastermind: "Joker",
        henchwoman: "Harley"
      };
    });

    it("should confirm objects are collections of properties", function() {
      expect(megalomaniac.mastermind).toBe("Joker");
    });

    it("should confirm that properties are case sensitive", function() {
      expect(megalomaniac.henchwoman).toBe("Harley");
      expect(megalomaniac.henchWoman).toBe(undefined);
    });
  });


  it("should know properties that are functions act like methods", function() {
    const megalomaniac = {
      mastermind: "Brain",
      henchman: "Pinky",
      battleCry: function(noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    const battleCry = megalomaniac.battleCry(4);
    expect("They are Pinky and the Brain Brain Brain Brain").toMatch(battleCry);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function() {
    const currentDate = new Date();
    const currentYear = (currentDate.getFullYear());
    const megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function() {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2017);
    expect(megalomaniac.calculateAge()).toBe(47);
  });

  describe("'in' keyword", function() {
    let megalomaniac;
    beforeEach(function() {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function() {

      const hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(true);
    });

    it("should not have the detonator however", function() {

      const hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toBe(false);
    });
  });

  it("should know that properties can be added and deleted", function() {
    let megalomaniac = {
      mastermind: "Agent Smith",
      henchman: "Agent Smith"
    };

    expect("secretary" in megalomaniac).toBe(false);

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(true);

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(false);
  });


  it("should use prototype to add to all objects", function() {
    function Circle(radius) {
      this.radius = radius;
    }

    var simpleCircle = new Circle(10);
    var colouredCircle = new Circle(5);
    colouredCircle.colour = "red";

    expect(simpleCircle.colour).toBe(undefined);
    expect(colouredCircle.colour).toBe("red");

    Circle.prototype.describe = function() {
      return "This circle has a radius of: " + this.radius;
    };

    expect(simpleCircle.describe()).toBe("This circle has a radius of: 10");
    expect(colouredCircle.describe()).toBe("This circle has a radius of: 5");
  });
});
