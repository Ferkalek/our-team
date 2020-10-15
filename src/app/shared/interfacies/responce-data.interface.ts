export interface IImageUrl {
  w200: string;
  w400: string;
  w1080: string;
  w1920: string;
  w2560: string;
}

export interface IBlock {
  title: string;
  description: string;
  link: string;
  text: string;
}

export interface IMemberItem {
  imageUrl: IImageUrl;
  block: IBlock;
}

export interface IMemberCards {
  (item: string): {
    imageUrl: IImageUrl;
    block: IBlock;
  };
}

interface IAttributes {
  title: string;
  memberCards: IMemberCards;
}

export interface IResponceDTO {
  id: string;
  type: string;
  attributes: IAttributes;
}
