import { useMutation } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const [signInPerson, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) =>
    signInPerson({ variables: { username, password } });

  return [signIn, result];
};

export default useSignIn;
