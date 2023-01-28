import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  // VARIABLES
  title = "Test Page";
  num1 = 15;
  num2 = 23;
  conditionalText = "If you see this text, condition has been achieved"
  color:any;
  Employee:any[] = [];
  employee = "Ralph";

  // CONDITION 
  condition1 = (this.num1 < this.num2) ? true:false;

  // METHODS
  // Retrieves choice from interface (User's click)
  condition2:boolean = false;
  Onclick(arg:boolean){
    this.condition2 = arg;
  }
  // Retrieves colour to set from interface (User's select)
  SetColor(event:any) {
    this.color = event.target.value;
  }
  // Method that check age and returns specific colour
  CheckAge(age:number) {
    if (age < 18) {
      return 'red';
    } else {
      return 'green';
    }
    return "";
  }
  // Button that shows additional employees when clicked
  GetMoreEmployee() : void {
    this.Employee = [
      {
        Name: "Alice",
        Age: "21",
        Gender: "F"
      } , {
        Name: "Beatrice",
        Age: "16",
        Gender: "F"
      } , {
        Name: "Charles",
        Age: "25",
        Gender: "M"
      } , {
        Name: "Darren",
        Age: "30",
        Gender: "M"
      }
    ]
  }
  // Construct a default array for employee
  constructor() {
    this.Employee = [
      {
        Name: "Alice",
        Age: "21",
        Gender: "F"
      } , {
        Name: "Beatrice",
        Age: "16",
        Gender: "F"
      }
    ]
  }
}
