export interface IButton {
  buttontitle: string;
  c: string;
    bg: string;
    onClick: () => void
}

export interface ICard {
  title: string;
    buttontitle: string;
    onClick: () => void
    inputtitle: string;
    inputtitle1?: string;
    inputtitle2?: string;
    request: boolean;
    sign: boolean;
}

export interface Iinput {
    title: string;
    title1?: string;
    title2?: string;
    request: boolean;
    sign: boolean;
}