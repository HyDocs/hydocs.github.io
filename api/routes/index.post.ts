// import { fetcher } from "itty-fetcher";
import {
  FeedbackSchema,
  getFeedbackOption,
} from "../../docs/.vitepress/types/Feedback";

export default defineEventHandler(async (event) => {
  const { message, page, type, heading } = await readValidatedBody(
    event,
    FeedbackSchema.parseAsync,
  );
  const env = useRuntimeConfig(event);

  const webhookUrl = env.WEBHOOK_URL || process.env.WEBHOOK_URL;

  if (!webhookUrl || typeof webhookUrl !== "string") {
    console.error("Server Config Error: Missing WEBHOOK_URL");
    throw new Error("Server configuration error");
  }

  // Map feedback types to hex colors
  const colors: Record<string, number> = {
    submit: 0x3b82f6, // Blue
    update: 0xf97316, // Orange
    report: 0xef4444, // Red
    suggestion: 0xa855f7, // Purple
    appreciation: 0x22c55e, // Green
    other: 0x6b7280, // Gray
  };

  const selectedOption = getFeedbackOption(type);
  const color = colors[type] || 0x6b7280;
  const title = selectedOption
    ? `${selectedOption.label} Feedback`
    : "New Feedback";

  const pageLink = `[View Page](${page})`;

  const embedFields = [
    {
      name: "Page",
      value: pageLink,
      inline: true,
    },
  ];

  if (heading) {
    embedFields.push({
      name: "Section",
      value: heading,
      inline: true,
    });
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "HyDocs Feedback", 
      avatar_url: "https://hydocs.github.io/logo.png", 
      embeds: [
        {
          color: color,
          title: title,
          description: message, 
          fields: embedFields,
          footer: {
            text: "HyDocs Feedback System",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  });

  if (!response.ok) {
    console.error(`Webhook failed: ${response.status}`);
    throw new Error(`Webhook failed: ${response.status}`);
  }

  return { status: "ok" };
});
