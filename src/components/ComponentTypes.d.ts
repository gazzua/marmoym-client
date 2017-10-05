export namespace Definition {
  export interface Props {
    defId?: number;
    badges?: string[];
    term?: string;
    label?: string;
    usage?: string;
    pos?: string;
    media?: string;
    origin?: string;
    dispatch?: any;
    handleClick?: any;
  }
}

export namespace Masthead {
  export interface Props {
    handleClickAddTerm: any;
    history: any;
    pathname: any;
    handleClick: any;
  }
}