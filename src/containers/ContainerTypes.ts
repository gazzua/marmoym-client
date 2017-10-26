interface ContainerPropsBase {
  dispatch?: Function,
  match?: any;
}

export namespace DefinitionListContainer {
  export interface Props extends ContainerPropsBase {
    definitions: any;
  }
}

export namespace SignInContainer {
  export interface Props extends ContainerPropsBase {
    member: any;
  }

  export interface State {
    username: string;
  }
}

export namespace RootContainer {
  export interface Props extends ContainerPropsBase {
  }
}

export namespace MastheadContainer {
  export interface Props {
    history: any;
    handleClickAddTerm: any;
    masthead: any;
    location: any;
    dispatch: any;
    searchRequested?: any;
  }

  export interface State {
    displayName: string;
    query: string;
  }
}