import React from 'react';
import helloSvg from './hello.svg';
import './styles.scss'

const Counter: React.FC<{
    count: number
    className: string
}> = ({ count, className }) => (
    <div className={`counter ${className}`}>
        <p
            key={count}
            className={`counter__count ${className ? className + '__count' : ''}`}
        >
            {count}
        </p>
        <img src={helloSvg} alt="hello" />
    </div>
)

export default Counter;
