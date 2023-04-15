type Roster = { [keyof: string]: string[] };
export class GradeSchool {
  private allStudents: Roster;
  constructor() {
    this.allStudents = {};
  }

  roster(): Roster {
    let sortedRoster: Roster = {};
    let sortedGrades = Object.keys(this.allStudents).sort(
      (a: string, b: string) => a.localeCompare(b)
    );
    sortedGrades.forEach((grade) => {
      // Deep copy of the grade array to prevent modifications
      sortedRoster[grade] = [...this.allStudents[grade]];
    });
    return sortedRoster;
  }
  add(name: string, grade: number) {
    for (const existingGrade in this.allStudents) {
      const index = this.allStudents[existingGrade].indexOf(name);
      if (index > -1) {
        this.allStudents[existingGrade].splice(index, 1);
      }
    }

    let gradeArr: string[] = this.grade(grade);
    let sortedArray = gradeArr
      .concat([name])
      .sort((a, b) => a.localeCompare(b));
    this.allStudents[grade] = sortedArray;
  }

  public grade(grade: number) {
    if (!this.allStudents[grade]) {
      this.allStudents[grade] = [];
    }
    return [...this.allStudents[grade]];
  }
}
