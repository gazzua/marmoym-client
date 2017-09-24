export namespace DefinitionListContainer {
  export interface Props {
    definitions: any;
    getTerms: any;
  }
}

export namespace RootContainer {
  export interface Props {
    dispatch: Function;
  }
}

export namespace MastheadContainer {
  export interface Props {
    history: any;
    handleClickAddTerm: any;
    masthead: any;
    location: any;
  }
}