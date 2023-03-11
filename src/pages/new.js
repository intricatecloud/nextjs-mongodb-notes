import PageTop from "@/components/PageTop";
import MetaData from "@/components/metaData";
import pageMeta from "@/content/meta";
import { motion } from "framer-motion";
import {
  FadeContainer,
  mobileNavItemSideways,
} from "@/content/FramerMotionVariants";
import Ripples from "react-ripples";
import { useRef } from "react";
import { createNote } from "@/utils/createNote";
import { useRouter } from "next/router";

export default function NewNote() {
  const router = useRouter();
  const sendButtonRef = useRef(null);
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    createNote(e.target.title.value, e.target.content.value).then((res) => {
      console.log(res);
      router.push(`/notes/${res}`);
    });
  };
  return (
    <>
      <MetaData
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />

      <section className="pageTop min-h-screen">
        <PageTop containerClass="mb-0" pageTitle="New Note" />
        <div>
          <motion.form
            ref={formRef}
            initial="hidden"
            whileInView="visible"
            variants={FadeContainer}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full max-w-xl mx-auto my-10 dark:text-gray-300"
            onSubmit={handleSubmit}
          >
            <motion.div
              variants={mobileNavItemSideways}
              className="relative z-0 w-full mb-6 group"
            >
              <input
                type="title"
                name="title"
                id="floating_title"
                className="block w-full px-0 py-2 mt-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-slate-500 dark:text-white dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_title"
                className="peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title
              </label>
            </motion.div>
            <motion.div
              variants={mobileNavItemSideways}
              className="relative z-0 w-full mb-6 group"
            >
              <textarea
                name="content"
                id="floating_content"
                className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-white focus:outline-none focus:ring-0  peer min-h-[100px] resize-y focus:border-black"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_content"
                className="peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Content
              </label>
            </motion.div>

            <motion.div
              variants={mobileNavItemSideways}
              className="w-full overflow-hidden rounded-lg shadow-lg sm:max-w-sm"
            >
              <Ripples
                className="flex justify-center w-full"
                color="rgba(225, 225,225,0.2)"
              >
                <button
                  ref={sendButtonRef}
                  type="submit"
                  className="relative w-full px-4 py-3 overflow-hidden text-sm font-medium text-center text-white transition duration-300 rounded-lg outline-none bg-neutral-800 dark:bg-darkSecondary active:scale-95 disabled:opacity-50 disabled:active:scale-100"
                >
                  Create
                </button>
              </Ripples>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </>
  );
}
