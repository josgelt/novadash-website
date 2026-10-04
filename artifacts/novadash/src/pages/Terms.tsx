import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";
import { legalContent } from "@/i18n/legal-content";
import { LegalDocument } from "@/components/legal/LegalDocument";

export default function Terms() {
  const { t, lang } = useI18n();
  useSEO('seo.terms.title', 'seo.terms.description', { noindex: true });

  return <LegalDocument title={t('legal.termsTitle')} doc={legalContent[lang].terms} />;
}
