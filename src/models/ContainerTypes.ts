interface ContainerBaseProps {
  dispatch?: (any) => any;
  match?: any;
  history?: any;
  location?: any;
}

export interface DefinitionListContainerProps extends ContainerBaseProps {
  definitions: any;
}

export interface RootContainerProps extends ContainerBaseProps {
  someProps?: any;
}

export interface MastheadContainerProps extends ContainerBaseProps {
  handleClickAddTerm: any;
  masthead: any;
  searchRequested?: string;
}

export interface MastheadContainerState {
  displayName: string;
  query: string;
  modalIsVisible: boolean;
}

export interface DefaultModalContainerProps {
  handleClickBackdrop: any;
}

export interface GlobalMenuModalContainerProps extends
  DefaultModalContainerProps,
  ContainerBaseProps {
    
  handleClickHamburgerIcon: any;
  handleClickBackdrop: any;
}
