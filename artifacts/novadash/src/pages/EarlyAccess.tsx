import React, { useState } from "react";
import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle2, Terminal } from "lucide-react";

export default function EarlyAccess() {
  const { t } = useI18n();
  useSEO("seo.earlyAccess.title", "seo.earlyAccess.description");
  const [submitted, setSubmitted] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, t("earlyAccess.form.validation.name")),
    email: z.string().email(t("earlyAccess.form.validation.email")),
    company: z.string().min(2, t("earlyAccess.form.validation.company")),
    marketplaces: z.string().min(2, t("earlyAccess.form.validation.marketplaces")),
    message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      marketplaces: "",
      message: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setSubmitted(true);
  }

  const inputClass =
    "h-12 rounded-lg border-[var(--color-border)] bg-white font-sans text-[var(--color-text)] focus-visible:ring-[var(--color-primary)] focus-visible:border-[var(--color-primary)]";
  const labelClass =
    "text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-text-muted)]";

  return (
    <section className="pt-40 pb-24 px-6 md:px-12 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 nd-botanical-dots opacity-50 pointer-events-none z-0"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.06] blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center mb-12 nd-botanical-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-[var(--color-primary)]/30 bg-white shadow-sm rounded text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)]">
            <Terminal size={14} className="text-[var(--color-accent)]" />
            {t("earlyAccess.badge")}
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-[1.1] tracking-tight">
            {t("earlyAccess.title")}
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            {t("earlyAccess.subtitle")}
          </p>
        </div>

        <div className="nd-botanical-card p-8 md:p-10 nd-botanical-fade-up nd-delay-100">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-serif font-semibold text-[var(--color-text)] mb-4">
                {t("earlyAccess.form.successTitle")}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-md mx-auto">
                {t("earlyAccess.form.success")}
              </p>
              <Button
                className="nd-botanical-btn-secondary px-8 py-6 text-sm font-mono uppercase tracking-wide"
                onClick={() => setSubmitted(false)}
              >
                {t("earlyAccess.form.newRequest")}
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>{t("earlyAccess.form.name")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("earlyAccess.form.placeholders.name")} {...field} className={inputClass} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>{t("earlyAccess.form.email")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("earlyAccess.form.placeholders.email")} {...field} className={inputClass} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClass}>{t("earlyAccess.form.company")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("earlyAccess.form.placeholders.company")} {...field} className={inputClass} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="marketplaces"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClass}>{t("earlyAccess.form.marketplaces")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("earlyAccess.form.placeholders.marketplaces")} {...field} className={inputClass} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClass}>{t("earlyAccess.form.message")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("earlyAccess.form.placeholders.message")}
                          className="min-h-[120px] rounded-lg border-[var(--color-border)] bg-white font-sans text-[var(--color-text)] focus-visible:ring-[var(--color-primary)] focus-visible:border-[var(--color-primary)]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full nd-botanical-btn-primary py-6 text-sm font-mono uppercase tracking-wide"
                >
                  {t("earlyAccess.form.submit")}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
