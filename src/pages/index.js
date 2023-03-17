import {
  FadeContainer,
  popUp,
  popUpFromBottomForText,
  searchBarSlideAnimation,
} from "@/content/FramerMotionVariants";
import { AnimatePresence, motion } from "framer-motion";
import Metadata from "@/components/metaData";
import pageMeta from "@/content/meta";
import AnimatedDiv from "@/components/FramerMotion/AnimatedDiv";
import PageTop from "@/components/PageTop";
import { CgSearch } from "react-icons/cg";
import { RiCloseCircleLine } from "react-icons/ri";
import { useRef } from "react";
import { useState } from "react";
import Note from "@/components/note";
import { useEffect } from "react";
import Link from "next/link";
import { IoCreateOutline } from "react-icons/io5";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [total, setTotal] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    async function getNotes() {
      const nextPublicAPIUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${nextPublicAPIUrl ?? ""}/notes`);
      const { data } = await res.json();
      return {
        data: {
          notes: data,
          total: data.length,
        },
      };
    }
    getNotes().then((data) => {
      setNotes(data.data.notes);
      setTotal(data.data.total);
    });
  }, [refresh]);

  useEffect(() => {
    setFilteredNotes(
      notes
        .filter((note) =>
          note.title.toLowerCase().includes(searchValue.trim().toLowerCase())
        )
        .sort(function (a, b) {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        })
    );
  }, [searchValue, notes]);

  function handleAutoSearch(e) {
    if (e.code === "Slash" && e.ctrlKey) {
      searchRef.current.focus();
    }
  }

  function refreshNotes() {
    setRefresh(!refresh);
  }

  useEffect(() => {
    document.addEventListener("keydown", handleAutoSearch);

    return () => document.removeEventListener("keydown", handleAutoSearch);
  }, []);
  return (
    <>
      <Metadata
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />

      <section className="pageTop flex flex-col gap-2 min-h-screen">
        <PageTop pageTitle="Notes">
          You have {total === 0 ? `no` : total} note
          {total === 1 ? `` : `s`}.
        </PageTop>

        <AnimatedDiv
          className="relative group w-0 mx-auto text-slate-400 dark:text-gray-300 bg-white dark:bg-darkSecondary rounded-md"
          variants={searchBarSlideAnimation}
        >
          <CgSearch className="ml-3 w-5 h-5 absolute top-[50%] -translate-y-1/2 z-10" />
          <input
            ref={searchRef}
            className="px-12  py-3 w-full  outline-none transition duration-200 bg-transparent font-medium font-inter lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-400  dark:highlight-white/5 dark:hover:bg-darkSecondary/90 mx-auto flex relative  group focus:ring-slate-400"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Press (CTRL + /) to search... "
          />
          <button
            type="button"
            onClick={() => setSearchValue("")}
            className="hidden group-focus-within:inline-flex right-3 absolute top-[50%] -translate-y-1/2"
          >
            <RiCloseCircleLine className="w-5 h-5 mr-3" />
          </button>
        </AnimatedDiv>

        <section className="relative py-5  flex flex-col gap-2 min-h-[50vh]">
          <AnimatePresence>
            {total != 0 ? (
              <>
                <AnimatedDiv
                  variants={FadeContainer}
                  className="flex items-center justify-between"
                >
                  <motion.h3
                    variants={popUpFromBottomForText}
                    className="text-left font-bold text-2xl sm:text-3xl my-5"
                  >
                    All Posts ({filteredNotes.length})
                  </motion.h3>
                  <div className="flex items-center gap-2">
                    <Link href="/new">
                      <motion.div variants={popUp}>
                        <IoCreateOutline
                          title="New Note"
                          className="text-2xl cursor-pointer"
                        />
                      </motion.div>
                    </Link>
                  </div>
                </AnimatedDiv>

                <AnimatedDiv
                  variants={FadeContainer}
                  className="grid grid-cols-1 gap-4"
                >
                  {filteredNotes.map((note, index) => {
                    return (
                      <Note
                        key={index}
                        note={note}
                        refreshNotes={refreshNotes}
                      />
                    );
                  })}
                </AnimatedDiv>
              </>
            ) : (
              <div className="font-inter text-center font-medium dark:text-gray-400">
                No Result Found
              </div>
            )}
          </AnimatePresence>
        </section>
      </section>
    </>
  );
}
