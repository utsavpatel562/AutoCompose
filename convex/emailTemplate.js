import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const SaveTemplate = mutation ( {
    args: {
        tid: v.string(),
        design: v.any(),
        email: v.string()
    },
    handler:async(ctx, args)=> {
        try {
           const result = await ctx.db.insert('emailTemplates', {
                tid: args.tid,
                design: args.design,
                email: args.email,
            })
            return result;
        }
        catch (e) {
            console.error("Mutation Error:", e); // Show error if it happens
        }
    }
})