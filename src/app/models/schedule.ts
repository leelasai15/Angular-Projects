export interface Schedule {
  availableSeats: number;
  totalSeats: number;
  price: number;
  arrivalTime: string; // ISO Date String
  scheduleId: number;
  departureTime: string; // ISO Date String
  busName: string;
  busVehicleNo: string;
  fromLocationName: string;
  toLocationName: string;
  vendorName: string;
  scheduleDate: string; // ISO Date String
  vendorId: number;
}
