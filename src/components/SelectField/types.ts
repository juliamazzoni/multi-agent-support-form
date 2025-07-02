
interface Options {
  value: string; 
  label: string;
}

export interface SelectFieldProps {
  label: string;  
  name: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  options: Options[];
  data: { [key: string]: string };
}