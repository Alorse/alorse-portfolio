"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const integrations = [
  {
    id: "omnipilot",
    title: "OmniPilot",
    description: "AI-powered coding assistant that integrates with your development workflow, providing real-time suggestions and automating repetitive tasks."
  },
  {
    id: "vscode",
    title: "VS Code Extensions",
    description: "Collection of powerful extensions that enhance VS Code with AI capabilities like intelligent code completion and automated refactoring."
  },
  {
    id: "trading",
    title: "Trading Bots",
    description: "AI-driven trading algorithms that analyze market data and execute trades with precision timing based on machine learning models."
  },
  {
    id: "waydroid",
    title: "WayDroid GNOME Assistant",
    description: "Desktop assistant that integrates with GNOME environment, providing contextual help and automating routine desktop tasks."
  }
]

export function AIIntegrations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl"
    >
      <h2 className="mb-6 text-2xl font-bold tracking-tight">AI Integrations</h2>
      <Accordion type="single" collapsible className="w-full">
        {integrations.map((integration) => (
          <AccordionItem key={integration.id} value={integration.id}>
            <AccordionTrigger className="hover:text-indigo-500 data-[state=open]:text-indigo-500 transition-colors">
              {integration.title}
            </AccordionTrigger>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <AccordionContent className="text-muted-foreground">
                {integration.description}
              </AccordionContent>
            </motion.div>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}