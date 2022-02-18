import './style.scss';

const Button = ({children,type ,color , onClick }) => {
  return ( 
    <button 
      className={`button button--${color}`}
      type={type}
      onClick={() => onClick ()}
  >


      <label className='button_label'>{children}</label>
  </button>
  )
}

export default Button