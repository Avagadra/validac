export const isValid = () =>
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