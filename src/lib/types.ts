export interface Appointment {
  id: number;
  referenceCode: string | null;
  name: string;
  phone: string;
  email: string | null;
  date: string;
  subject: string | null;
  notes: string | null;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Message {
  id: number;
  name: string;
  phone: string | null;
  email: string | null;
  subject: string | null;
  body: string;
  read: boolean;
  createdAt: string;
}

export interface AdminStats {
  unreadMessages: number;
  pendingAppointments: number;
}
