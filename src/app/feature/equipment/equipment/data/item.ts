export interface Item {
  name: string;
  value: number;
  image: string;
  key: string;
  type: ItemType;
}

export enum ItemType {
  CHEST = 'chest',
  REWARD = 'reward',
}
