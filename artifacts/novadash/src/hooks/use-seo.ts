import { useEffect } from 'react';
import { useI18n } from '@/i18n';

export function useSEO(titleKey: string, descriptionKey: string) {
  const { t, lang } = useI18n();

  useEffect(() => {
    // Basic translation, if we want to pass specific strings we can, 
    // but typically we can just resolve from translations.
    const title = t(titleKey);
    const description = t(descriptionKey);

    // Fallback if not found
    const finalTitle = title !== titleKey ? `${title} | NovaDash` : 'NovaDash | Order Management Platform';
    
    document.title = finalTitle;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description !== descriptionKey ? description : 'Cloud-based multi-channel order management platform.');
    
  }, [t, titleKey, descriptionKey, lang]);
}
