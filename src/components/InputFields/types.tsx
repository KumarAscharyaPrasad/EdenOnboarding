import { CardType } from "../Cards/types";

export type NamesType = {
  fullName: string;
  displayName: string;
};
export type WorkspaceType = {
  workspaceName: string;
  url: string;
};
export type FirstPageInputProps = {
  names: NamesType;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText: string;
  path: string;
};
export type SecondPageInputProps = {
  workspace: WorkspaceType;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText: string;
  path: string;
};
export type ThirdPageInputProps = {
  selected: CardType;
  setSelected: React.Dispatch<React.SetStateAction<CardType>>;
  buttonText: string;
  path: string;
};
