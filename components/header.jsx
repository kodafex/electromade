import styles from './header.module.css'
import Link from 'next/link'

export default function Header() {

  return (
    <header className="flex">
      {/* <div className="bg-gradient-to-t from-aluminumdarker to-aluminumlight brushed"> */}
      <div className="px-5 py-2 w-full flex items-center shadow-sm">
          <div className="p-5 text-center underline font-holtzman leading-none tracking-widest text-3xl border-4 bg-tomato border-tomato text-black uppercase rounded-lg">
            Electromade
          </div>
          <div className="grid grid-cols-3 text-center gap-x-2 mx-auto font-jost font-semibold uppercase">
            <Link href="/"><a className={styles.link}>Home</a></Link>
            <Link href="/projects"><a className={styles.link}>Projects</a></Link>
            <Link href="/about"><a className={styles.link}>About</a></Link>
          </div>
      </div>
    </header>
  )
}