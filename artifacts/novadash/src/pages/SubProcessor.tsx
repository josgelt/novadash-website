import React from "react";
import { useI18n } from "@/i18n";
import { translations } from "@/i18n/translations";
import { useSEO } from "@/hooks/use-seo";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SubProcessor() {
  const { t, lang } = useI18n();
  useSEO('seo.subProcessor.title', 'seo.subProcessor.description');

  const rows = translations[lang].legal.subProcessor.rows;

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-16 px-6">
        <div className="container mx-auto max-w-4xl nd-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {t('legal.subProcessorTitle')}
          </h1>
          <p className="text-slate-500">{t('legal.dateLabel')} {new Date().toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US')}</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-600 italic border-l-4 border-indigo-600 pl-4 mb-8">
              {t('legal.placeholderText')}
            </p>
            <p>
              {t('legal.subProcessor.intro')}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="w-[200px]">{t('legal.subProcessor.colName')}</TableHead>
                  <TableHead>{t('legal.subProcessor.colPurpose')}</TableHead>
                  <TableHead>{t('legal.subProcessor.colLocation')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell>{row.purpose}</TableCell>
                    <TableCell>{row.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
}
