import { PropsWithChildren } from 'react'
import tw from 'tailwind-styled-components'

const Header = tw.header`
    flex
    flex-col
    gap-8
    text-center
    tracking-wider
    leading-5
    mb-10
`

const SHeader = ({ children }: PropsWithChildren) => <Header>{children}</Header>

export default SHeader
