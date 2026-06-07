import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  const { t } = useI18n();
  useSEO('seo.notFound.title', 'seo.notFound.description');

  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-slate-50 py-20 px-6">
      <div className="max-w-md w-full text-center nd-fade-in-up">
        <div className="w-20 h-20 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={40} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">{t('notFound.title')}</h2>
        
        <p className="text-lg text-slate-600 mb-10">
          {t('notFound.text')}
        </p>

        <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-base font-medium">
          <Link href="/">{t('notFound.back')}</Link>
        </Button>
      </div>
    </div>
  );
}
