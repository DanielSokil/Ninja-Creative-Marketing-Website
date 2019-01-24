// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: "What You Can Expect From An SEO Campaign",
    slug: "how-to-setup-realistic-expectations-for-an-seo-campaign",
    html: ``
  },

  {
    title:
      "How Small Businesses Can Optimize Their Online Presence By Focusing On Local SEO",
    slug:
      "how-small-businesses-can-optimize-their-online-presence-by-focusing-on-local-seo",
    html: ``
  },

  {
    title: "Ninja Creative Marketing Featured In Clutch’s Press Release",
    slug: "ninja-creative-marketing-featured-in-clutchs-press-release",
    html: ``
  },

  {
    title:
      "Google Algorithm Update August 2018 – 5 Steps To Secure Your Website SEO Permanently",
    slug: "google-search-algorithm-updates-secure-your-website-permanently",
    html: ``
  },

  {
    title:
      "Top 8 Reason Why You Should Outsource Online Marketing Services From An Overseas SEO Company (Updated)",
    slug: "top-8-reason-for-outsourcing-from-overseas-seo-company",
    html: ``
  },

  {
    title: "SEO Myth: No-Follow Or Do-Follow",
    slug: "seo-myth-explained-no-follow-follow",
    html: ``
  },

  {
    title:
      "Complete On-Page SEO Checklist To Dominate Local Search In 2018 (Continues)",
    slug: "complete-page-seo-guide-dominate-local-serps-2018",
    html: ``
  },

  {
    title: "2 Fundamental Relations To Explain Top SEO Trends 2018",
    slug: "2-fundamental-relations-to-explain-top-seo-trends-2018",
    html: ``
  },

  {
    title:
      "The Best Way To Adopt For Your Link Building Method In Machine Learning Algorithm Era",
    slug: "best-way-adopt-link-building-method-machine-learning-algorithm-era",
    html: ``
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
