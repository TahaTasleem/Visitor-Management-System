import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faBars=faBars;
  faRightFromBracket=faRightFromBracket;
  Department: any = ['IT',"Marketing","Admin","Sales"]; 

    form: FormGroup = new FormGroup({
    visitorname: new FormControl(''),
    visitorid: new FormControl(''),
    organizationname: new FormControl(''),
    persontovisit: new FormControl(''),
    purpose: new FormControl(''),
    cnicnumber: new FormControl(''),
    contactnumber:new FormControl(''),
    departmentname : new FormControl(''),
    gender:new FormControl('')
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        visitorname: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20)
          ]
        ],
        visitorid: ['', Validators.required],
        organizationname: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20)
          ]
        ],
        persontovisit: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(25)
          ]
        ],
        purpose: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50)
          ]
        ],
        cnicnumber: ['', Validators.required],
        contactnumber: ['', Validators.required],
        departmentname: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(10)
          ]
        ],
      }
    );
  }

  changeDept(e: any) {
    this.deptName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // Access formcontrols getter
  get deptName() {
    return this.form.get('deptName');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}