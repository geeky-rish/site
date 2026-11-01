import { describe, expect, it } from "vitest";
import { buildEnquiryMessage } from "@/lib/enquiry";

describe("enquiry message", () => {
  it("omits the business line when empty", () => {
    const m = buildEnquiryMessage({ name: " Asha ", business: "", service: "Workflow automation", message: "Help" });
    expect(m).toBe("Hi RIKA TECH, I would like to discuss a project.\n\nName: Asha\nService: Workflow automation\nWhat I need: Help");
  });
});
