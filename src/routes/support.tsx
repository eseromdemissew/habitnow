import { createFileRoute } from "@tanstack/react-router";
import { pageHead, site } from "@/content/site";
import { FAQ } from "@/content/features";
import { Page, Block } from "@/components/layout/Page";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/support")({
  head: () => pageHead({ title: "Support — HabitNow", description: "Answers and help for HabitNow.", path: "/support" }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <Page eyebrow="Help" title="Support" intro="Answers to common questions about HabitNow.">
      <Accordion type="single" collapsible>
        {FAQ.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Block title="Still need help?">
        {site.contactEmail ? (
          <p>Email us at <a className="font-medium text-foreground underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>
        ) : (
          <p>A support email will be listed here before launch.</p>
        )}
      </Block>
    </Page>
  );
}
