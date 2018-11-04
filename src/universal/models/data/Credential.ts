export default class Credential {
  email: string;

  constructor(props: CredentialConstructorProps) {
    this.email = props.email;
  }
  
  static of(data) {
    if (data && data.user) {
      return new Credential({
        email: data.user.user.email,
      })
    }
  }
};

interface CredentialConstructorProps {
  email: string,
}
