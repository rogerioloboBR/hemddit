import { FC } from "react";
import { Icons } from "./Icons";
import { Link } from "lucide-react";
import UserAuthForm from "./UserAuthForm";

const SignIn: FC = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-30 w-30" />
        <h1 className="text-2xl font-semibold tracking-tighter">
          Bem vindo de volta!
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          Ao continuar, você está configurando uma conta H&Mddit e concorda com
          nosso Contrato do Usuário e Política de Privacidade.
        </p>
        {/*Sign in form */}
        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          Novo no H&Mddit?{" "}
          <Link
          href='/sign-up'
          className='hover:text-brand text-sm underline underline-offset-4'>
          Sign Up
        </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
