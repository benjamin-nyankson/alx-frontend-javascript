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

console.log(createEmployee(200))