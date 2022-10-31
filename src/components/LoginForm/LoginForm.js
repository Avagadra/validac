import {useState} from "react";
import styles from "./LoginForm.module.css";

export default function LoginForm({onSubmit})
{
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const isValid = () =>
    {
        let result = true;
        setLoginError("");
        if(login.length === 0)
        {
            setLoginError("Логин не может быть пуст!");
            result = false;
        }

        if(!/^[a-z0-9]{6,20}$/.test(login))
        {
            setLoginError("Логин должен содержать латинские буквы и цифры и быть длинной от 6 до 20 символов");
            result = false;
        }

        setPasswordError("");
        if(password.length === 0)
        {
            setPasswordError("Пароль не может быть пуст!");
            result = false;
        }
        if(!/^[a-z0-9]{6,20}$/.test(password))
        {
            setPasswordError("Логин должен содержать латинские буквы и цифры и быть длинной от 6 до 20 символов");
            result = false;
        }
        return result;
    };


    const submitHandler = (e) =>
    {
        e.preventDefault();

        if(isValid())
        {
            onSubmit
            ({
                login,
                password
            });
            setLogin( "");
            setPassword( "");
        }


    };

    return <>
        <h3>Вход в личный кабинет</h3>
        <form onSubmit={submitHandler}>
            <div>
                <label>Логин:
                    <input
                        value={login}
                        onChange={e => setLogin(e.target.value)}/>
                </label>
            </div>
            {loginError && <div className={styles.error}>{loginError}</div>}
            <div>
                <label>Пароль:
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                </label>
            </div>
            {passwordError && <div className={styles.error}>{passwordError}</div>}
            <button type="submit">Войти</button>
            <button type="reset">Очистить</button>
        </form>
    </>;
}