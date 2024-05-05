import { Link } from 'wouter';

import Container from '@/components/Container';

const Nav = () => {
  return (
    <nav className="mb-12">
      <Container className="flex justify-between items-center py-4">
        <p>
          <Link href="/">
            <a className="text-2xl font-bold text-slate-600 hover:text-slate-500 drop-shadow-[0_2px_0px_rgba(255,255,255,1)]">
              Memo
            </a>
          </Link>
        </p>
        <p>
          <Link href="/create">
            <a className="text-md font-medium text-slate-900 hover:text-slate-900 drop-shadow-[0_2px_0px_rgba(255,255,255,1)]">
              Create new drop
            </a>
          </Link>
        </p>
      </Container>
    </nav>
  )
}

export default Nav;