import { Response } from "miragejs";
import dayjs from "dayjs";
import { jwtDecode as jwt_decode } from "jwt-decode";

export const requiresAuth = function (request) {
  const encodedToken = request.requestHeaders.authorization;
  const decodedToken = jwt_decode(
    encodedToken,
    "Authenv"
  );
  if (decodedToken) {
    const user = this.db.users.findBy({ email: decodedToken.email });
    return user;
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
