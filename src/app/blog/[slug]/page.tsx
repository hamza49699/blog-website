import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import CommentSection from "@/components/Comment";

export const revalidate = 60; // seconds

export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);
  return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
}

// To create static pages for dynamic routes
export default async function page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title, summary, image, content,
      author->{bio, image, name}
  }[0]`;
  const post = await client.fetch(query);

  return (
    <article className="mt-12 mb-24 px-4 md:px-8 lg:px-12 xl:px-16 flex flex-col gap-y-12">
      {/* Blog Title */}
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-dark dark:text-light text-center">
        {post.title}
      </h1>

      {/* Featured Image */}
      <div className="w-full flex justify-center mb-6 lg:mb-12">
        <Image
          src={urlForImage(post.image)}
          width={1600}
          height={900}
          alt="Featured image"
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
      </div>

      {/* Blog Summary Section */}
      <section className="bg-accentLight dark:bg-darkSecondary p-6 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-bold uppercase text-accentDarkPrimary mb-4">
          Summary
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>
      <CommentSection/>

      {/* Author Section */}
      <section className="flex flex-col sm:flex-row items-center gap-6 bg-light dark:bg-darkPrimary p-6 rounded-lg shadow-lg">
        <div className="relative mb-4 sm:mb-0">
          <Image
            src={urlForImage(post.author.image)}
            width={120}
            height={120}
            alt="author"
            className="object-cover rounded-full h-24 w-24 shadow-lg border-4 border-accentDarkPrimary"
          />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-dark dark:text-light mb-2">
            {post.author.name}
          </h3>
          <p className="italic text-sm md:text-base text-dark/80 dark:text-light/80">
            {post.author.bio}
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <section className="prose dark:prose-invert lg:prose-lg max-w-none leading-normal">
        <PortableText 
          value={post.content} 
        />
      </section>
    </article>
  );
}
