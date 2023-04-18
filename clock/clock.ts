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

  public plus(minutes: number) {
    let {
      minute: additionalMinute,
      hour: additionalHour,
    }: { minute: number; hour: number } = this.handleMinute(minutes);
    let minAndHour = this.handleMinute(additionalMinute + this.minute);
    this.minute = minAndHour.minute;
    this.hour += this.handleHour(additionalHour + minAndHour.hour);
    this.hour = this.handleHour(this.hour);
    return this;
  }

  public minus(minutes: number) {
    let {
      minute: additionalMinute,
      hour: additionalHour,
    }: { minute: number; hour: number } = this.handleMinute(minutes);
    let minAndHour = this.handleMinute(-additionalMinute + this.minute);
    this.minute = minAndHour.minute;
    this.hour -= this.handleHour(additionalHour - minAndHour.hour);
    this.hour = this.handleHour(this.hour);
    return this;
  }

  public equals(newClock: Clock) {
    return this.handleFlattenHour() === newClock.toString();
  }

  private handleMinute(minute: number | undefined): {
    minute: number;
    hour: number;
  } {
    if (!minute) return { hour: 0, minute: 0 };
    let isNegative = minute < 0;
    let isMoreThanHour = Math.abs(minute) >= 60;

    if (isNegative) {
      let remainder = minute % 60;
      let hours = -1;
      if (isMoreThanHour) {
        hours += (minute - remainder) / 60;
      }
      return { minute: 60 - Math.abs(remainder), hour: hours };
    }

    if (isMoreThanHour) {
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

  private handleFlattenHour() {
    return `${this.hour >= 10 ? this.hour : `0${this.hour}`}:${
      this.minute >= 10 ? this.minute : `0${this.minute}`
    }`;
  }
}
