import Image from 'next/image';

import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Trans
            components={{
              code: <code className="font-mono font-bold" />,
            }}
            i18nKey="left_title"
            ns="home"
          />
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('right_title')} <Image alt="Vercel Logo" className="dark:invert" height={24} priority src="/vercel.svg" width={100} />
          </a>
        </div>
      </div>

      <div className="before:bg-gradient-radial after:bg-gradient-conic relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          alt="Next.js Logo"
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          height={37}
          priority
          src="/next.svg"
          width={180}
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <Trans i18nKey="cards.docs.title" ns="home" />
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{t('cards.docs.description')}</p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <Trans i18nKey="cards.learn.title" ns="home" />
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{t('cards.learn.description')}</p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <Trans i18nKey="cards.templates.title" ns="home" />
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{t('cards.templates.description')}</p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <Trans i18nKey="cards.deploy.title" ns="home" />
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{t('cards.deploy.description')}</p>
        </a>
      </div>
    </main>
  );
}
