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

// Class implementation
class StudentClass implements StudentClassInterface {
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


interface IShared{
  workFromHome:()=>string;
  getCoffeeBreak:()=>string
}

interface DirectorInterface extends IShared{
  workDirectorTasks:()=>string
}

interface TeacherInterface extends IShared{
  workTeacherTasks:()=>string
}

class Director implements DirectorInterface{
  getCoffeeBreak(){
    return "DirectorInterface"
  }
  workDirectorTasks(){
    return "Getting to director tasks"
  }

  workFromHome(){
    return "Getting a coffee break"
  }
}

class Teacher implements TeacherInterface{
  getCoffeeBreak(){
    return "Cannot have a break"
  }

  workFromHome(){
    return "Cannot work from home"
  }

  workTeacherTasks(){
    return "Getting to work"
  }
}

const teacher = new Teacher();
const director = new Director()
function createEmployee(salary:number){
if(salary<500){
  return teacher
}
else{
  return director
}
}