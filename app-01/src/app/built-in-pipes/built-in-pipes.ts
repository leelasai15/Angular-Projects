import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-built-in-pipes',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.css',
})
export class BuiltInPipes {
  textData: string = 'Angular built-in pipes are awesome!';
  currentDate: Date = new Date();
  price: number = 1234.56;
  decimalNumber: number = 3.14159265;
  completionRate: number = 0.85;
  userObj = { name: 'Alice', age: 28, role: 'Developer' };
}
