export const WHATSAPP_NUMBER = "918861606007";
export const BUSINESS_EMAIL = "hello.rishikulkarni@gmail.com";

export type Enquiry = { name: string; business: string; service: string; message: string };

export function buildEnquiryMessage(f: Enquiry): string {
  const business = f.business.trim();
  return [
    "Hi RIKA TECH, I would like to discuss a project.",
    "",
    `Name: ${f.name.trim()}`,
    business ? `Business: ${business}` : null,
    `Service: ${f.service.trim()}`,
    `What I need: ${f.message.trim()}`,
  ]
    .filter((l) => l !== null)
    .join("\n");
}
