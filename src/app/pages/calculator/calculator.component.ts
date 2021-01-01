import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {




  constructor() { }

  const calculator = document.querySelector(‘.calculator’)
  const keys = calculator.querySelector(‘.calculator_keys’)


keys.addEventListener(‘click’, e=> {
  if {e.target.matches(‘button’)) {

  

})

  ngOnInit(): void {
  }

}
