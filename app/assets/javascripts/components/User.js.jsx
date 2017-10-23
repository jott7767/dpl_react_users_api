class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{this.props.name}</span>
                <table className="centered">
                  <thead>
                    <tr>
                      <th>Age</th>
                      <th>Weight</th>
                      <th>D.O.B</th>
                      <th>Race</th>
                      <th>Eye Color</th>
                      <th>Hair Color</th>
                      <th>Alive</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.props.age}</td>
                      <td>{this.props.weight}</td>
                      <td>{this.props.dob}</td>
                      <td>{this.props.race}</td>
                      <td>{this.props.eye_color}</td>
                      <td>{this.props.hair_color}</td>
                      <td>{this.props.alive.toString()}</td>
                      <td><button onClick={() => this.props.deleteUser(this.props.url)} className="btn">DELETE</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>);
  }
}