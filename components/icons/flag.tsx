import { HTMLAttributes, SVGProps } from "react";

export default function Flag({ className, ...rest }: SVGProps<SVGSVGElement>) {
    return <svg className={className} {...rest} preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
        <g>
            <path fill="#E30613" d="M138.303 136.015 180 104.262l-11.547-5.065 7.442-27.058-24.763 4.571-4.489-12.108-22.932 22.919 6.767-46.764-14.625 6.424L100 20h-.001L84.147 47.181l-14.626-6.424 6.768 46.764-22.933-22.919-4.49 12.108-24.761-4.571 7.441 27.058L20 104.262l41.696 31.753-4.106 13.962 39.326-4.354L95.294 180h9.412l-1.622-34.377 39.325 4.354-4.106-13.962z" data-color="1"></path>
        </g>
    </svg>
}