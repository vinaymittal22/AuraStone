import { Link } from "react-router-dom";
import { PillButton } from "../components/PillButton";

export function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-[0.9fr_1.1fr]">
      <div className="hidden bg-cover bg-center lg:block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1400&q=80')" }} />
      <div className="flex items-center justify-center bg-ivory px-6 py-16">
        <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-soft">
          <p className="text-xs uppercase tracking-luxe text-gold">Aura Stone Account</p>
          <h1 className="mt-4 font-serif text-5xl text-ink">Welcome back.</h1>
          <p className="mt-4 text-sm leading-7 text-stone-600">Sign in to track orders, save favourites, and continue your premium shopping journey.</p>
          <div className="mt-8 space-y-4"><input placeholder="Email" className="h-12 w-full rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-gold" /><input type="password" placeholder="Password" className="h-12 w-full rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-gold" /></div>
          <div className="mt-4 text-right text-sm text-gold">Forgot password?</div>
          <PillButton className="mt-6 w-full">Sign In</PillButton>
          <button className="mt-4 h-12 w-full rounded-full border border-black/10 text-sm text-ink">Continue with Google</button>
          <p className="mt-6 text-center text-sm text-stone-600">New here? <Link to="/register" className="text-gold">Create an account</Link></p>
        </div>
      </div>
    </div>
  );
}
