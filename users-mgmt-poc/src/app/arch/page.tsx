// Refer : Design :- https://www.figma.com/design/qACtkeNY525Sg1KBt6jnPn/Website-of-architects---free-website--Community-?node-id=0-1&p=f&t=NWkTm3TjBD33XUKr-0

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const ArchHeader = () => {
  const pathname = usePathname();

  const links = [
    // {href: '/', name: 'POC'},
    // { href: '/main', name: 'MAIN' },
    { href: '/arch/gallery', name: 'GALLERY' },
    { href: '/arch/projects', name: 'PROJECTS' },
    { href: '/arch/certifications', name: 'CERTIFICATIONS' },
    { href: '/arch/contacts', name: 'CONTACTS' },
    { href: '/arch', name: 'ARCH' },
  ];

  return (
    <div className="m-2 p-2 flex justify-around gap-8">
      {/* Logo */}
      <section>
        <Link href="/" className="">
          <svg
            width="70"
            height="44"
            viewBox="0 0 70 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g clipPath="url(#clip0_1_162)">
              <path
                d="M45.6348 21.1039L46.9133 24.0542C47.1496 24.598 47.8001 24.8552 48.3677 24.6293C48.9363 24.4057 49.2059 23.783 48.9703 23.2389L47.6921 20.2896L45.6348 21.1039Z"
                fill="#333333"
              />
              <path
                d="M46.4878 23.0706L48.5448 22.2561L46.4878 23.0706Z"
                fill="#333333"
              />
              <path
                d="M42.9373 14.877L45.8465 16.0287L42.9373 14.877Z"
                fill="#333333"
              />
              <path
                d="M44.5203 8.89657C44.5203 10.4644 43.1914 11.735 41.553 11.735C39.9129 11.735 38.5837 10.4644 38.5837 8.89657C38.5837 7.32909 39.9129 6.05908 41.553 6.05908C43.1911 6.05908 44.5203 7.32909 44.5203 8.89657Z"
                fill="#333333"
              />
              <path
                d="M43.0358 8.89649C43.0358 9.68086 42.3719 10.3163 41.5527 10.3163C40.7325 10.3163 40.0669 9.68086 40.0669 8.89649C40.0669 8.11278 40.7325 7.4773 41.5527 7.4773C42.3719 7.47694 43.0358 8.11278 43.0358 8.89649Z"
                fill="#333333"
              />
              <path
                d="M39.4707 10.9197L35.41 20.29L34.3921 24.495L35.0777 24.7665L37.4677 21.1044L38.0363 19.7938C37.5926 18.7692 38.1009 17.5944 39.1724 17.1708L41.5271 11.7341C40.7262 11.7277 40.0016 11.4184 39.4707 10.9197Z"
                fill="#333333"
              />
              <path
                d="M43.633 10.9189C43.1018 11.4183 42.3766 11.7276 41.5757 11.7337L45.0685 19.7921L47.1249 18.9781L43.633 10.9189Z"
                fill="#333333"
              />
              <path
                d="M42.6652 4.63959V1.44617C42.6648 0.857652 42.1649 0.381592 41.552 0.381592C40.9371 0.381592 40.4388 0.857008 40.4385 1.44617L40.4388 4.63959H42.6652Z"
                fill="#333333"
              />
              <path
                d="M41.5528 6.05887C41.7425 6.05887 41.9285 6.07709 42.1085 6.10969V4.63965H40.9956V6.10969C41.1763 6.07676 41.3612 6.05887 41.5528 6.05887Z"
                fill="#333333"
              />
              <path
                d="M26.0956 25.9407H22.3928V0.380859H26.0963C26.9145 0.380859 27.5774 1.01699 27.5774 1.80136V24.5214H27.5771C27.5767 25.3058 26.9138 25.9407 26.0956 25.9407Z"
                fill="#333333"
              />
              <path
                d="M25.911 2.51126C26.2179 2.51126 26.4667 2.27281 26.4667 1.97865C26.4667 1.6845 26.2179 1.44604 25.911 1.44604C25.6042 1.44604 25.3555 1.6845 25.3555 1.97865C25.3555 2.27281 25.6042 2.51126 25.911 2.51126Z"
                fill="#333333"
              />
              <path
                d="M30.1694 15.4695C30.1694 15.7625 30.4184 16.0018 30.725 16.0018C31.032 16.0018 31.2806 15.7625 31.2806 15.4695C31.2806 15.7625 31.5299 16.0018 31.8362 16.0018C32.1431 16.0018 32.3917 15.7625 32.3917 15.4695C32.3917 15.7625 32.1431 16.0018 31.8362 16.0018C31.5299 16.0018 31.2806 15.7625 31.2806 15.4695C31.2806 15.7625 31.032 16.0018 30.725 16.0018C30.4184 16.0018 30.1694 15.7625 30.1694 15.4695Z"
                fill="#333333"
              />
              <path
                d="M30.9103 0.380859C30.5017 0.380859 30.1694 0.699402 30.1694 1.09175V1.09143V16.0016L31.2802 20.2615L32.3914 16.0016V1.09111V1.09143C32.3914 0.699722 32.0595 0.381179 31.6505 0.381179L30.9103 0.380859Z"
                fill="#333333"
              />
            </g>
            <path
              d="M68.5517 31.4048H0V43.857H68.5517V31.4048Z"
              fill="url(#pattern0_1_162)"
            />
            <defs>
              <pattern
                id="pattern0_1_162"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_1_162"
                  transform="scale(0.000906618 0.00478469)"
                />
              </pattern>
              <clipPath id="clip0_1_162">
                <rect
                  width="68.5517"
                  height="41.5272"
                  fill="white"
                  transform="translate(1.44824 0.142822)"
                />
              </clipPath>
              <image
                id="image0_1_162"
                width="1103"
                height="209"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABE8AAADRCAQAAACXiFS8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTEyLTEyVDE0OjQxOjEzKzA2OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTEyLTEyVDE0OjQxOjEzKzA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMi0xMlQxNDo0MToxMyswNjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2N2JkZTYwOC04M2U4LTA2NGUtYTgzOS1kNjQ0ZWEyNTE0Y2IiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNGNmMzAyNi00YTU1LWM0NGQtYmIy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"
              />
            </defs>
          </svg>
        </Link>
      </section>

      {/* Other Links */}

      <section className="flex gap-8">
        <Link
          href="/main"
          className="flex grow items-center justify-center rounded-lg text-sm font-medium hover:bg-gray-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          style={{
            textDecoration: 'overline underline',
          }}
        >
          MAIN
        </Link>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex grow items-center justify-center rounded-lg text-sm font-medium hover:bg-gray-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-gray-900 text-gray-50': pathname === link.href,
                }
              )}
            >
              <p>{link.name}</p>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

function handleDeugger() {
  debugger; // Execution will pause here
  return <div>Welcome to the Debugger !!</div>;
}

const Arch = () => {
  return (
    <div className="px-8">
      {/* <p>Architecture -Project Lorum</p> */}
      <section>
        <ArchHeader />
      </section>

      <section className="flex justify-around items-start gap-4 p-2 m-2">
        <div className="flex flex-col gap-2 p-2 py-28 m-2">
          {/* PROJECT Lorum */}
          <div className="flex flex-col p-2 m-2">
            <h2 className="font-thin text-6xl text-gray-400">PROJECT</h2>
            <p
              className="font-bold text-5xl cursor-pointer"
              onClick={() => handleDeugger}
            >
              Lorum
            </p>
          </div>
          {/* [<-] [->] */}
          <div className="flex gap-4 p-2 m-2">
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="52"
                height="52"
                fill="white"
                stroke="#F2F2F2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36 26.5C36 26.2239 35.7761 26 35.5 26L19.5 26C19.2239 26 19 26.2239 19 26.5C19 26.7761 19.2239 27 19.5 27L35.5 27C35.7761 27 36 26.7761 36 26.5Z"
                fill="#333333"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.3536 22.6464C23.1583 22.4512 22.8417 22.4512 22.6464 22.6464L18.7929 26.5L22.6464 30.3536C22.8417 30.5488 23.1583 30.5488 23.3536 30.3536C23.5488 30.1583 23.5488 29.8417 23.3536 29.6464L20.2071 26.5L23.3536 23.3536C23.5488 23.1583 23.5488 22.8417 23.3536 22.6464Z"
                fill="#333333"
              />
            </svg>
            <svg
              width="54"
              height="53"
              viewBox="0 0 54 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.4353"
                y="0.5"
                width="52"
                height="52"
                fill="#F9F9F9"
                stroke="#F2F2F2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9353 26.5C18.9353 26.2239 19.1592 26 19.4353 26L35.4353 26C35.7114 26 35.9353 26.2239 35.9353 26.5C35.9353 26.7761 35.7114 27 35.4353 27L19.4353 27C19.1592 27 18.9353 26.7761 18.9353 26.5Z"
                fill="#333333"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.5817 22.6464C31.777 22.4512 32.0936 22.4512 32.2889 22.6464L36.1424 26.5L32.2889 30.3536C32.0936 30.5488 31.777 30.5488 31.5817 30.3536C31.3865 30.1583 31.3865 29.8417 31.5817 29.6464L34.7282 26.5L31.5817 23.3536C31.3865 23.1583 31.3865 22.8417 31.5817 22.6464Z"
                fill="#333333"
              />
            </svg>
          </div>
          {/* 01 / 02 */}
          <div className="flex p-2 m-2">
            <svg
              width="142"
              height="52"
              viewBox="0 0 142 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1147 16.7227C12.1147 19.2617 11.6812 21.1484 10.814 22.3828C9.94678 23.6172 8.59131 24.2344 6.74756 24.2344C4.92725 24.2344 3.57959 23.6328 2.70459 22.4297C1.82959 21.2188 1.37646 19.4141 1.34521 17.0156V14.1211C1.34521 11.6133 1.77881 9.75 2.646 8.53125C3.51318 7.3125 4.87256 6.70312 6.72412 6.70312C8.56006 6.70312 9.91162 7.29297 10.7788 8.47266C11.646 9.64453 12.0913 11.457 12.1147 13.9102V16.7227ZM9.94678 13.7578C9.94678 11.9219 9.68896 10.5859 9.17334 9.75C8.65771 8.90625 7.84131 8.48438 6.72412 8.48438C5.61475 8.48438 4.80615 8.90234 4.29834 9.73828C3.79053 10.5742 3.52881 11.8594 3.51318 13.5938V17.0625C3.51318 18.9062 3.77881 20.2695 4.31006 21.1523C4.84912 22.0273 5.66162 22.4648 6.74756 22.4648C7.81787 22.4648 8.61084 22.0508 9.12646 21.2227C9.6499 20.3945 9.92334 19.0898 9.94678 17.3086V13.7578ZM8.54053 48H6.36084V33.5508L1.98975 35.1562V33.1875L8.20068 30.8555H8.54053V48Z"
                fill="#BDBDBD"
              />
              <path
                d="M125.018 16.7227C125.018 19.2617 124.585 21.1484 123.718 22.3828C122.85 23.6172 121.495 24.2344 119.651 24.2344C117.831 24.2344 116.483 23.6328 115.608 22.4297C114.733 21.2188 114.28 19.4141 114.249 17.0156V14.1211C114.249 11.6133 114.682 9.75 115.55 8.53125C116.417 7.3125 117.776 6.70312 119.628 6.70312C121.464 6.70312 122.815 7.29297 123.682 8.47266C124.55 9.64453 124.995 11.457 125.018 13.9102V16.7227ZM122.85 13.7578C122.85 11.9219 122.593 10.5859 122.077 9.75C121.561 8.90625 120.745 8.48438 119.628 8.48438C118.518 8.48438 117.71 8.90234 117.202 9.73828C116.694 10.5742 116.432 11.8594 116.417 13.5938V17.0625C116.417 18.9062 116.682 20.2695 117.214 21.1523C117.753 22.0273 118.565 22.4648 119.651 22.4648C120.721 22.4648 121.514 22.0508 122.03 21.2227C122.553 20.3945 122.827 19.0898 122.85 17.3086V13.7578ZM138.975 24H127.796V22.4414L133.702 15.8789C134.577 14.8867 135.178 14.082 135.507 13.4648C135.843 12.8398 136.01 12.1953 136.01 11.5312C136.01 10.6406 135.741 9.91016 135.202 9.33984C134.663 8.76953 133.944 8.48438 133.046 8.48438C131.968 8.48438 131.128 8.79297 130.526 9.41016C129.932 10.0195 129.635 10.8711 129.635 11.9648H127.468C127.468 10.3945 127.971 9.125 128.979 8.15625C129.995 7.1875 131.35 6.70312 133.046 6.70312C134.632 6.70312 135.885 7.12109 136.807 7.95703C137.729 8.78516 138.19 9.89062 138.19 11.2734C138.19 12.9531 137.12 14.9531 134.979 17.2734L130.409 22.2305H138.975V24Z"
                fill="#BDBDBD"
              />
              <line
                y1="-1"
                x2="43.8219"
                y2="-1"
                transform="matrix(-0.706805 0.707408 -0.706805 -0.707408 80.9285 0)"
                stroke="#E0E0E0"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        {/* IMAGE */}
        <div className="relative w-[700px] h-[892px] overflow-hidden">
          <Image
            src="/images/white-building.png"
            alt="Architecture"
            width={700}
            height={892}
            className="w-full h-auto"
          />
          <div
            className="p-2 bg-white flex gap-2 absolute left-10 top-[5rem] cursor-pointer hover:translate-x-2 transition-transform duration-300 ease-in-out shadow-md"
            onClick={() =>
              window.open(
                'https://ca.pinterest.com/terriartdesign/awesome-architecture/',
                '_blank'
              )
            }
          >
            <p className="px-2 font-thin text-[#333333]">VIEW PROJECT</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 11.5C3 11.2239 3.22386 11 3.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5C20 11.7761 19.7761 12 19.5 12L3.5 12C3.22386 12 3 11.7761 3 11.5Z"
                fill="#333333"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.6464 7.64645C15.8417 7.45118 16.1583 7.45118 16.3536 7.64645L20.2071 11.5L16.3536 15.3536C16.1583 15.5488 15.8417 15.5488 15.6464 15.3536C15.4512 15.1583 15.4512 14.8417 15.6464 14.6464L18.7929 11.5L15.6464 8.35355C15.4512 8.15829 15.4512 7.84171 15.6464 7.64645Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="flex justify-evenly gap-4 p-2 m-2 bg-gray-50">
        {/* Dual Verticle Images */}
        <div className="flex flex-col-2 gap-4 p-2 m-2">
          <div className="flex flex-col gap-2">
            <Image
              src="/images/dvi1.png"
              alt="Architecture"
              width={900}
              height={900}
              //   className="w-full h-auto"
            />
            <Image
              src="/images/dvi1.png"
              alt="Architecture"
              width={900}
              height={900}
              //   className="w-full h-auto"
            />
          </div>
          {/* Single ScyScraper Image */}
          <div className="flex flex-col gap-4 p-2 m-2">
            <Image
              src="/images/dvi1.png"
              alt="Architecture"
              width={1200}
              height={900}
              //   className="w-full h-auto"
            />
          </div>
        </div>

        {/* About */}
        <div className="flex flex-col gap-4 p-2 m-2">
          <div>
            <h2 className="mb-4 font-thin text-6xl text-gray-400">About</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              facere illum cupiditate magni quis distinctio sequi. Distinctio
              rerum vel nostrum, eius tenetur optio, minus ipsum officia
              deleniti voluptatem laboriosam totam. Laudantium sint impedit,
              nobis ipsam consequuntur porro repellendus necessitatibus aut!
              Voluptas veritatis iusto voluptatibus ex accusamus aliquam
              laudantium hic ratione, sint vel expedita culpa maiores dolorem!
              Molestias labore deleniti repellat! Sunt eius inventore recusandae
              accusamus cum cupiditate.
            </p>
          </div>
          <div className="p-2 flex gap-2 bg-white w-[20%] cursor-pointer hover:translate-x-2 transition-transform duration-300 ease-in-out">
            <p className="px-2 font-thin text-[#333333]">READ MORE</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 11.5C3 11.2239 3.22386 11 3.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5C20 11.7761 19.7761 12 19.5 12L3.5 12C3.22386 12 3 11.7761 3 11.5Z"
                fill="#333333"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.6464 7.64645C15.8417 7.45118 16.1583 7.45118 16.3536 7.64645L20.2071 11.5L16.3536 15.3536C16.1583 15.5488 15.8417 15.5488 15.6464 15.3536C15.4512 15.1583 15.4512 14.8417 15.6464 14.6464L18.7929 11.5L15.6464 8.35355C15.4512 8.15829 15.4512 7.84171 15.6464 7.64645Z"
                fill="#333333"
              />
            </svg>
          </div>
          {/* <div className="p-2 bg-white flex gap-2 absolute cursor-pointer hover:translate-x-2 transition-transform duration-300 ease-in-out shadow-md">
            <p className="px-2 font-thin text-[#333333]">VIEW TEST</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 11.5C3 11.2239 3.22386 11 3.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5C20 11.7761 19.7761 12 19.5 12L3.5 12C3.22386 12 3 11.7761 3 11.5Z"
                fill="#333333"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.6464 7.64645C15.8417 7.45118 16.1583 7.45118 16.3536 7.64645L20.2071 11.5L16.3536 15.3536C16.1583 15.5488 15.8417 15.5488 15.6464 15.3536C15.4512 15.1583 15.4512 14.8417 15.6464 14.6464L18.7929 11.5L15.6464 8.35355C15.4512 8.15829 15.4512 7.84171 15.6464 7.64645Z"
                fill="#333333"
              />
            </svg>
          </div> */}
        </div>
      </section>

      <section className="gap-4 px-2 py-8 m-2">
        {/* Main Focus / Mission Statement */}
        <h2 className="px-8 m-2 font-thin text-6xl text-gray-400">
          Main Focus / Mission Statement
        </h2>
        <div className="grid grid-cols-2 gap-4 m-4 pb-10">
          <div className="flex gap-2 h-20">
            {/* <Image src="#" alt="1" width={10} height={15} /> */}
            <h1 className="p-2 m-2 text-9xl text-gray-400 font-bold">1</h1>
            <p className="p-8 w-[18rem;]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div className="flex gap-2 h-20">
            {/* <Image src="#" alt="2" width={10} height={15} /> */}
            <h1 className="p-2 m-2 text-9xl text-gray-400 font-bold">2</h1>
            <p className="p-8 w-[18rem;]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
        </div>
      </section>

      <section className="gap-4 p-2 m-2">
        {/* Our Projects */}
        <h2 className="p-2 m-2 font-thin text-6xl text-gray-400">
          Our Projects
        </h2>
        <div className="grid flex-wrap">
          <p>Image</p>
        </div>
        <div className="p-2 bg-gray-800 flex gap-2 absolute left-10 cursor-pointer hover:translate-x-2 transition-transform duration-300 ease-in-out shadow-md">
          <p className="px-2 font-thin text-white">ALL PROJECTS</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 11.5C3 11.2239 3.22386 11 3.5 11L19.5 11C19.7761 11 20 11.2239 20 11.5C20 11.7761 19.7761 12 19.5 12L3.5 12C3.22386 12 3 11.7761 3 11.5Z"
              fill="#FFFFFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.6464 7.64645C15.8417 7.45118 16.1583 7.45118 16.3536 7.64645L20.2071 11.5L16.3536 15.3536C16.1583 15.5488 15.8417 15.5488 15.6464 15.3536C15.4512 15.1583 15.4512 14.8417 15.6464 14.6464L18.7929 11.5L15.6464 8.35355C15.4512 8.15829 15.4512 7.84171 15.6464 7.64645Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </section>
      <section>{/* Contact Us */}</section>
      <section>{/* Footer */}</section>
    </div>
  );
};

export default Arch;

// export const metadata = {
//   title: 'Architecture',
//   description: 'Architecture - Project Lorum',
// };
