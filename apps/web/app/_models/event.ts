export type Event = {
  id: string;
  name: string;
  date: Date;
  city: string;
  description?: string | null | undefined;
};