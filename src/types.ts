export enum Widget {
  WIDGET_APPOINTMENT = 'WIDGET_APPOINTMENT',
  WIDGET_PRICING = 'WIDGET_PRICING',
  WIDGET_BUSINESS_HOURS = 'WIDGET_BUSINESS_HOURS',
  WIDGET_PROMOTIONS = 'WIDGET_PROMOTIONS',
}

export interface AppConfig {
  style: string;
  orientation: string;
  position: string;
}

export interface Hour {
  openTime: string;
  closeTime: string;
}

export interface Period {
  day: string;
  hours: Hour[];
}

export interface BusinessPhone {
  canSMS: boolean;
  phoneNumber: string;
}

export interface Holiday {
  start: Date;
  name: string;
  date: string;
  end: any;
  type: string;
}

export interface WorkingHours {
  customMessage: string;
  periods: Period[];
  businessPhone: BusinessPhone;
  fullDay: boolean;
  holidays: Holiday[];
}

export interface PromoDiscount {
  type: string;
  amount: number;
}

export interface Promotion {
  id: string;
  title: string;
  promoCode: string;
  fromDate: number;
  toDate: number;
  shortDescription: string;
  longDescription: string;
  promoDiscount: PromoDiscount;
}

export interface PriceMoney {
  amount: number;
  currency: string;
  symbol: string;
}

export interface Variation {
  item_id: string;
  name: string;
  price_money: PriceMoney;
}

export interface CategoryItem {
  id: string;
  name: string;
  variations: Variation[];
}

export interface Category {
  id: string;
  name: string;
}

export interface CategoryPrice {
  categoryItems: CategoryItem[];
  category: Category;
}

export interface Appointment {
  categoryItems: CategoryItem[];
  category: Category;
}

export interface WidgetData {
  appointments: Appointment[];
  promotions: Promotion[];
  businessHours: WorkingHours;
  categoryPrices: CategoryPrice[];
}

export interface ConfigData extends AppConfig {
  widgets: Widget[];
  widgetData: WidgetData;
}
