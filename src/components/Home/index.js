import {Component} from 'react'
import Login from '../Login'
import Message from '../Message'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    const text = !isLogin ? <Logout /> : <Login />
    return (
      <div className="container">
        <div className="card-container">
          <Message message={isLogin} />
          <button type="button" onClick={this.onClickButton} className="button">
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
