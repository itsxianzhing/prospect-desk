import { describe, expect, it } from "vitest";
import { badgeClass, label } from "./labels";
describe("labels",()=>{it("formats enum labels",()=>expect(label("NO_WEBSITE")).toBe("No Website"));it("marks positive statuses",()=>expect(badgeClass("WON")).toBe("green"));});
