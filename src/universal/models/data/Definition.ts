export default class Definition  {
  created_at: Date;
  id: number;
  label: string;
  poss: Array<any>;
  status: string;
  term: {
    created_at: Date,
    label: string,
  };
  termId: string;
  updated_at: Date;
  usages: Array<any>
  user: {
    username: string,
  };
  userId: number;
  vote: {
    downVoteCount: number,
    upVoteCount: number,
  };
  voteId: number;
  
  constructor(props: DefinitionConstructorProps) {
    this.created_at = props.created_at;
    this.id = props.id
    this.label = props.label
    this.poss = props.poss
    this.status = props.status
    this.term = props.term
    this.termId = props.termId
    this.updated_at = props.updated_at
    this.usages = props.usages
    this.user = props.user
    this.userId = props.userId
    this.vote = props.vote
    this.voteId = props.voteId
  }
  
  static ofMany(data) {
    return data && data.reduce && data.reduce((acc, d) => {
      if (d!==null) {
        acc.push(
          new Definition({
            created_at: d.created_at,
            id: d.id,
            label: d.label,
            poss: d.poss,
            status: d.status,
            term: d.term,
            termId: d.termId,
            updated_at: d.updated_at,
            usages: d.usages,
            user: d.user,
            userId: d.userId,
            vote: d.vote,
            voteId: d.voteId,
          })
        );
      }
      return acc;
    }, []);
  }
};

interface DefinitionConstructorProps {
  created_at: Date;
  id: number;
  label: string;
  poss: Array<any>;
  status: string;
  term: any;
  termId: string;
  updated_at: Date;
  usages: Array<any>
  user: any;
  userId: number;
  vote: any;
  voteId: number;
}
