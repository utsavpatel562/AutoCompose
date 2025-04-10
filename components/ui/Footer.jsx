import React from "react";

function Footer() {
  return (
    <>
      <footer className="text-gray-500 bg-slate-900 px-4 py-5 max-w-full-xl mx-auto md:px-8">
        <div className="max-w-lg sm:mx-auto sm:text-center mt-5">
          <img src="/logo.png" className="w-52 sm:mx-auto" />
          <p className="leading-relaxed mt-2 text-[15px] text-slate-300 font-semibold">
            Made with ❤️ and by the Utsav Patel. Smarter emails start here.
          </p>
        </div>
        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </footer>
    </>
  );
}

export default Footer;
