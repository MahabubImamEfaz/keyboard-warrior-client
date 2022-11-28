import React from "react";

const Blog = () => {
  return (
    <div className="h-[80vh]">
      <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl text-[#e9c46a]">
            BLOG
          </h2>

          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none ring-violet-400">
                What are the different ways to manage a state in a React
                application?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                The Four Kinds of React State to Manage Local state. Global
                state. Server state. URL state.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none ring-violet-400">
                How does prototypical inheritance work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none ring-violet-400">
                What is a unit test? Why should we write unit tests?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none ring-violet-400">
                React vs. Angular vs. Vue?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                Angular.js is an MVC framework. A major disadvantage of Angular
                is that it uses a regular DOM, and thus, the entire tree
                structure of the HTML tags is updated, which massively impacts
                the loading time. <br />
                One of the biggest of them is that React.js uses a virtual DOM
                that only compares the previous HTML code differences and only
                loads the different parts. This significantly impacts the
                loading times. In a positive way, of course.
                <br />
                Vue.js is a JavaScript-based progressive framework for creating
                single-page applications. It was created with scalability and
                incrementality in mind, as well as ease of integration with
                other view layer frameworks. Vue is built from the bottom up to
                be progressively adaptable, unlike other monolithic frameworks.
                The core library focuses solely on the view layer, and its
                simple to use and connect with other libraries or applications.
                This frameworks fast learning angle is almost a trademark. Its a
                flexible framework that may be used as a library or a
                full-fledged framework for developing large web applications.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
