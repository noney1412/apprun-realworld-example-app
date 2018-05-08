handleLogin() {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

handleLogin() {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  handleLogout() {
    firebase.auth().signOut();
  }

  render() {
    const { user, value, messages } = this.state;

    return (
      <div>
        {user ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
    )}
}