export interface Item {
  id: number;
  name: string;
  description: string | null;
  created_at: Date;
}

export interface CreateItemDTO {
  name: string;
  description?: string;
}

export interface UpdateItemDTO {
  name?: string;
  description?: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}
