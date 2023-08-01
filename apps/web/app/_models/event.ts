type User = {
  email: string;
};

export type Event = {
  id: string;
  name: string;
  date: Date;
  city: string;
  description?: string | null | undefined;
  isOwner?: boolean | null | undefined;
  owner?: User | null | undefined;
};
