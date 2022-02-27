import { MouseEventHandler } from "react";
import Link from "next/link";
type NavProps = {
  href: string;
  title: string;
  icon?: StaticImageData;
  active?: boolean;
  simple?: boolean;
  onClick?: (page: string) => void;
}
const baseClassName = `
  text-xs
  md:text-sm
  lg:text-base
  w-full flex items-center justify-center
  h-full text-center
  transition-all duration-500 ease-in-out
  border-2
  rounded-md
  active:translate-y-px
  hover:border-quaternary
  border-secondary
`;
const activeClassName = `
  border-quaternary
  bg-tertiary
`;
const Nav = (props: NavProps) => {
  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    if(props.simple) {
      window.open(props.href, "_blank");
      return;
    }
  }
  let className = baseClassName;
  className += props.active ? activeClassName : "";
  const anchorProp = (
    <a className={className}>
      <span>{props.title}</span>
      {props.icon && <img className="m-1 hidden lg:fixed" src="images/ln.png" alt="linkedIn Icon"></img>}
    </a>
  )
  return (
    <span onClick={handleClick}>
      {!props.simple ? (
        <Link href={props.href}>
          {anchorProp}
        </Link>
        ) : (
          anchorProp
        )
      }
    </span>
  )
}
export default Nav;
