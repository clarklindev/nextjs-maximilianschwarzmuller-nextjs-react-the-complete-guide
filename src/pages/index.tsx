import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          {/* <a href="/portfolio">portfolio</a> // causes page refresh */}
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
      </ul>
    </main>
  );
}
