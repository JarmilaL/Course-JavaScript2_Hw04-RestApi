import Info from "../info";

export default class Employee {

    constructor( { id, employee_name, employee_salary, employee_age } ) {
        this._id = id;
        this._name = employee_name;
        this._picture = `../images/faces/face_${id}.jpg`;
        this._age = employee_age;
        this._salary = employee_salary;
    }

    getID() { return this._id; }

    getName() { return this._name; }

    getPicture() { return this._picture; }

    getAge() { return this._age; }

    getSalary() { return parseInt(this._salary).toLocaleString('cs-cz'); }

    getInfo() {
        let infoList = [];
        infoList.push(new Info("Identification number", this._id));
        infoList.push(new Info("Salary", parseInt(this._salary).toLocaleString('cs-cz')));
        infoList.push(new Info("Age", this._age));

        return infoList;
    }

    getDataToRender() {
        return {
            title: this._name,
            subtitle: '',
            imgSrc: this._picture,
            infoList: this.getInfo()
        }
    }
}
