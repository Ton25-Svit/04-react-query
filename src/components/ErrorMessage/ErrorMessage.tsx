import css from './ErrorMessage.module.css'
interface ErrorMessageProps {
    message: string;
}
const ErrorMessage = ({message}:ErrorMessageProps) => {
    return (
        <p className={css.text}>There was an error {message}, please try again...</p>
    );
};



export default ErrorMessage;