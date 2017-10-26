interface ContainerPropsBase {
  dispatch?: Function,
  match?: any;
}

export namespace DefinitionListContainer {
  export interface Props extends ContainerPropsBase {
    definitions: any;
  }
}

export namespace RootContainer {
  export interface Props extends ContainerPropsBase {
  }
}

export namespace MastheadContainer {
  export interface Props {
    history?: any;
    handleClickAddTerm: any;
    masthead: any;
    location?: any;
    dispatch?: any;
    searchRequested?: string;
  }

  export interface State {
    displayName: string;
    query: string;
    modalIsVisible: boolean;
  }
}

export namespace DefaultModalContainer {
  export interface Props {
    isVisible?: any;
    handleClickBackdrop: any;
  }
}

export namespace GlobalMenuModalContainer {
  export interface Props {
    handleClickHamburgerIcon: any;
    handleClickBackdrop: any;
  }
}