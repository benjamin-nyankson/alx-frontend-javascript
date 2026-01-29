interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // Allow any additional properties
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface TeacherName {
  firstName: string;
  lastName: string;
}


interface printTeacherFunction {
  (teacher: TeacherName): string;
}



function printTeacher(teacher: TeacherName): string {
  const { firstName, lastName } = teacher;
  return `${firstName}. ${lastName}`;
}

// Interface for the constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class definition (must match exactly)
class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
