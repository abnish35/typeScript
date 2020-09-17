console.log("app.js file running")

class Department{
    // private id: string;
    // public name: string;
    static fiscalYear = 2020;
    private employees: string[]= [];
    
    // This is also a way to declare the object property inside the constructor parameter
    // Readonly- donot change the value of the element
    // getter -> when you try to read a property and 
    // setter -> when you try to set a property

    // Static Method -> We call directly with the help of class without a new keyword and therefore we can use class as a grouping mechanism. 
    // Abstract method/ classs
    // Singleton class and private constructor
    
    constructor( private readonly id: string, public name: string){
        // this.id = id
        // this.name = name 
    }   
    describe(this: Department){
        console.log(`Description ${this.name} ${this.id}`)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployee(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
    static createEmployee(name: string){
        return {name: name}
    }
}

class ITDepartment extends Department{
    admins: string[] = []
    constructor(id: string, admins: string[]){
        super( id, "IT" )
        this.admins = admins
    }
}

class Accounting extends Department{
    
    constructor( id: string, private reports: string[] ){
        super(id, "Accounting")
    }
    addReport(text: string){
        this.reports.push(text)
    }

    printReport(){
        console.log(this.reports)
    }
}

const employee1 = Department.createEmployee('Max')
console.log(employee1)
console.log(Department.fiscalYear)

const tech = new Accounting( "d1", ["Technical Department IT"])

tech.addEmployee("Abnish")
tech.addEmployee("Rahul")
// tech.employees[3] = "ALok";
tech.printEmployee()    

const accounting = new Accounting("a1", ["accounting1Data"])
accounting.addReport("report1")
accounting.printReport()

console.log(tech)
// tech.describe()
// const desc = {name: "new DEpt", describe: tech.describe}
// desc.describe()