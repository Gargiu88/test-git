import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndirizzoIP } from '../indirizzoIP.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value = 'Clear me';
  value2 = 'Clear me';
  ipAddress = '';
  show: boolean= false;
  resultArray: Array<number> = [];

  form: FormGroup;
  constructor(public fb: FormBuilder, public ip: IndirizzoIP) {
    this.form = fb.group({
      num1: fb.control(null, Validators.required),
      num2: fb.control(null, Validators.required),
      operation: fb.control(null, Validators.required),
    })

   }

  ngOnInit(): void {
    this.ip.loadIP().subscribe((res:any)=>{
      this.ipAddress=res.ip;
    });
  }

  copyNumber(flag: boolean, value: number) {
    if(flag){
      this.form.controls.num1.setValue(value);
    } else {
      this.form.controls.num2.setValue(value);
    }


  }

  showHidden() {
    this.show = !this.show;
  }

  addizione(num1: number, num2: number) {
    return num1 + num2;
  }

  sottrazione(num1: number, num2: number) {
    return num1 - num2;
  }

  moltiplicazione(num1: number, num2: number){
    return num1 * num2;
  }

  divisione(num1: number, num2: number) {
    return num1 / num2;
  }

  risultato(num1: number, num2: number, operation: string) {
    if(operation == "1") {
      this.resultArray.push(this.addizione(num1, num2));
    } else if (operation  == "2") {
      this.resultArray.push(this.sottrazione(num1, num2));
    } else if (operation == "3") {
      this.resultArray.push(this.moltiplicazione(num1, num2));
    } else {
      this.resultArray.push(this.divisione(num1, num2));
    }
    console.log(this.resultArray);
  }

  stampaRis() {
    if(!this.form.valid) {
      alert("E' obbligatorio inserire 2 numeri");
    } else {
        this.risultato(this.form.controls.num1.value, this.form.controls.num2.value, this.form.controls.operation.value);
    }
  }
}
