export type ItemType = {
  id: number,
  text: string,
  done: boolean
};

export type StateType = {
  filter: string,
  items: ItemType[]
};

export type ActionType = {
  type: string,
  value: string | number
};