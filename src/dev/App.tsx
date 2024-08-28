import { Button } from "@/components/ui/Button";

function App() {
  return (
    <>
      <div className="flex w-full h-screen items-center justify-center">
        <div className="max-w-[500px] w-full flex-col gap-4 flex  dark">
          <Button>Login</Button>
          <Button variant="google">Login com Google</Button>
        </div>
      </div>
    </>
  );
}

export default App;
