import { Link } from "react-router-dom";
import { PillButton } from "../components/PillButton";

export function RegisterPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex items-center justify-center bg-ivory px-6 py-16">
        <div className="w-full max-w-xl rounded-[2rem] bg-white p-8 shadow-soft">
          <p className="text-xs uppercase tracking-luxe text-gold">Join the Aura Circle</p>
          <h1 className="mt-4 font-serif text-5xl text-ink">Create your account.</h1>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <input placeholder="Full Name" className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-gold" />
            <input placeholder="Email Address" className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-gold" />
            <input placeholder="Phone Number" className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-gold" />
            <input type="password" placeholder="Password" className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-gold" />
            <input type="password" placeholder="Confirm Password" className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-gold md:col-span-2" />
          </div>
          <label className="mt-5 flex items-start gap-3 text-sm text-stone-600"><input type="checkbox" className="mt-1" /> I agree to the terms, privacy policy, and premium member communications.</label>
          <PillButton className="mt-6 w-full">Create Account</PillButton>
          <p className="mt-6 text-center text-sm text-stone-600">Already registered? <Link to="/login" className="text-gold">Sign in</Link></p>
        </div>
      </div>
      <div className="hidden bg-cover bg-center lg:block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=80')" }} />
    </div>
  );
}
