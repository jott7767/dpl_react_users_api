class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: [], loaded: false};
    this.displayUsers = this.displayUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.userSearch = this.userSearch.bind(this);
    this.searchApi = this.searchApi.bind(this);

  }

  componentDidMount() {
    $.ajax({
      url: 'https://devpoint-projects-ottjw.c9users.io/api/v1/users',
      type: 'GET'
    }).done(data => {
      this.setState({users: data.users, loaded: true});
    }).fail(data => {
      console.log(data);
    })
  }

  displayUsers() {
    return this.state.users.map(userData => {
      console.log(userData)
      let user = userData.user
      let key = `user-${user.id}`
      return(<User key={key} url={userData.url} deleteUser={this.deleteUser} {...user} />);
    });
  }

  deleteUser(url) {
    $.ajax({
      url: url,
      type: 'DELETE'
    }).done(data => {
      let filteredUsers = this.state.users.filter(user => {
        return(user.url !== url);
      });
      this.setState({users: filteredUsers});
    }).fail(data => {
      console.log(data)
    });

  }

  searchApi() {
    $.ajax({
      url: 'https://devpoint-projects-ottjw.c9users.io/api/v1/users_search',
      type: 'GET',
      data: {term: this.refs.searchInput.value}
    }).done(data => {
      this.setState({users: data.users});
    }).fail(data => {
      console.log(data);
    })

  }

  userSearch() {
    if(this.state.users.length > 0) {
      return(<div>
               <h5>User Search</h5>
               <input ref='searchInput' onKeyUp={this.searchApi} type='text' placeholder='search users by name' />
             </div>);
    }
  }

  render() {
    if(this.state.loaded) {
      return(<div className="center"><UserCounter userCount={this.state.users.length} /> {this.userSearch()} {this.displayUsers()}</div>);
    } else {
      return(<div>Loading...</div>);
    }
  }
}