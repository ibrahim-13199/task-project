import React from "react";
export function Footer() {
  return (
    <>
      <div className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
            <br></br>
            <a
              href="https://www.facebook.com/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                margin: "10px",
              }}
            >
              FaceBook
            </a>
            <a
              href="https://www.instagram.com/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                margin: "10px",
              }}
            >
              instagram
            </a>
            <a
              href="https://twitter.com/i/flow/login"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                margin: "10px",
              }}
            >
              Twitter
            </a>
          </section>
        </div>
        <div className="text-center p-3">
          © 2020 Copyright:
          <a
            style={{ textDecoration: "none", margin: "10px" }}
            className="text-white"
            href="https://mdbootstrap.com/"
          >
            Hema_Atef.com
          </a>
        </div>
      </div>
    </>
  );
}
