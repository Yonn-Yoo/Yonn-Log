import SNSList from '@/components/sns-list';
import Image from 'next/image';
import profileImage from '../../../public/images/about-profile.jpeg';

export default function AboutPage() {
  return (
    <main className="flex-auto mt-5 md:mt-10 px-5">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="max-w-xs px-2.5 lg:max-w-none lg:pl-20">
              <Image
                className="rounded-2xl shadow-xl shadow-zinc-600 dark:shadow-zinc-500 duration-300"
                src={profileImage}
                alt="about profile image"
                width={700}
                height={700}
              />
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl duration-200">
                I’m Yeonseung Yoo.
              </h1>
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  Hello, I&apos;m a Frontend Engineer dedicated to crafting
                  immersive digital experiences and I thrive on the
                  ever-evolving challenges of the web development world. Over
                  the years, I&apos;ve honed my skills in HTML, CSS, and
                  JavaScript, and I&apos;m constantly exploring new technologies
                  , best practices, and keep studying to stay at the forefront
                  of this field. From responsive web application to optimizing
                  performance, I take pride in delivering perfect, user-friendly
                  websites.
                </p>
                <p>
                  I&apos;ve done some simple projects and collaborated with
                  talented people to make code better for both users and
                  developers. I&apos;m passionate, quietly confident and
                  permenantly working on improving my valuable skills.
                </p>
                <p>
                  Experience with all phases of the software life-cycle. Passion
                  for learning new technologies. Capable of working within a
                  team or individual environment. Ability to plan and time
                  schedule, work under strict time pressure and adapt quickly
                  when needed.
                </p>
              </div>
            </div>
            <div className="lg:pl-20">
              <SNSList />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
