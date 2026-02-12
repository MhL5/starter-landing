import { buttonVariants } from "@/components/ui/button";
import { Link as I18nLink } from "@/features/i18n/navigation";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

type I18nLinkProps = ComponentProps<typeof I18nLink>;
type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type StyledLinkProps = I18nLinkProps &
  ButtonVariantProps & {
    unStyled?: false;
  };

type UnstyledLinkProps = I18nLinkProps & {
  unStyled: true;
};

type LinkProps = StyledLinkProps | UnstyledLinkProps;

function Link(props: LinkProps) {
  const { className, unStyled, ...rest } = props;

  return (
    <I18nLink
      data-slot="link"
      className={
        unStyled
          ? className
          : cn(
              buttonVariants({
                variant: props.variant,
                size: props.size,
                className,
              }),
            )
      }
      {...rest}
    />
  );
}

export { Link, type LinkProps };
