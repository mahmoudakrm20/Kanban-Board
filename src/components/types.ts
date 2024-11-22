export interface MemberCard {
  title: string;
  name: string;
  age: string;
  email: string;
  phone: string;
  status?:
    | "Unclaimed"
    | "First Contact"
    | "Preparing Work Offer"
    | "Send to Therapist";
}
export interface FormValues {
  title: string;
  name: string;
  age: string;
  email: string;
  phone: string;
}
