import { Button, IButtonProps } from 'native-base'
import { ReactNode } from 'react'

interface BotaoProps extends IButtonProps {
    children: ReactNode
    autoSize?: boolean
    bgColor?: string
}

export function Botao({ children, autoSize= false, bgColor, ...rest }: BotaoProps) {
    return (
        <Button
            w={autoSize ? 'auto' : '100%'}
            bg={bgColor || 'blue.800'}
            mt={10}
            p={4}
            borderRadius="lg"
            _text={{color: 'white'}}
            {...rest}
        >
            {children}
        </Button>
    )
}