import React, {useState} from "react";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm({onSubmit})
{
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");




    const submitHandler = (e) =>
    {
        e.preventDefault();

       /* if(isValid())
        {
            onSubmit
            ({
                login,
                password
            });
            setLogin( "");
            setPassword( "");
        }*/


    };

    return <>
        <h3>Регистрация</h3>
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