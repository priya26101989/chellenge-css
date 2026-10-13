import React from "react";

const Challenge = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-white">


      {/*  Heading */ }


      <h1 className="mb-4 text-center text-4xl font-bold">
        CSS <span className="text-purple-400">Challenge</span>
      </h1>

      <p className="mb-12 text-center text-gray-400">
        Flexbox, Grid Layout & Animation
      </p>

      {/*  1. Flexbox Desktop */ }


      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-bold text-cyan-300">
          1. Flexbox Desktop
        </h2>

        <div className="flex flex-row justify-center gap-5 rounded-xl bg-slate-900 p-6">
          <div className="rounded-lg bg-purple-600 p-8">Web Design</div>
          <div className="rounded-lg bg-pink-500 p-8">Frontend Development</div>
          <div className="rounded-lg bg-cyan-600 p-8">Responsive Design</div>
        </div>
      </section>

      {/* 2. Flexbox Mobile */}


      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-bold text-cyan-300">
          2. Flexbox Mobile
        </h2>

        <div className="flex flex-col items-center gap-4 rounded-xl bg-slate-900 p-6 sm:flex-row sm:justify-center">
          <div className="w-full rounded-lg bg-purple-600 p-6 text-center sm:w-auto">
            Design
          </div>
          <div className="w-full rounded-lg bg-pink-500 p-6 text-center sm:w-auto">
            Development
          </div>
          <div className="w-full rounded-lg bg-cyan-600 p-6 text-center sm:w-auto">
            Innovation
          </div>
        </div>
      </section>

       {/* 3. Grid Layout  */}


      <section className="mb-12">
      <h2 className="mb-5 text-2xl font-bold text-cyan-300">


     3. Grid Layout 
  </h2>

  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

    <div className="rounded-xl border border-purple-400/30 bg-purple-500/10 p-8 text-center">
      <h3 className="text-xl font-bold">HTML5</h3>
      <p className="mt-2 text-gray-400">Website Structure</p>
    </div>

    <div className="rounded-xl border border-pink-400/30 bg-pink-500/10 p-8 text-center">
      <h3 className="text-xl font-bold">CSS3</h3>
      <p className="mt-2 text-gray-400">Creative Styling</p>
    </div>

    <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-8 text-center">
      <h3 className="text-xl font-bold">React JS</h3>
      <p className="mt-2 text-gray-400">Interactive Websites</p>
    </div>

    <div className="rounded-xl border border-purple-400/30 bg-purple-500/10 p-8 text-center">
      <h3 className="text-xl font-bold">JavaScript</h3>
      <p className="mt-2 text-gray-400">Dynamic Functionality</p>
    </div>

    <div className="rounded-xl border border-pink-400/30 bg-pink-500/10 p-8 text-center">
      <h3 className="text-xl font-bold">Tailwind CSS</h3>
      <p className="mt-2 text-gray-400">Modern UI Design</p>
    </div>

    <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-8 text-center">
      <h3 className="text-xl font-bold">Responsive Design</h3>
      <p className="mt-2 text-gray-400">All Screen Sizes</p>
    </div>

  </div>
</section>

     { /* 4. Animation Example */  }


      <section>
        <h2 className="mb-5 text-2xl font-bold text-cyan-300">
          4. Animation Example
        </h2>

        <div className="flex h-48 items-center justify-center rounded-xl bg-slate-900">
          <div className="animate-bounce rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 px-8 py-5 font-bold">
            Keep Creating!
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenge;