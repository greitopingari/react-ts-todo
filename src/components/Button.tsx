import { CustomButtonProps } from '../types'

const Button = ({ title, btnType, containerStyles, textStyles, handleClick }: CustomButtonProps) => {
    return (
        <button
            type={btnType}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={textStyles}>{title}</span>
        </button>
    )
}

export default Button