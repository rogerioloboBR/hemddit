"use client"
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {toast} = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
        
      await signIn("google");
    } catch (error) {
      //toast notification
      toast({
        title:'Erro ao fazer login',
        description: 'Ocorreu um erro ao efetuar login com o Google',
        variant:'destructive'
      })
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        size="sm"
        className="w-full">
        {isLoading ? null: <Icons.google className="w-6 h-6 mr-2" />}
      
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
