export class Clock {
  private hour;
  private minute;
  private extraHour: number;
  private inputHour: number;
  constructor(hour: number, minute?: number) {
    this.minute = this.handleMinute(minute).minute;
    this.extraHour = this.handleMinute(minute).hour;
    this.inputHour = this.handleHour(hour);
    this.hour = this.handleHour(this.inputHour + this.extraHour);
  }

  public toString(): string {
    return `${this.hour >= 10 ? this.hour : `0${this.hour}`}:${
      this.minute >= 10 ? this.minute : `0${this.minute}`
    }`;
  }

  public plus(minutes: unknown): Clock {
    throw new Error("Remove this statement and implement this function");
  }

  public minus(minutes: unknown): Clock {
    throw new Error("Remove this statement and implement this function");
  }

  public equals(other: unknown): unknown {
    throw new Error("Remove this statement and implement this function");
  }

  private handleMinute(minute: number | undefined): {
    minute: number;
    hour: number;
  } {
    if (!minute) return { hour: 0, minute: 0 };
    if (minute >= 60 || minute <= -60) {
      let remainder = minute % 60;
      let hours = (minute - remainder) / 60;
      return { minute: remainder, hour: hours };
    }
    return { hour: 0, minute };
  }
  private handleHour(hour: number) {
    let hours = hour % 24;
    if (hours < 0) return 24 + hours;
    return hours;
  }
}

console.log(new Clock(-1, 15).toString());
console.log(-1 % 24);

// handle negative minutes
