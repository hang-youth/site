import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter()

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? activeClassName
      : ''

  return (
    <li className={className}>
      <Link {...props}>
        {children}
      </Link>
    </li>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string,
}

export default ActiveLink
