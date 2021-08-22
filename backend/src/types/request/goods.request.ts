import { Request } from 'express';
export interface CreateGoodsBody {
  title: string;
  category: number;
  isGreen: boolean;
  price: number;
  stock: number;
  state: string;
  discountRate: number;
  deliveryInfo: number;
}

export type UpdateGoodsBody = CreateGoodsBody & {
  oldImages: string;
};

export interface CreateGoodsRequest extends Request {
  body: CreateGoodsBody;
}

export interface UpdateGoodsRequest extends Request {
  body: UpdateGoodsBody;
}
