import userDetails from "../../components/(forms)/ProfileForms/userDetailsForm";

import UserInfo from "../../components/(forms)/WorkoutForms/userInfo";

import SignUp from "../../components/(forms)/AccessForms/SignUpForm";
import LogIn from "../../components/(forms)/AccessForms/LogInForm";

const profilePage = () => {
  return (
    <section>
      <LogIn />
      <UserInfo />
    </section>
  );
};

export default profilePage;
