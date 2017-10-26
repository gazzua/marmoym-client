namespace ContainerBase {
  export interface Props {
    dispatch?: Function,
    match?: any;
    history?: any;
    location?: any;
  }
}

export namespace DefinitionListContainer {
  export interface Props extends ContainerBase.Props {
    definitions: any;
  }
}

export namespace RootContainer {
  export interface Props extends ContainerBase.Props {
  }
}

export namespace MastheadContainer {
  export interface Props extends ContainerBase.Props {
    handleClickAddTerm: any;
    masthead: any;
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
    handleClickBackdrop: any;
  }
}

export namespace GlobalMenuModalContainer {
  export interface Props extends DefaultModalContainer.Props, ContainerBase.Props {
    handleClickHamburgerIcon: any;
    handleClickBackdrop: any;
  }
}