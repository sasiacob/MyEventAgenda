export interface IEvent {
  readonly id: number | string;
  eventType: string;
  clientName: string;
  phoneNumber: string;
  menu: string | string[];
  peopleNo: number;
  date: Date | number | null;
  reservationFee: number;
  menuPrice: number;
  totalPrice: number;
  payableRest: number;
  takeout: boolean;
  otherDetails: string | string[];
}