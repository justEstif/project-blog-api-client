import tw from 'tailwind-styled-components'

interface IButtonProps {
  $cancel?: boolean
}
const SButton = tw.button<IButtonProps>`
    ${(p) => (p.$cancel ? 'bg-red-600' : 'bg-purple-500')}
    ${(p) => (p.$cancel ? 'hover:bg-red-500' : 'hover:bg-purple-400')}
    shadow
    focus:shadow-outline
    focus:outline-none
    text-white
    font-bold
    py-2
    px-4
    rounded
  `
export default SButton
