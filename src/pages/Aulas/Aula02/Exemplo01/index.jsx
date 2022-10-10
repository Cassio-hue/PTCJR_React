import './index.css'

function formatDate(date) {
  return date.toLocaleDateString('pt-br')
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  )
}

const comment = {
  date: new Date(),
  text: 'Adorei esse filme, mudou minha opinião sobre este gênero!',
  author: {
    name: 'GatinhoFofo',
    avatarUrl:
      'https://media-exp1.licdn.com/dms/image/C4E03AQHPMSiuWXaR1Q/profile-displayphoto-shrink_800_800/0/1517026357685?e=2147483647&v=beta&t=5jHibUWXOlqfJMYPWbr8mv3kZ3av38keclG-BVCzH_k',
  },
}

export const Exemplo01 = () => {
  return (
    <>
      <h1>Exemplo 01</h1>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </>
  )
}
