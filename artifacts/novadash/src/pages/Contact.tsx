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

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center nd-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-slate-600">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="nd-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">{t("contact.company")}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{t("contact.labels.address")}</h3>
                    <p className="text-slate-600 leading-relaxed">{t("contact.values.address")}<br/>{t("contact.values.city")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{t("contact.labels.email")}</h3>
                    <p className="text-slate-600 leading-relaxed">{t("contact.values.email")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{t("contact.labels.phone")}</h3>
                    <p className="text-slate-600 leading-relaxed">{t("contact.values.phone")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50 nd-fade-in-up nd-delay-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{t("contact.form.successTitle")}</h3>
                  <p className="text-slate-600">{t("contact.form.success")}</p>
                  <Button
                    className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6"
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
                          <FormLabel>{t("contact.form.name")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("contact.form.placeholders.name")} {...field} className="rounded-xl" />
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
                          <FormLabel>{t("contact.form.email")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("contact.form.placeholders.email")} {...field} className="rounded-xl" />
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
                          <FormLabel>{t("contact.form.company")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("contact.form.placeholders.company")} {...field} className="rounded-xl" />
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
                          <FormLabel>{t("contact.form.message")}</FormLabel>
                          <FormControl>
                            <Textarea placeholder={t("contact.form.placeholders.message")} className="min-h-[120px] rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-6 text-base font-medium">
                      {t("contact.form.submit")}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
