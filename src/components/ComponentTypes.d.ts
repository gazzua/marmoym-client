export namespace DefinitionPane {
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
    def?: any;
  }
}

export namespace Masthead {
  export interface Props {
    pathname?: any;
    handleClickAddTerm?: any;
    handleClickMarmoymLogo?: any;
  }
}