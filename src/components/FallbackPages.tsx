"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { CONTACT_SUPPORT_LINK } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowLeft, Circle, Home, LogIn, RotateCcw } from "lucide-react";
import type { Route } from "next";
// we don't have access to next-intl at root level not found page
// eslint-disable-next-line no-restricted-imports
import Link from "next/link";

const variants = {
  "not-found": {
    status: 404,
  },
  forbidden: {
    status: 403,
  },
  unauthorized: {
    status: 401,
  },
  error: {
    status: 500,
  },
} as const;

type BaseMessages = {
  title: string;
  description: string;
  home: string;
  goBack: string;
  needHelp: string;
  contactSupport: string;
};

type FallbackPageProps = (
  | {
      variant: "not-found" | "forbidden";
      contactSupportMessage?: string;
      messages: BaseMessages;
    }
  | {
      variant: "error";
      contactSupportMessage?: string;
      reset: () => void;
      messages: BaseMessages & { tryAgain: string };
    }
  | {
      variant: "unauthorized";
      contactSupportMessage?: string;
      loginPagePathname: string;
      messages: BaseMessages & { signIn: string };
    }
  | {
      variant: "loading";
      messages: { "aria-label": string };
    }
) & { className?: string };

export function FallbackPage(props: FallbackPageProps) {
  if (props.variant === "loading")
    return (
      <section
        aria-label={props.messages["aria-label"]}
        aria-busy={true}
        className={cn(
          "grid min-h-svh w-full place-items-center",
          props.className,
        )}
      >
        <div className="isolate grid grid-cols-1 grid-rows-1 place-items-center">
          <Circle className="z-10 col-start-1 row-start-1 size-22 animate-circleSvgGrow bg-transparent stroke-1 text-primary [--circumference:572px]" />

          <Logo className="z-10 col-start-1 row-start-1 size-19 animate-loadingFadeIn rounded-full bg-primary p-1 opacity-0" />

          <div className="col-start-1 col-end-1 row-start-1 row-end-1 h-20 w-20 animate-pingMd rounded-full bg-primary/80 delay-1000 starting:opacity-0" />
          <div className="col-start-1 col-end-1 row-start-1 row-end-1 h-20 w-20 animate-pingSm rounded-full bg-primary/80 delay-1000 starting:opacity-0" />
        </div>
      </section>
    );

  const { className, messages, variant, contactSupportMessage } = props;
  const { status } = variants[variant];

  return (
    <section
      className={cn(
        "relative grid min-h-dvh place-items-center p-4",
        className,
      )}
    >
      <div className="relative z-10 max-w-md space-y-8 text-center">
        <header className="space-y-6">
          <div className="font-mono text-[10rem] leading-none font-bold tracking-tighter text-primary">
            {status}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {messages.title}
          </h1>

          <p
            className="mx-auto text-base leading-relaxed text-pretty text-muted-foreground"
            role="alert"
            aria-live="polite"
          >
            {messages.description}
          </p>
        </header>

        {/* Action buttons */}
        <nav
          className="grid grid-cols-2 items-center justify-center gap-3"
          aria-label="actions"
        >
          <Button asChild variant="outline">
            <Link href="/">
              <Home /> {messages.home}
            </Link>
          </Button>

          {props.variant === "error" ? (
            <Button onClick={props.reset}>
              <RotateCcw /> {props.messages?.tryAgain}
            </Button>
          ) : props.variant === "unauthorized" ? (
            <Button asChild>
              <Link href={props.loginPagePathname as Route}>
                <LogIn /> {props.messages?.signIn}
              </Link>
            </Button>
          ) : (
            <Button onClick={() => window.history.back()}>
              <ArrowLeft /> {messages.goBack}
            </Button>
          )}
        </nav>

        <footer className="text-sm text-muted-foreground">
          {messages.needHelp}
          <Button asChild variant="link">
            <Link
              href={CONTACT_SUPPORT_LINK(contactSupportMessage) as Route}
              target="_blank"
            >
              {messages.contactSupport}
            </Link>
          </Button>
        </footer>
      </div>
    </section>
  );
}
