"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  headingLevel = 3,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  headingLevel?: 2 | 3;
}) {
  // Radix's Header is hard-coded to <h3>. That is right on the home page,
  // where these nest under a section <h2>, but the standalone /experience page
  // puts its <h1> directly above them and would otherwise skip a level.
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <AccordionPrimitive.Header asChild>
      <Heading className="flex">
        <AccordionPrimitive.Trigger
          data-slot="accordion-trigger"
          className={cn(
            "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
            className,
          )}
          {...props}
        >
          {children}
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </Heading>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      // forceMount keeps the panel copy in the served HTML so crawlers that do
      // not run JavaScript can read it. Collapsing is done by the
      // grid-template-rows transition in globals.css rather than by Radix's
      // keyframes, because a keyframe that ends at height:0 springs back once
      // it finishes and would also animate on first paint.
      forceMount
      data-slot="accordion-content"
      className="text-sm"
      {...props}
    >
      <div className="overflow-hidden">
        <div className={cn("pt-0 pb-4", className)}>{children}</div>
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
