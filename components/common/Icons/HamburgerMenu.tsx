import { TIconProps } from './types'

export const IconHamburgerMenu = ({ handleClick, height = 24, width = 24, isActive, stroke = 'white' }: TIconProps) => (
  <svg height={`${height}px`} width={`${width}px`} viewBox='0 0 24 24' className='cursor-pointer filter drop-shadow' fill='none' stroke={stroke}>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
  </svg>
)
