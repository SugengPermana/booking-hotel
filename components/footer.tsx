"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900" suppressHydrationWarning>
      <div className="max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-7">
          <div>
            <Link href="/" className="mb-10 block">
              <Image
                src="/logo.png"
                width={128}
                height={49}
                alt="logo"
                priority
              />
            </Link>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, impedit nesciunt facere optio repellat consectetur.
            </p>
          </div>

          <div>
            <div className="flex gap-20">
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                <ul className="list-item space-y-5 text-gray-400">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/room">Rooms</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">
                  Support
                </h4>
                <ul className="list-item space-y-5 text-gray-400">
                  <li>
                    <Link href="#">Legal</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Payment Method</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-8 text-xl font-semibold text-white">
              NewsLetter
            </h4>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, ea.
            </p>
            <form action="" className="mt-5">
              <div className="mb-5">
                <input
                  type="text"
                  name="email"
                  className="w-full p-3 rounded-sm bg-white"
                  placeholder="Example@gmail.com"
                  suppressHydrationWarning
                />
              </div>
              <button className="bg-orange-400 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-orange-500">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-gray-500">
        &copy; 2025 | Sugeng Permana | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
