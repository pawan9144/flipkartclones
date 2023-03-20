import React from 'react'

export const BackgroundImage: React.FC<any> = ({
    children,
    src,
    ...rest
}): JSX.Element => {
    const styling = {
        backgroundImage: `url('${src}')`,
        width: '100%',
        height: '266px',
    }
    return (
        <div style={styling} {...rest}>
            {children}
        </div>
    )
}
