import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        picture: v.string(),
        credits: v.number(),
    }),
    emailTemplates: defineTable ({
        tid: v.string(),
        design: v.string(), // Save JSON Data
        description: v.any(),
        email: v.string(),
    })
})