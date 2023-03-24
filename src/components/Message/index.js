import './index.css'

const Message = props => {
  const {message} = props
  return !message ? (
    <h1 className="heading">Welcome User</h1>
  ) : (
    <h1 className="heading">Please Login</h1>
  )
}

export default Message
