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
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { t } = useI18n();
  useSEO("seo.contact.title", "seo.contact.description");
  const [submitted, setSubmitted] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, t("contact.form.validation.name")),
    email: z.string().email(t("contact.form.validation.email")),
    company: z.string().min(2, t("contact.form.validation.company")),
    message: z.string().min(10, t("contact.form.validation.message")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setSubmitted(true);
  }

  const contactInfo = [
    {
      icon: MapPin,
      accent: false,
      label: t("contact.labels.address"),
      value: (
        <>
          {t("contact.values.address")}
          <br />
          {t("contact.values.city")}
        </>
      ),
    },
    {
      icon: Mail,
      accent: true,
      label: t("contact.labels.email"),
      value: t("contact.values.email"),
    },
    {
      icon: Phone,
      accent: false,
      label: t("contact.labels.phone"),
      value: t("contact.values.phone"),
    },
  ];

  return (
    <>
      {/* Contact Section */}
      <section className="pt-40 pb-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 nd-botanical-dots opacity-50 pointer-events-none z-0"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.06] blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left: Intro + contact info */}
            <div className="lg:col-span-5 nd-botanical-fade-up">
              <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-4">
                {t("contact.eyebrow")}
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-[1.1] tracking-tight">
                <span className="italic text-[var(--color-primary)]">{t("contact.title")}</span>
              </h1>
              <p className="text-xl text-[var(--color-text-muted)] mb-10 leading-relaxed">
                {t("contact.subtitle")}
              </p>
              <div className="w-12 h-1 rounded bg-[var(--color-text)] mb-10"></div>

              <h2 className="text-2xl font-serif font-semibold text-[var(--color-text)] mb-8">
                {t("contact.company")}
              </h2>

              <div className="space-y-5">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  const color = item.accent ? "var(--color-accent)" : "var(--color-primary)";
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white border border-[var(--color-border)] shadow-sm hover:border-[var(--color-primary)]/50 transition-colors"
                    >
                      <div
                        className="w-12 h-12 bg-[var(--color-bg)] rounded-lg border border-[var(--color-border)] flex items-center justify-center shrink-0"
                        style={{ color }}
                      >
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-1.5">
                          {item.label}
                        </h3>
                        <p className="text-[var(--color-text)] font-medium leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Form panel */}
            <div className="lg:col-span-6 lg:col-start-7 nd-botanical-card p-8 md:p-10 nd-botanical-fade-up nd-delay-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-lg flex items-center justify-center mx-auto mb-6 border border-[var(--color-border)]">
                    <CheckCircle2 size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-serif font-semibold text-[var(--color-text)] mb-4">
                    {t("contact.form.successTitle")}
                  </h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {t("contact.form.success")}
                  </p>
                  <Button
                    className="mt-8 nd-botanical-btn-primary px-8 py-6 text-sm font-mono uppercase tracking-wide"
                    onClick={() => setSubmitted(false)}
                  >
                    {t("contact.form.newMessage")}
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-text-muted)]">
                            {t("contact.form.name")}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("contact.form.placeholders.name")}
                              {...field}
                              className="rounded-lg border-[var(--color-border)] bg-white focus-visible:ring-[var(--color-primary)]"
                            />
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
                          <FormLabel className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-text-muted)]">
                            {t("contact.form.email")}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("contact.form.placeholders.email")}
                              {...field}
                              className="rounded-lg border-[var(--color-border)] bg-white focus-visible:ring-[var(--color-primary)]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-text-muted)]">
                            {t("contact.form.company")}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("contact.form.placeholders.company")}
                              {...field}
                              className="rounded-lg border-[var(--color-border)] bg-white focus-visible:ring-[var(--color-primary)]"
                            />
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
                          <FormLabel className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-text-muted)]">
                            {t("contact.form.message")}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("contact.form.placeholders.message")}
                              className="min-h-[120px] rounded-lg border-[var(--color-border)] bg-white focus-visible:ring-[var(--color-primary)]"
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
                      {t("contact.form.submit")}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
