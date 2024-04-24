import PropTypes from 'prop-types'

const Link = ({ to, mobile=false }) => {
  return (
    <li>
      <a 
        href={`#${to.toLowerCase()}`} 
        className={`link ${mobile ? 'mobile' : ''}`}>
          { to }
      </a>
    </li>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  mobile: PropTypes.bool
}

export default Link