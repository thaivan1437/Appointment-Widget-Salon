export type WorkingHour = {
  customMessage: string;
  periods: Period[];
  businessPhone: BusinessPhone;
  fullDay: boolean;
  holidays: Holiday[];
};

export type Period = {
  day: string;
  hours: Hour[];
};

export type Hour = {
  openTime: string;
  closeTime: string;
};

export type BusinessPhone = {
  canSMS: string;
  phoneNumber: string;
};

export type Holiday = {
  start: string;
  name: string;
  date: string;
  end: string;
  type: string;
};
