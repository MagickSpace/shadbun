import { getCollection } from "astro:content";

// Get all the categories af the Posts

export async function getCategories() {
  const posts = await getCollection("blog");

  const categories = [
    ...new Set([].concat.apply(posts.map((post) => post.data.category))),
  ];

  return categories;
}

export async function getPosts() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getPostsByCategoryNew(category: string, lang: string) {
  const posts = (
    await getCollection('blog', ({ id }) => {
      return id.startsWith(lang)
    })
  )
    .filter((post) => post.data.category.includes(category))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

  return posts
}


export async function getGuidesNew(lang: string) {
  const guides = await getCollection('guides', ({ id }) => {
    return id.startsWith(lang)
  })

  guides.filter((guide) => guide.data.published)

  guides.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

  return guides
}



export async function getCategoriesNew(lang: string) {
  const posts = await getCollection("blog", ({ id }) => {
    return id.startsWith(lang);
  });

  const categories = [
    ...new Set(posts.map((post) => post.data.category).flat())
  ];
  return categories;
}


// Get all the posts
export async function getPostsNew(lang: string) {
  const posts = (await getCollection("blog", ({ id }) => { return id.startsWith(lang) })).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}


// Get all the posts acording to the category
export async function getPostsByCategory(category: string, lang: string) {
  const posts = (await getCollection("blog", ({ id }) => { return id.startsWith(lang) }))
    .filter((post) => post.data.category.includes(category))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}

// Get all the posts acording to the category except the one in view
export async function getRelatedPosts(category: string, title: string) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.category.includes(category))
    .filter((post) => post.data.title !== title)

  return posts
}

export async function getGuides() {
  const guides = (await getCollection("guides"))
    .filter((guide) => guide.data.published)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return guides;
}
