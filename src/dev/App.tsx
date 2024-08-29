import { Button } from "@/components/ui/Button";

function App() {
  return (
    <>
      <div className="flex w-full h-screen items-center justify-center">
        <div className="max-w-[500px] w-full flex-col gap-4 flex items-center">
          <Button
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            Toggle Dark Mode
          </Button>

          <Button>Login</Button>
          <Button variant="social-google">Login com Google</Button>
          <Button variant="social-apple">Sign in with Apple</Button>
          <Button variant="social-google" size="icon" />
          <Button variant="social-apple" size="icon" />
          <Button asChild variant="social-apple">
            <a href="https://aquarela.io">Sign Up</a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
