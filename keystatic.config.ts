import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

  collections: {
    "articles-zh": collection({
      label: "文章（中文）",
      slugField: "title",
      path: "content/articles/*/zh",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "标题" },
        }),
        category: fields.select({
          label: "分类",
          options: [
            { label: "提示词", value: "prompts" },
            { label: "Skills", value: "skills" },
            { label: "AI+投资", value: "investment" },
          ],
          defaultValue: "skills",
        }),
        date: fields.text({
          label: "日期",
          description: "格式：YYYY-MM-DD",
        }),
        excerpt: fields.text({
          label: "摘要",
          multiline: true,
        }),
        content: fields.markdoc({
          label: "正文内容",
        }),
      },
    }),

    "articles-en": collection({
      label: "Articles (English)",
      slugField: "title",
      path: "content/articles/*/en",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Title" },
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Prompts", value: "prompts" },
            { label: "Skills", value: "skills" },
            { label: "Investment", value: "investment" },
          ],
          defaultValue: "skills",
        }),
        date: fields.text({
          label: "Date",
          description: "Format: YYYY-MM-DD",
        }),
        excerpt: fields.text({
          label: "Excerpt",
          multiline: true,
        }),
        content: fields.markdoc({
          label: "Content",
        }),
      },
    }),
  },
});
