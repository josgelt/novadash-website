import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";
import { legalContent } from "@/i18n/legal-content";
import { LegalDocument } from "@/components/legal/LegalDocument";

export default function Privacy() {
  const { t, lang } = useI18n();
  useSEO('seo.privacy.title', 'seo.privacy.description', { noindex: true });

  return <LegalDocument title={t('legal.privacyTitle')} doc={legalContent[lang].privacy} />;
}
