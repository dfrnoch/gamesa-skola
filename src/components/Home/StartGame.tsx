import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

const StartGame: React.FC = () => {
  const { data: sessionData } = useSession();
  const startGame = api.game.startGame.useMutation();

  const start = async () => {
    await startGame.mutateAsync();

    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-black h-screen w-screen">
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {!sessionData ? "Přihlásit se" : "Odhlásit se"}
      </button>

      {sessionData && (
        <button
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={start}
        >
          Začít hru
        </button>
      )}
    </div>
  );
};

export default StartGame;
