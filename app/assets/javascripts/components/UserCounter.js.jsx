class UserCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div className='chip'>Users Count: {this.props.userCount}</div>);
  }
}