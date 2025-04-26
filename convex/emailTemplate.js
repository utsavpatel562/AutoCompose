import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// SAVE Template
export const SaveTemplate = mutation({
  args: {
    tid: v.string(),
    design: v.string(), // Keep as string
    email: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const result = await ctx.db.insert('emailTemplates', {
        tid: args.tid,
        design: args.design, // Already stringified before saving
        email: args.email,
        description: args.description,
      });
      return result;
    } catch (e) {
      console.error("Mutation Error:", e);
    }
  }
});

// GET Template Design
export const GetTemplateDesign = query({
  args: {
    email: v.string(),
    tid: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const result = await ctx.db.query('emailTemplates')
        .filter((q) => q.and(
          q.eq(q.field('tid'), args.tid),
          q.eq(q.field('email'), args.email)
        ))
        .collect();

      if (!result.length) return {};

      const template = result[0];

      // 🛠 Parse the design before returning
      const parsedDesign = JSON.parse(template.design);

      return { ...template, design: parsedDesign };
    } catch (e) {
      console.error("Query Error:", e);
      return {};
    }
  }
});

// UPDATE Template Design
export const UpdateTemplateDesign = mutation({
  args: {
    tid: v.string(),
    design: v.string(), // Keep as string
  },
  handler: async (ctx, args) => {
    // Get DocID
    const result = await ctx.db.query('emailTemplates')
      .filter(q => q.eq(q.field('tid'), args.tid))
      .collect();

    const docId = result[0]._id;

    // Update the document
    await ctx.db.patch(docId, {
      design: args.design, // Again, expect stringified JSON
    });
  }
});

// GET All Templates for User
export const GetAllUserTemplate = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.query('emailTemplates')
      .filter(q => q.eq(q.field('email'), args.email))
      .collect();

    // 🛠 Parse each design before returning
    return result.map(template => ({
      ...template,
      design: JSON.parse(template.design),
    }));
  }
});
