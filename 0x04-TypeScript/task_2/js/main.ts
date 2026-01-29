interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string
    workTeacherTasks (): string
}

class Director implements DirectorInterface {
    getCoffeeBreak() {
        return "Getting a coffee break"
    }
    workDirectorTasks() {
        return "Getting to director tasks"
    }

    workFromHome() {
        return "Working from home"
    }
}

class Teacher implements TeacherInterface {
    getCoffeeBreak() {
        return "Cannot have a break"
    }

    workFromHome() {
        return "Cannot work from home"
    }

    workTeacherTasks() {
        return "Getting to work"
    }
}

const teacher = new Teacher();
const director = new Director()
function createEmployee(salary: number) {
    if (salary < 500) {
        return new Teacher()
    }
    else {
        return new Director()
    }
}

console.log(createEmployee(200))