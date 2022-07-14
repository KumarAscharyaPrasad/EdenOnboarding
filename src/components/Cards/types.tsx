export type CardType = "MYSELF" | "MYTEAM";

export type CardsProps = {
  icon: React.ReactNode;
  header: string;
  content: string;
  checked: boolean;
  changeSelected: React.Dispatch<React.SetStateAction<CardType>>;
  current: CardType;
};
