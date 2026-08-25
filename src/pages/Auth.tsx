import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, LockKeyhole, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { isSupabaseConfigured } from "@/integrations/supabase/client";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user) navigate("/admin", { replace: true });
  }, [navigate, user]);

  if (user) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setSubmitting(true);
    const { error } = await signIn(email, password);

    setSubmitting(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: error.message === "Invalid login credentials"
          ? "Email ou senha incorretos."
          : error.message,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img src="/assets/logo-negativa.svg" alt="Alpha Sistemas Automotivos" className="h-14 mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-1">Acesso administrativo</h1>
          <p className="text-sm text-muted-foreground">
            Painel de gerenciamento do catálogo
          </p>
        </div>

        {!isSupabaseConfigured && (
          <div className="mb-4 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
            <div className="flex items-start gap-3">
              <LockKeyhole className="mt-0.5 h-4 w-4 flex-none" />
              <p>O acesso administrativo será liberado após configurar a integração segura do catálogo.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="card-technical space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>
          <Button type="submit" variant="hero" className="w-full" disabled={submitting || !isSupabaseConfigured}>
            <LogIn className="w-4 h-4" />
            {submitting ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <a href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="w-3 h-3" /> Voltar ao site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
