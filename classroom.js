function getStudents(classroom){
   let {hasTeachingAssistant, classList} = classroom;
   let teacher, teacherAssistant, students;

   if(hasTeachingAssistant){
       [teacher, teacherAssistant, ...students] = classList;
   }
   else{
       [teacher, ...students] = classList;
   }
    return students;
}
class Classroom {
    constructor(hasTeachingAssistant, classList) {
        this.hasTeachingAssistant = hasTeachingAssistant;
        this.classList = classList;
    }

    getHasTeachingAssistant() {
        return this.hasTeachingAssistant;
    }

    setHasTeachingAssistant(value) {
        this.hasTeachingAssistant = value;
    }

    getClassList() {
        return this.classList;
    }

    setClassList(value) {
        this.classList = value;
    }
}
const myClass = new Classroom(true, ["John", "Joe", "Billy", "Bob", "Sally"]);
const myClass2 = new Classroom(false, ["John", "Joe", "Billy", "Bob", "Sally"]);

const classOutput = document.getElementById("classList");
const classAssistant = document.getElementById("assistant");
const noAssistant = document.getElementById("noAssistant");
classOutput.textContent = myClass.getClassList();
classAssistant.textContent = getStudents(myClass);
noAssistant.textContent = getStudents(myClass2);

console.log("ClassList: " + myClass.getClassList());
console.log("This class has an assistant: " + getStudents(myClass));
console.log("This class doesn't have an assistant: " + getStudents(myClass2));
