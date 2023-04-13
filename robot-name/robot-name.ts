export class Robot {
  nameStart: string;
  nameEnd: number;
  robotName: string;

  private static allRobots = new Set<string>();

  constructor() {
    this.nameStart = this.createNameStart();
    this.nameEnd = this.createNameEnd();
    this.robotName = this.nameStart + this.nameEnd;
    Robot.allRobots.add(this.robotName);
  }

  public get name(): string {
    return this.robotName;
  }

  public resetName(): void {
    let placeholderName = this.createNameStart() + this.createNameEnd();
    do {
      placeholderName = this.createNameStart() + this.createNameEnd();
    } while (Robot.allRobots.has(placeholderName));
    this.robotName = placeholderName;
    Robot.allRobots.add(this.robotName);
  }

  public static releaseNames(): void {
    Robot.allRobots.clear();
  }

  private createRandomString() {
    return (Math.random() + 1).toString(36).split("");
  }

  private createNameStart() {
    return this.createRandomString()
      .filter((char) => char.match(/[a-z]/))
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }
  private createNameEnd() {
    let nameEnd = Math.trunc(Math.random() * 1000);
    if (nameEnd.toString().split("").length === 2) {
      nameEnd = Number(nameEnd.toString() + Math.random() * 10);
    }
    return nameEnd;
  }
}

console.log();
