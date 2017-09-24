export namespace Definition {
  export interface Props {
    badges?: string[];
    term?: string;
    label?: string;
    usage?: string;
    pos?: string;
    media?: string;
    origin?: string;
  }
}

export namespace Masthead {
  export interface Props {
    handleClickAddTerm: any;
    history: any;
    pathname: any;
  }
}