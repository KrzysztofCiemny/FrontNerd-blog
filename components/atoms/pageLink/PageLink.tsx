import Link from "next/link"

const PageLink = ({ children, to, dark }: any) => {
  return (
    <Link href={to} className={`flex items-center gap-3 group no-underline tracking-wide font-medium cursor-pointer z-[3] max-w-[15rem] ${dark ? 'text-black' : 'text-white'}`}>
      {children}
      <svg className="group-hover:translate-x-2 ease-in duration-200" width="1.6rem" height="1.6rem" viewBox="0 -5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>arrow_right [#365]</title>
        <desc>Created with Sketch.</desc>

        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -6564.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path fill={`${dark ? '#2B2A35' : '#fafdff'}`} d="M298.803134,6405.67805 L300.227463,6407.16201 C300.5321,6407.48143 300.304126,6407.99811 299.861293,6407.99811 L284.834221,6407.99811 C284.277401,6407.99811 284,6408.4477 284,6409.00043 L284,6408.99242 C284,6409.54515 284.277401,6410.00075 284.834221,6410.00075 L299.846162,6410.00075 C300.291013,6410.00075 300.517977,6410.54047 300.209306,6410.85788 L298.793047,6412.31781 C298.409729,6412.71634 298.426877,6413.35218 298.833396,6413.72867 L298.835413,6413.73268 C299.236888,6414.10517 299.866337,6414.08614 300.244611,6413.68962 L303.449351,6410.34721 C304.186734,6409.57219 304.182699,6408.36059 303.44229,6407.58957 L300.265794,6404.30724 C299.888529,6403.91472 299.264124,6403.8957 298.863658,6404.26518 L298.85357,6404.2752 C298.44806,6404.64869 298.425868,6405.27752 298.803134,6405.67805" id="arrow_right-[#365]">
              </path>
            </g>
          </g>
        </g>
      </svg>
    </Link>
  )
}

export default PageLink
