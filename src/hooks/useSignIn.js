import { useMutation, useApolloClient } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const [signInPerson, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const response = signInPerson({ variables: { username, password } });

    if (response?.data?.authorize?.accessToken) {
      await authStorage.setAccessToken(response?.data?.authorize?.accessToken);
    }

    client.resetStore();

    return response;
  };

  return [signIn, result];
};

export default useSignIn;
