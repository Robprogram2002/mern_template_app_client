import React from "react";
import { useHistory } from "react-router-dom";
import useInput from "../../hooks/user_input";
import Input from "../../components/Forms/Input/Input";
import { useDispatch } from "react-redux";
import { singIn } from "../../store/user_actions";

const isNotEmpty = (value) => value.trim() !== "";

const isEmail = (value) => value.includes("@");

const LoginPage = () => {
  const dispatchFn = useDispatch();
  const history = useHistory();
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(emailValue);
    console.log(passwordValue);

    dispatchFn(singIn({ email: emailValue, password: passwordValue }));
    emailReset();
    passwordReset();
  };

  return (
    <section className="auth-form">
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="Your E-Mail"
          type="email"
          control="input"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
          hasError={emailHasError}
          errorMessage={"Please enter a valid email"}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          control="input"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={passwordValue}
          hasError={passwordHasError}
          errorMessage={"Please enter a non empty password"}
        />
        <button type="submit" disabled={!formIsValid}>
          Login
        </button>
      </form>

      <p>
        {" "}
        Don't have an account yet ?{" "}
        <span onClick={() => history.push("/signup")}> Sign Up </span>{" "}
      </p>
    </section>
  );
};

export default LoginPage;
