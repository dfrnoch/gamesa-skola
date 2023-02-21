import { signIn, signOut, useSession } from "next-auth/react";

const StartGame: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-black">
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        Přihlásit se
      </button>
    </div>
  );
};

export default StartGame;
