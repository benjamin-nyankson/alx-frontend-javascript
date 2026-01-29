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
  return `${firstName} ${lastName}`;
}


