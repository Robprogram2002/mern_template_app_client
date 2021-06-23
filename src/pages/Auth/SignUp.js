import React from "react";
import {useHistory} from "react-router-dom"
import useInput from "../../hooks/user_input";
import Input from "../../components/Forms/Input/Input";
import {useDispatch, useSelector} from "react-redux"
import {signUp} from "../../store/user_actions"

const isNotEmpty = (value) => value.trim() !== "";

const isEmail = (value) => value.includes("@");

const SignUp = () => {
  const dispatchFn = useDispatch();
  const uiState = useSelector((state) => state.ui);
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

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameHasChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isNotEmpty);


  let formIsValid = false;

  if (emailIsValid && passwordIsValid && nameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    dispatchFn(signUp({
      email: emailValue,
      password: passwordValue,
      username: nameValue
    }));


    emailReset();
    passwordReset();
    nameReset();
  };

  return (
    <section className="auth-form">
    {uiState.errorResponse && (
      <p className="error-text"> {uiState.errorMessage} </p>
    )}
      <form onSubmit={submitHandler}>
      <Input
          id="name"
          label="Your Username"
          type="text"
          control="input"
          onChange={nameHasChangeHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
          hasError={nameHasError}
          errorMessage={"Please enter a non-empty username"}
        />
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
          {uiState.loading ? " Loading ..." : "Sign Up"}
        </button>
      </form>

      <p> Already have an account? <span onClick = {() => history.push("/login")} > Sign In  </span> </p>
    </section>
  );
};

export default SignUp;
