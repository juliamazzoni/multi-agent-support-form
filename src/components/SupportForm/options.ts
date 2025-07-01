import type { SelectOption } from "./types";

export const categoryOptions: SelectOption[] = [
  { value: 'bug', label: 'Bug' },
  { value: 'feature-request', label: 'Feature Request' },
  { value: 'payment', label: 'Payment' },
  { value: 'access-issue', label: 'Access Issue' },
];

export const relatedProductOptions: SelectOption[] = [
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'api', label: 'API' },
  { value: 'mobile-app', label: 'Mobile App' },
  { value: 'user-accounts', label: 'User Accounts' },
];

export const priorityOptions: SelectOption[] = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'critical', label: 'Critical' },
];
