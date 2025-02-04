import SearchResults from "@/components/SearchResults";
import GuideDetail from "@/components/GuideDetail";

const content = [
  `Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
`,
  `Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.
It's a layer built on the top of the Node js that helps manage servers and routes.
Why Express JS?
Express was created to make APIs and web applications with ease,
It saves a lot of coding time almost by half and still makes web and 
mobile applications are efficient.
Another reason for using express is that it is written in javascript as javascript is an easy language even if you don't have a previous
knowledge of any language. Express lets so many new developers enter the field of web development.
The reason behind creating an express framework for node js is:
`,
];

const metadata = [
  {
    id: 1,
    title: "1_nodejs_tutorial",
    heading: "Introduction to Node.js",
    description: "A brief overview of Node.js and its capabilities.",
    timestamp: new Date().toISOString(),
    content: content[0],
  },
  {
    id: 2,
    title: "2_expressjs_tutorial",
    heading: "Understanding Express.js",
    description: "Learn about Express.js, a minimal and flexible framework.",
    timestamp: new Date().toISOString(),
    content: content[1],
  },
  {
    id: 3,
    title: "3_asynchronous_javaScript_tutorial",
    heading: "Asynchronous JavaScript",
    description: "Exploring async/await, promises, and event loops.",
    timestamp: new Date().toISOString(),
    content: "Asynchronous Js is a way fo executing",
  },
  {
    id: 4,
    title: "4_restapi_tutorial",
    heading: "RESTful APIs with Express",
    description: "How to build RESTful APIs using Express.js.",
    timestamp: new Date().toISOString(),
    content: "RESTful APIs are the way to serve",
  },
  {
    id: 5,
    title: "5_middlewares_in_expressjs",
    heading: "Middleware in Express",
    description: "Understanding middleware functions and their role.",
    timestamp: new Date().toISOString(),
    content:
      "Middlewares act's between the request and response in API development",
  },
];

async function getSearchResults(query) {
  const res = await fetch(
    `https://moodle.drillbitplagiarismcheck.com/api/metadata?q=${query}`
  );
  console.log("res == ", res);

  return res.json();
  // return metadata;
}

async function getGuideDetail(id) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/content/${id}`);
  // return res.json();
  return metadata[id - 1];
}

export default async function SearchPage({ searchParams }) {
  const { q, id } = searchParams;
  const results = q ? await getSearchResults(q) : [];
  const guide = id ? await getGuideDetail(id) : null;

  return (
    <div className="max-w-4xl mx-auto">
      {guide ? (
        <GuideDetail guide={guide} searchQuery={q} />
      ) : (
        <SearchResults results={results} searchQuery={q} />
      )}
    </div>
  );
}
