import {useState, type MouseEvent} from 'react';
import {brand, nav} from '../content';
import {scrollToHash} from '../lib/scroll';
function go(e: MouseEvent<HTMLAnchorElement>, then?: () => void) {
  const hash = e.currentTarget.getAttribute('href');
  if (!hash?.startsWith('#')) return;
  e.preventDefault(); then?.(); scrollToHash(hash);
}
function Crescent({className = ''}: {className?: string}) { return <svg viewBox="0 0 24 24" aria-hidden="true" className={className}><path d="M15.5 3.2A9 9 0 1 0 20.8 16 7.2 7.2 0 0 1 15.5 3.2Z" fill="currentColor" /></svg>; }
export function Header() {
 const [open, setOpen] = useState(false);
 return <header className="site-header"><div className="header-inner"><a href="#top" onClick={(e)=>go(e)} className="wordmark" aria-label={`${brand.name} — back to top`}><Crescent className="crescent"/><span>{brand.wordmark}</span></a><nav aria-label="Primary" className="desktop-nav">{nav.map(item=><a key={item.href} href={item.href} onClick={(e)=>go(e)}>{item.label}</a>)}</nav><a className="header-cta" href="#reserve" onClick={(e)=>go(e)}>Reserve a seat <span>↗</span></a><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'×':'☰'}</button></div>{open&&<nav className="mobile-nav" aria-label="Mobile primary">{nav.map(item=><a key={item.href} href={item.href} onClick={(e)=>go(e,()=>setOpen(false))}>{item.label}<span>↗</span></a>)}</nav>}</header>;
}
export function Footer(){return <footer className="footer"><a href="#top" onClick={(e)=>go(e)} className="wordmark"><Crescent className="crescent"/><span>{brand.wordmark}</span></a><p>A fictional lunar expedition concept. Not a real travel offer.</p><a href={`mailto:${brand.email}`}>{brand.email} ↗</a><span className="footer-code">LUNAR / 2031</span><span className="footer-creator">Website created by Rajkumar M (CSE)</span></footer>;}
