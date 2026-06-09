import { Component } from '@angular/core';
import {
  BookingConfirmation,
  BookingForm,
  BusList,
  Search,
  SeatSelection,
} from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Search, BusList, SeatSelection, BookingForm, BookingConfirmation],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
