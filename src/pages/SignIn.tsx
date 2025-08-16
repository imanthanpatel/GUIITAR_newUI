import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SignIn = () => {
  useEffect(() => {
    // SEO: title and meta description
    document.title = 'Sign in | GUIITAR Council';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Sign in to GUIITAR Council. Continue with Google. GSFC University students: use your university email ID.'
      );
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Sign in to GUIITAR Council. Continue with Google. GSFC University students: use your university email ID.';
      document.head.appendChild(m);
    }
  }, []);

  const handleGoogleSignIn = () => {
    // Temporary mock for UI preview only. Replace with real auth later.
    try {
      localStorage.setItem('mockUser', '1');
      localStorage.setItem('mockAvatar', '/placeholder.svg');
      window.location.href = '/dashboard';
    } catch {
      window.location.href = '/dashboard';
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-28 pb-16 px-6">
        <section className="max-w-md mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Sign in</h1>
            <p className="text-sm text-muted-foreground mt-3">
              For GSFC University students please sign in using university email id
            </p>
          </header>

          <div className="glass rounded-2xl p-6 space-y-4">
            <button
              onClick={handleGoogleSignIn}
              className="btn-primary w-full h-11 rounded-xl flex items-center justify-center gap-3"
              aria-label="Continue with Google"
            >
              <span className="text-base font-medium">Continue with Google</span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
