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
import { CheckCircle2 } from "lucide-react";

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

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 flex flex-col">
      <section className="flex-1 py-20 px-6 flex items-center justify-center">
        <div className="w-full max-w-xl nd-fade-in-up">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold tracking-wide uppercase mb-6">
              {t("earlyAccess.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              {t("earlyAccess.title")}
            </h1>
            <p className="text-lg text-slate-600">
              {t("earlyAccess.subtitle")}
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{t("earlyAccess.form.successTitle")}</h3>
                <p className="text-slate-600 mb-8">{t("earlyAccess.form.success")}</p>
                <Button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6"
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
                          <FormLabel>{t("earlyAccess.form.name")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("earlyAccess.form.placeholders.name")} {...field} className="rounded-xl h-12" />
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
                          <FormLabel>{t("earlyAccess.form.email")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("earlyAccess.form.placeholders.email")} {...field} className="rounded-xl h-12" />
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
                        <FormLabel>{t("earlyAccess.form.company")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("earlyAccess.form.placeholders.company")} {...field} className="rounded-xl h-12" />
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
                        <FormLabel>{t("earlyAccess.form.marketplaces")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("earlyAccess.form.placeholders.marketplaces")} {...field} className="rounded-xl h-12" />
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
                        <FormLabel>{t("earlyAccess.form.message")}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t("earlyAccess.form.placeholders.message")} className="min-h-[100px] rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full py-7 text-lg font-medium shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02]">
                    {t("earlyAccess.form.submit")}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
