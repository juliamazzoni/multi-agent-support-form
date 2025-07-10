
export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  subject: string;
  description: string;
}


export interface InputFieldProps {
  label: string; 
  type: string; 
  name: keyof FormData; 
  onChange: (e: React.ChangeEvent<any>) => void;
  data: FormData;
  error: boolean;
  setFormData?: (newData: FormData) => void;
}