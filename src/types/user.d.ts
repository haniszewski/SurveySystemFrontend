type User = {
  email: string;
  username: string;
  token: string;
  isAuthenticated: boolean;
};

type CreateUser = {
  email: string;
  username: string;
  password: string;
  repeat: string;
};

type LoginUser = {
  email: string;
  username?: string;
  password: string;
};
