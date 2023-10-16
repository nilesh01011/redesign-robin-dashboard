import { AVATAR, AVATAR2, NEWSCARIMAGES } from "./assets";

// Sidebar Menu Items =>
export const menuItems = [
  {
    key: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6453 5.22805L9.44855 0.993922C8.64617 0.336639 7.34886 0.336639 6.55398 0.986279L1.35727 5.22805C0.772355 5.7019 0.397412 6.70311 0.524892 7.45211L1.52224 13.5358C1.70221 14.6211 2.72206 15.5 3.8019 15.5H12.2006C13.273 15.5 14.3003 14.6134 14.4803 13.5358L15.4776 7.45211C15.5976 6.70311 15.2227 5.7019 14.6453 5.22805ZM8.00126 10.6774C6.96642 10.6774 6.12655 9.82138 6.12655 8.76667C6.12655 7.71196 6.96642 6.85597 8.00126 6.85597C9.03611 6.85597 9.87598 7.71196 9.87598 8.76667C9.87598 9.82138 9.03611 10.6774 8.00126 10.6774Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 2,
    name: "Favourites",
    isFolder: true,
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.99333 1.52115C5.47218 0.531137 7.21136 0.00178415 8.991 4.50041e-06C10.1737 -0.00117815 11.3449 0.230741 12.4379 0.682504C13.5309 1.13427 14.5241 1.79701 15.3608 2.63286C16.1975 3.4687 16.8612 4.46126 17.3141 5.55377C17.7669 6.64629 18 7.81735 18 9C18 10.7797 17.4724 12.5194 16.4839 13.9992C15.4953 15.479 14.0902 16.6326 12.4462 17.3141C10.8022 17.9955 8.99308 18.1743 7.2475 17.8277C5.50191 17.4812 3.89825 16.6249 2.63922 15.3671C1.38019 14.1094 0.522318 12.5066 0.174035 10.7613C-0.174247 9.01609 0.00269905 7.20677 0.682508 5.56208C1.36232 3.91739 2.51447 2.51116 3.99333 1.52115ZM9.00014 12.105L12.8071 14.4L11.7991 10.062L15.1561 7.155L10.7281 6.777L9.00014 2.7L7.27214 6.786L2.84414 7.164L6.20114 10.071L5.19314 14.4L9.00014 12.105Z"
          fill="currentColor"
        />
      </svg>
    ),
    items: [
      {
        name: "Favourites 1",
        isFolder: true,
        items: [
          { key: "2.1.1", name: "Favourites 1.1", link: "/favourites" },
          {
            key: "1.1.2",
            name: "Favourites 1.2",
            isFolder: true,
            items: [
              {
                key: "1.1.1",
                name: "Favourites 1.1.1.1",
                isFolder: true,
                items: [
                  {
                    key: "1.1.1.1.1",
                    name: "Favourites 1.1.1",
                    isFolder: true,
                    items: [
                      {
                        key: "1.1.1.1.1.1",
                        name: "Favourites 1.1.1",
                        link: "/favourites",
                      },
                    ],
                  },
                ],
              },
              {
                key: "1.1.2",
                name: "Favourites 1.1.2.1",
                isFolder: true,
                items: [
                  {
                    key: "1.1.2.1.1",
                    name: "Favourites 1.1.2",
                    isFolder: true,
                    items: [
                      {
                        key: "1.1.2.1.1.1",
                        name: "Favourites 1.1.2",
                        link: "/favourites",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        key: 2.1,
      },
      {
        name: "Favourites 2",
        key: 2.2,
        link: "/favourites",
      },
      {
        key: 2.3,
        name: "Criticality Group",
        link: "/favourites/criticality-group",
      },
    ],
  },
  {
    name: "Pre Sales",
    key: 3,
    link: "/pre-sales",
    icon: (
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.35 2.33352H13.8333C14.275 2.33484 14.6981 2.51086 15.0104 2.82313C15.3227 3.13541 15.4987 3.55857 15.5 4.00019V15.6669C15.4987 16.1085 15.3227 16.5316 15.0104 16.8439C14.6981 17.1562 14.275 17.3322 13.8333 17.3335H2.16667C1.72504 17.3322 1.30189 17.1562 0.989612 16.8439C0.677337 16.5316 0.501319 16.1085 0.5 15.6669V4.00019C0.501319 3.55857 0.677337 3.13541 0.989612 2.82313C1.30189 2.51086 1.72504 2.33484 2.16667 2.33352H5.65C5.82063 1.84639 6.13844 1.42432 6.55944 1.1257C6.98045 0.827089 7.48384 0.666687 8 0.666687C8.51615 0.666687 9.01955 0.827089 9.44056 1.1257C9.86156 1.42432 10.1794 1.84639 10.35 2.33352ZM8.46299 2.4738C8.32595 2.38223 8.16484 2.33336 8.00002 2.33336C7.77901 2.33336 7.56704 2.42116 7.41076 2.57744C7.25448 2.73372 7.16669 2.94568 7.16669 3.16669C7.16669 3.33151 7.21556 3.49263 7.30713 3.62967C7.3987 3.76671 7.52885 3.87352 7.68112 3.93659C7.83339 3.99966 8.00094 4.01617 8.16259 3.98401C8.32425 3.95186 8.47273 3.87249 8.58928 3.75595C8.70582 3.6394 8.78519 3.49092 8.81734 3.32927C8.84949 3.16762 8.83299 3.00006 8.76992 2.84779C8.70685 2.69552 8.60004 2.56537 8.46299 2.4738ZM8.00001 5.6667C8.49447 5.6667 8.97782 5.81332 9.38894 6.08803C9.80006 6.36273 10.1205 6.75318 10.3097 7.20999C10.4989 7.66681 10.5484 8.16947 10.452 8.65443C10.3555 9.13938 10.1174 9.58484 9.76778 9.93447C9.41815 10.2841 8.97269 10.5222 8.48774 10.6187C8.00279 10.7151 7.50012 10.6656 7.04331 10.4764C6.58649 10.2872 6.19604 9.96675 5.92134 9.55563C5.64664 9.1445 5.50001 8.66115 5.50001 8.1667C5.50001 7.50366 5.76341 6.86778 6.23225 6.39893C6.70109 5.93009 7.33697 5.6667 8.00001 5.6667ZM2.99998 14.5V15.6667H13V14.5C13 12.8334 9.66665 11.9167 7.99998 11.9167C6.33332 11.9167 2.99998 12.8334 2.99998 14.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 4,
    name: "Sales",
    isFolder: true,
    items: [
      {
        name: "components",
        isFolder: true,
        items: [
          { name: "Sales 4.1", key: "4.1.1", link: "/sales-1" },
          { name: "Sales 4.2", key: "4.1.2", link: "/sales-2" },
        ],
        key: 4.1,
      },
    ],
    icon: (
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3104 0.563769C13.5227 0.714759 13.6823 0.928535 13.7667 1.17499L15.5 6.16666V12.8333C15.5 13.0543 15.4122 13.2663 15.2559 13.4226C15.0996 13.5789 14.8877 13.6667 14.6667 13.6667H13.8333C13.6123 13.6667 13.4004 13.5789 13.2441 13.4226C13.0878 13.2663 13 13.0543 13 12.8333V12H3V12.8333C3 13.0543 2.9122 13.2663 2.75592 13.4226C2.59964 13.5789 2.38768 13.6667 2.16667 13.6667H1.33333C1.11232 13.6667 0.900358 13.5789 0.744078 13.4226C0.587797 13.2663 0.5 13.0543 0.5 12.8333V6.16666L2.23333 1.17499C2.31837 0.928947 2.47811 0.715592 2.69025 0.564705C2.90239 0.413817 3.15634 0.332928 3.41667 0.333325H12.5833C12.8438 0.33218 13.0981 0.412778 13.3104 0.563769ZM2.72221 9.28934C2.92777 9.42669 3.16945 9.5 3.41667 9.5C3.74819 9.5 4.06614 9.36831 4.30056 9.13388C4.53498 8.89946 4.66667 8.58152 4.66667 8.25C4.66667 8.00277 4.59336 7.7611 4.45601 7.55554C4.31866 7.34998 4.12343 7.18976 3.89503 7.09515C3.66662 7.00054 3.41529 6.97579 3.17281 7.02402C2.93033 7.07225 2.7076 7.1913 2.53279 7.36612C2.35797 7.54093 2.23892 7.76366 2.19069 8.00614C2.14246 8.24861 2.16721 8.49995 2.26182 8.72836C2.35643 8.95676 2.51665 9.15199 2.72221 9.28934ZM12.5833 9.5C12.3361 9.5 12.0944 9.42669 11.8889 9.28934C11.6833 9.15199 11.5231 8.95676 11.4285 8.72836C11.3339 8.49995 11.3091 8.24861 11.3574 8.00614C11.4056 7.76366 11.5246 7.54093 11.6995 7.36612C11.8743 7.1913 12.097 7.07225 12.3395 7.02402C12.582 6.97579 12.8333 7.00054 13.0617 7.09515C13.2901 7.18976 13.4853 7.34998 13.6227 7.55554C13.76 7.7611 13.8333 8.00277 13.8333 8.25C13.8333 8.58152 13.7016 8.89946 13.4672 9.13388C13.2328 9.36831 12.9149 9.5 12.5833 9.5ZM3.41667 1.58333L2.16667 5.33333H13.8333L12.5833 1.58333H3.41667Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Parts",
    isFolder: true,
    items: [
      {
        key: 5.1,
        name: "Parts Ordering",
        isFolder: true,
        items: [
          {
            key: "5.1.1",
            name: "Suggested Order Qty. (SoQ)",
            link: "/parts/parts-ordering/suggest-order-qty",
          },
          {
            key: "5.1.2",
            name: "Purchase Order",
          },
          {
            key: "5.1.3",
            name: "PO-lap",
          },
        ],
      },
      { key: 5.2, name: "Receive Parts", link: "/receive-parts" },
      { key: 5.3, name: "Workshop Related", link: "/workshop-related" },
      {
        key: 5.4,
        name: "Branch wise Stock View",
        link: "/branch-wise-stock-view",
      },
      {
        key: 5.5,
        name: "Part Sales",
        isFolder: true,
        items: [
          {
            key: "5.5.1",
            name: "Part Sales 1",
          },
          {
            key: "5.5.2",
            name: "Part Sales 2",
          },
        ],
      },
      {
        key: 5.6,
        name: "Stock Transfer",
        isFolder: true,
        items: [
          {
            key: "5.6.1",
            name: "Stock Transfer 1",
          },
          {
            key: "5.6.2",
            name: "Stock Transfer 2",
          },
        ],
      },
      { key: 5.7, name: "Stock", link: "/stock" },
    ],
    key: 5,
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 0.5L3.5 7.25H12.5L8 0.5Z" fill="currentColor" />
        <path d="M0.5 8.75H7.25V15.5H0.5V8.75Z" fill="currentColor" />
        <path
          d="M12.125 15.5C13.989 15.5 15.5 13.989 15.5 12.125C15.5 10.261 13.989 8.75 12.125 8.75C10.261 8.75 8.75 10.261 8.75 12.125C8.75 13.989 10.261 15.5 12.125 15.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Service",
    isFolder: true,
    items: [{ key: 6.1, name: "Service 6.1", link: "/service" }],
    key: 6,
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.83323 1.76398C5.06659 0.939867 6.51664 0.5 8 0.5C9.98913 0.5 11.8968 1.29018 13.3033 2.6967C14.7098 4.10322 15.5 6.01088 15.5 8C15.5 9.48336 15.0601 10.9334 14.236 12.1668C13.4119 13.4001 12.2406 14.3614 10.8701 14.9291C9.49968 15.4968 7.99168 15.6453 6.53683 15.3559C5.08197 15.0665 3.7456 14.3522 2.6967 13.3033C1.64781 12.2544 0.933503 10.918 0.644114 9.46318C0.354725 8.00832 0.50325 6.50032 1.07091 5.12987C1.63856 3.75943 2.59986 2.58809 3.83323 1.76398ZM10.6252 11.7479L11.6752 10.6979C11.7439 10.6278 11.7824 10.5335 11.7824 10.4354C11.7824 10.3372 11.7439 10.243 11.6752 10.1729L9.11767 7.61538C9.29619 7.12024 9.31988 6.58252 9.18559 6.07361C9.05131 5.5647 8.76541 5.10867 8.36584 4.76607C7.96628 4.42347 7.47196 4.21051 6.94852 4.15546C6.42507 4.10042 5.89727 4.20589 5.43518 4.45788L7.19768 6.21288L6.14018 7.27038L4.37768 5.50788C4.12569 5.96997 4.02022 6.49777 4.07526 7.02122C4.13031 7.54466 4.34327 8.03898 4.68587 8.43854C5.02847 8.83811 5.4845 9.12401 5.99341 9.25829C6.50232 9.39258 7.04004 9.36889 7.53518 9.19037L10.0927 11.7479C10.1275 11.783 10.169 11.8109 10.2147 11.83C10.2604 11.849 10.3094 11.8588 10.3589 11.8588C10.4084 11.8588 10.4574 11.849 10.5031 11.83C10.5488 11.8109 10.5903 11.783 10.6252 11.7479Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 7,
    name: "CRM",
    link: "/crm",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.16667 0.5H13.8333C14.2754 0.5 14.6993 0.675595 15.0118 0.988155C15.3244 1.30072 15.5 1.72464 15.5 2.16667V13.8333C15.4987 14.275 15.3227 14.6981 15.0104 15.0104C14.6981 15.3227 14.275 15.4987 13.8333 15.5H2.16667C1.72464 15.5 1.30072 15.3244 0.988155 15.0118C0.675595 14.6993 0.5 14.2754 0.5 13.8333V2.16667C0.5 1.72464 0.675595 1.30072 0.988155 0.988155C1.30072 0.675595 1.72464 0.5 2.16667 0.5ZM2.16667 13H13.8333V2.99998H2.16667V13Z"
          fill="currentColor"
        />
        <path d="M11.75 8.75H4.25V7.25H11.75V8.75Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: 8,
    name: "Finance",
    link: "/finance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <mask id="path-1-inside-1_41_2632" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.51677 3.99987C0.527841 5.47991 0 7.21997 0 9C0 11.3869 0.948211 13.6761 2.63604 15.364C4.32386 17.0518 6.61305 18 9 18C10.78 18 12.5201 17.4722 14.0001 16.4832C15.4802 15.4943 16.6337 14.0887 17.3149 12.4442C17.9961 10.7996 18.1743 8.99002 17.8271 7.24419C17.4798 5.49836 16.6226 3.89471 15.364 2.63604C14.1053 1.37737 12.5016 0.520203 10.7558 0.172936C9.00998 -0.17433 7.20038 0.00389955 5.55585 0.685088C3.91131 1.36628 2.50571 2.51983 1.51677 3.99987ZM8.09516 4.554H5.94844V3.6H12.2484V4.5468H10.5648C10.9081 4.9041 11.1262 5.4054 11.1892 6.1056H12.2484V7.0515H11.1759C11.0002 8.4672 10.0954 9.7794 8.27156 9.7956H7.59825L11.1042 14.4H9.44257L5.94844 9.7875V8.6022H8.14398C9.09844 8.6022 9.77175 8.1009 9.9261 7.0515H5.94844V6.1056H9.9261C9.76466 5.0715 9.05591 4.554 8.09516 4.554Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.51677 3.99987C0.527841 5.47991 0 7.21997 0 9C0 11.3869 0.948211 13.6761 2.63604 15.364C4.32386 17.0518 6.61305 18 9 18C10.78 18 12.5201 17.4722 14.0001 16.4832C15.4802 15.4943 16.6337 14.0887 17.3149 12.4442C17.9961 10.7996 18.1743 8.99002 17.8271 7.24419C17.4798 5.49836 16.6226 3.89471 15.364 2.63604C14.1053 1.37737 12.5016 0.520203 10.7558 0.172936C9.00998 -0.17433 7.20038 0.00389955 5.55585 0.685088C3.91131 1.36628 2.50571 2.51983 1.51677 3.99987ZM8.09516 4.554H5.94844V3.6H12.2484V4.5468H10.5648C10.9081 4.9041 11.1262 5.4054 11.1892 6.1056H12.2484V7.0515H11.1759C11.0002 8.4672 10.0954 9.7794 8.27156 9.7956H7.59825L11.1042 14.4H9.44257L5.94844 9.7875V8.6022H8.14398C9.09844 8.6022 9.77175 8.1009 9.9261 7.0515H5.94844V6.1056H9.9261C9.76466 5.0715 9.05591 4.554 8.09516 4.554Z"
          fill="currentColor"
        />
        <path
          d="M1.51677 3.99987L0.685304 3.4443V3.4443L1.51677 3.99987ZM2.63604 15.364L1.92893 16.0711H1.92893L2.63604 15.364ZM14.0001 16.4832L14.5557 17.3147H14.5557L14.0001 16.4832ZM17.8271 7.24419L16.8463 7.43928L17.8271 7.24419ZM15.364 2.63604L14.6568 3.34315V3.34315L15.364 2.63604ZM10.7558 0.172936L10.9509 -0.807849L10.7558 0.172936ZM5.55585 0.685088L5.93853 1.60897L5.55585 0.685088ZM5.94844 4.554H4.94844V5.554H5.94844V4.554ZM5.94844 3.6V2.6H4.94844V3.6H5.94844ZM12.2484 3.6H13.2484V2.6H12.2484V3.6ZM12.2484 4.5468V5.5468H13.2484V4.5468H12.2484ZM10.5648 4.5468V3.5468H8.21692L9.84372 5.23969L10.5648 4.5468ZM11.1892 6.1056L10.1933 6.19521L10.2752 7.1056H11.1892V6.1056ZM12.2484 6.1056H13.2484V5.1056H12.2484V6.1056ZM12.2484 7.0515V8.0515H13.2484V7.0515H12.2484ZM11.1759 7.0515V6.0515H10.2922L10.1835 6.9284L11.1759 7.0515ZM8.27156 9.7956V10.7956L8.28044 10.7956L8.27156 9.7956ZM7.59825 9.7956V8.7956H5.57992L6.80264 10.4014L7.59825 9.7956ZM11.1042 14.4V15.4H13.1225L11.8998 13.7942L11.1042 14.4ZM9.44257 14.4L8.64547 15.0038L8.94557 15.4H9.44257V14.4ZM5.94844 9.7875H4.94844V10.1235L5.15133 10.3913L5.94844 9.7875ZM5.94844 8.6022V7.6022H4.94844V8.6022H5.94844ZM9.9261 7.0515L10.9155 7.19702L11.0839 6.0515H9.9261V7.0515ZM5.94844 7.0515H4.94844V8.0515H5.94844V7.0515ZM5.94844 6.1056V5.1056H4.94844V6.1056H5.94844ZM9.9261 6.1056V7.1056H11.0943L10.9141 5.95135L9.9261 6.1056ZM1 9C1 7.41775 1.46919 5.87103 2.34824 4.55544L0.685304 3.4443C-0.41351 5.08879 -1 7.02219 -1 9H1ZM3.34315 14.6569C1.84285 13.1566 1 11.1217 1 9H-1C-1 11.6522 0.0535682 14.1957 1.92893 16.0711L3.34315 14.6569ZM9 17C6.87827 17 4.84344 16.1571 3.34314 14.6569L1.92893 16.0711C3.80429 17.9464 6.34783 19 9 19V17ZM13.4446 15.6518C12.129 16.5308 10.5822 17 9 17V19C10.9778 19 12.9112 18.4135 14.5557 17.3147L13.4446 15.6518ZM16.391 12.0615C15.7855 13.5233 14.7602 14.7727 13.4446 15.6518L14.5557 17.3147C16.2002 16.2159 17.4819 14.6541 18.2388 12.8268L16.391 12.0615ZM16.8463 7.43928C17.155 8.99113 16.9965 10.5997 16.391 12.0615L18.2388 12.8268C18.9957 10.9996 19.1937 8.98891 18.8078 7.0491L16.8463 7.43928ZM14.6568 3.34315C15.7757 4.46197 16.5376 5.88743 16.8463 7.43928L18.8078 7.0491C18.422 5.10929 17.4696 3.32746 16.0711 1.92894L14.6568 3.34315ZM10.5607 1.15372C12.1126 1.4624 13.538 2.22433 14.6568 3.34315L16.0711 1.92894C14.6725 0.530411 12.8907 -0.421997 10.9509 -0.807849L10.5607 1.15372ZM5.93853 1.60897C7.40034 1.00347 9.00887 0.84504 10.5607 1.15372L10.9509 -0.807849C9.01109 -1.1937 7.00042 -0.995668 5.17316 -0.238791L5.93853 1.60897ZM2.34824 4.55544C3.22729 3.23985 4.47672 2.21447 5.93853 1.60897L5.17316 -0.238791C3.3459 0.518085 1.78412 1.79981 0.685304 3.4443L2.34824 4.55544ZM5.94844 5.554H8.09516V3.554H5.94844V5.554ZM4.94844 3.6V4.554H6.94844V3.6H4.94844ZM12.2484 2.6H5.94844V4.6H12.2484V2.6ZM13.2484 4.5468V3.6H11.2484V4.5468H13.2484ZM10.5648 5.5468H12.2484V3.5468H10.5648V5.5468ZM12.1852 6.01599C12.1071 5.14776 11.8231 4.41303 11.2858 3.85391L9.84372 5.23969C9.99312 5.39516 10.1454 5.66304 10.1933 6.19521L12.1852 6.01599ZM12.2484 5.1056H11.1892V7.1056H12.2484V5.1056ZM13.2484 7.0515V6.1056H11.2484V7.0515H13.2484ZM11.1759 8.0515H12.2484V6.0515H11.1759V8.0515ZM8.28044 10.7956C9.45363 10.7851 10.3998 10.3474 11.0708 9.63291C11.7231 8.93829 12.0606 8.04278 12.1683 7.1746L10.1835 6.9284C10.1155 7.47592 9.91282 7.94436 9.61283 8.26381C9.3315 8.5634 8.91334 8.78986 8.26268 8.79564L8.28044 10.7956ZM7.59825 10.7956H8.27156V8.7956H7.59825V10.7956ZM11.8998 13.7942L8.39386 9.18979L6.80264 10.4014L10.3086 15.0058L11.8998 13.7942ZM9.44257 15.4H11.1042V13.4H9.44257V15.4ZM5.15133 10.3913L8.64547 15.0038L10.2397 13.7962L6.74554 9.18366L5.15133 10.3913ZM4.94844 8.6022V9.7875H6.94844V8.6022H4.94844ZM8.14398 7.6022H5.94844V9.6022H8.14398V7.6022ZM8.93674 6.90598C8.88733 7.24191 8.7741 7.38595 8.69382 7.45305C8.60863 7.52424 8.44784 7.6022 8.14398 7.6022V9.6022C8.79458 9.6022 9.44767 9.4295 9.97633 8.9877C10.5099 8.54179 10.8105 7.91048 10.9155 7.19702L8.93674 6.90598ZM5.94844 8.0515H9.9261V6.0515H5.94844V8.0515ZM4.94844 6.1056V7.0515H6.94844V6.1056H4.94844ZM9.9261 5.1056H5.94844V7.1056H9.9261V5.1056ZM8.09516 5.554C8.39725 5.554 8.57613 5.63368 8.67875 5.71729C8.77482 5.79556 8.889 5.94555 8.93806 6.25984L10.9141 5.95135C10.8018 5.23155 10.4808 4.60574 9.94199 4.16674C9.40969 3.73307 8.75382 3.554 8.09516 3.554V5.554Z"
          fill="currentColor"
          mask="url(#path-1-inside-1_41_2632)"
        />
      </svg>
    ),
  },
  {
    key: 9,
    name: "HR",
    link: "/hr",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389955 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948211 11.387 0 9 0ZM12.2487 5.70586C12.5923 5.70586 12.9281 5.80774 13.2137 5.9986C13.4994 6.18947 13.722 6.46075 13.8535 6.77814C13.985 7.09554 14.0194 7.44479 13.9523 7.78174C13.8853 8.11868 13.7199 8.42818 13.477 8.67111C13.234 8.91403 12.9245 9.07946 12.5876 9.14649C12.2506 9.21351 11.9014 9.17911 11.584 9.04764C11.2666 8.91617 10.9953 8.69354 10.8044 8.40789C10.6136 8.12224 10.5117 7.78641 10.5117 7.44286C10.5111 7.21459 10.5556 6.98845 10.6427 6.77744C10.7298 6.56643 10.8577 6.37471 11.0191 6.2133C11.1806 6.05188 11.3723 5.92396 11.5833 5.83688C11.7943 5.74979 12.0204 5.70527 12.2487 5.70586ZM8.02901 4.64175C7.67973 4.40836 7.26907 4.28379 6.84898 4.28379C6.28596 4.28474 5.74626 4.50882 5.34814 4.90694C4.95002 5.30507 4.72594 5.84476 4.72498 6.40779C4.72498 6.82788 4.84956 7.23853 5.08294 7.58782C5.31633 7.93711 5.64805 8.20935 6.03616 8.37011C6.42427 8.53087 6.85134 8.57293 7.26336 8.49098C7.67537 8.40902 8.05383 8.20673 8.35088 7.90968C8.64793 7.61264 8.85022 7.23418 8.93217 6.82216C9.01413 6.41014 8.97206 5.98308 8.8113 5.59497C8.65054 5.20686 8.3783 4.87513 8.02901 4.64175ZM6.84962 12.5012V15.8762C5.78563 15.541 4.814 14.9633 4.01126 14.1886C3.20851 13.414 2.59657 12.4636 2.22362 11.4122C3.16862 10.4042 5.52662 9.89121 6.84962 9.89121C7.42457 9.90335 7.9971 9.96965 8.55962 10.0892C8.07233 10.2835 7.65164 10.6146 7.34824 11.0426C7.04484 11.4705 6.87167 11.9771 6.84962 12.5012ZM8.28807 16.1638C8.52418 16.1895 8.76157 16.2015 8.99907 16.1998C10.4473 16.1971 11.8612 15.7588 13.057 14.9418C14.2528 14.1248 15.1751 12.9669 15.7041 11.6188C14.6756 10.9485 13.4757 10.5891 12.2481 10.5838C10.9341 10.5838 8.28807 11.2228 8.28807 12.5008V16.1638Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 10,
    name: "Admin",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M14 8C14.3351 8.00471 14.6694 8.0348 15 8.09V3.27L7.5 0L0 3.27V8.18C0.00569693 10.4114 0.742038 12.5795 2.09644 14.3529C3.45084 16.1263 5.34876 17.4073 7.5 18C8.04915 17.8664 8.58476 17.6823 9.1 17.45C8.46506 16.5527 8.08926 15.498 8.01377 14.4014C7.93827 13.3048 8.16599 12.2085 8.67198 11.2327C9.17796 10.2569 9.94271 9.43907 10.8825 8.86888C11.8222 8.2987 12.9008 7.9981 14 8Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 10C13.2089 10 12.4355 10.2346 11.7777 10.6741C11.1199 11.1136 10.6072 11.7384 10.3045 12.4693C10.0017 13.2002 9.92252 14.0044 10.0769 14.7804C10.2312 15.5563 10.6122 16.269 11.1716 16.8284C11.731 17.3878 12.4437 17.7688 13.2196 17.9231C13.9956 18.0775 14.7998 17.9983 15.5307 17.6955C16.2616 17.3928 16.8864 16.8801 17.3259 16.2223C17.7654 15.5645 18 14.7911 18 14C18 12.9391 17.5786 11.9217 16.8284 11.1716C16.0783 10.4214 15.0609 10 14 10ZM13.9989 11.3799C14.2955 11.3812 14.5796 11.4996 14.7894 11.7094C14.9992 11.9191 15.1176 12.2032 15.1189 12.4999C15.116 12.796 14.9971 13.0792 14.7877 13.2886C14.5783 13.4981 14.295 13.617 13.9989 13.6199C13.7027 13.617 13.4195 13.4981 13.2101 13.2886C13.0007 13.0792 12.8818 12.796 12.8789 12.4999C12.8802 12.2032 12.9986 11.9191 13.2084 11.7094C13.4181 11.4996 13.7023 11.3812 13.9989 11.3799ZM12.7359 16.4403C13.126 16.6441 13.5597 16.7503 13.9998 16.75C14.4399 16.7503 14.8735 16.6441 15.2636 16.4403C15.6537 16.2366 15.9886 15.9414 16.2398 15.58C16.1898 14.86 14.7298 14.5 13.9998 14.5C13.2698 14.5 11.8098 14.86 11.7598 15.58C12.0109 15.9414 12.3458 16.2366 12.7359 16.4403Z"
          fill="currentColor"
        />
      </svg>
    ),
    isFolder: true,
    items: [
      {
        name: "Customer Master",
        key: 10.1,
        link: "/admin/customer-master",
      },
      {
        name: "OTF",
        key: 10.2,
        link: "/admin/booking-form",
      },
      {
        name: "Admin 1.3",
        key: 10.3,
        link: "/admin/admin-1-3",
      },
    ],
  },
];

// Notifications
export const notification = [
  {
    key: 1,
    title: "Inbox",
    items: [
      {
        key: 1.1,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "",
        time: "2 Min Ago",
        readMark: true,
      },
      {
        key: 1.2,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "",
        time: "2 Min Ago",
        readMark: true,
      },
      {
        key: 1.3,
        title:
          "Delivery Note Details Need To Be Approval and Forward To Next Process.",
        text: "The Delivery Note contains the list of Items that are sent in the shipment and updates that inventory details. The Delivery Note is an optional step and a Sales Invoice.",
        master: "Application Master",
        date: "",
        time: "2 Min Ago",
        readMark: true,
      },
      {
        key: 1.4,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 1.5,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 1.6,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 1.7,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 1.8,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 1.9,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
    ],
  },
  {
    key: 2,
    title: "Archive",
    items: [
      {
        key: 2.1,
        title: "Vehicle Tracking Details Will Be Updated Archive.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "",
        time: "2 Min Ago",
        readMark: true,
      },
      {
        key: 2.2,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "",
        time: "2 Min Ago",
        readMark: true,
      },
      {
        key: 2.3,
        title:
          "Delivery Note Details Need To Be Approval and Forward To Next Process.",
        text: "The Delivery Note contains the list of Items that are sent in the shipment and updates that inventory details. The Delivery Note is an optional step and a Sales Invoice.",
        master: "Application Master",
        date: "",
        time: "2 Min Ago",
        readMark: true,
      },
      {
        key: 2.4,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 2.5,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 2.6,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 2.7,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 2.8,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 2.9,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 2.10,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
    ],
  },
];

// Dashboard =>
// Carousel
export const keyHighlights = [
  {
    key: 1,
    link: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing.",
    time: "5min ago",
  },
  {
    key: 2,
    link: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing 2.",
    time: "10min ago",
  },
  {
    key: 3,
    link: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing 3.",
    time: "15min ago",
  },
  {
    key: 4,
    link: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing 4.",
    time: "30min ago",
  },
];

// Action Items
export const actionItems = [
  {
    id: 1,
    text: "Pending For Invoice Approval",
    count: 10,
    contents: [
      {
        id: "1.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.3",
        title: "Pending POs to be released",
        date: "4 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.4",
        title: "Pending POs to be released",
        date: "4 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.5",
        title: "Pending POs to be released",
        date: "5 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.6",
        title: "Pending POs to be released",
        date: "5 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.7",
        title: "Pending POs to be released",
        date: "6 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.8",
        title: "Pending POs to be released",
        date: "8 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.9",
        title: "Pending POs to be released",
        date: "12 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.10",
        title: "Pending POs to be released",
        date: "12 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 2,
    text: "Pending PO approval & SO created with Amount: 182207.23",
    count: 8,
    contents: [
      {
        id: "2.1",
        title: "Pending POs to be released",
        date: "1 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: " 2.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "2.3",
        title: "Pending POs to be released",
        date: "3 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "2.4",
        title: "Pending POs to be released",
        date: "3 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "2.5",
        title: "Pending POs to be released",
        date: "4 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "2.6",
        title: "Pending POs to be released",
        date: "8 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "2.7",
        title: "Pending POs to be released",
        date: "10 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "2.8",
        title: "Pending POs to be released",
        date: "12 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 3,
    text: "Pending For Invoice Approva",
    count: 4,
    contents: [
      {
        id: "3.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "3.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "3.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "3.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 4,
    text: "Pending PO approval & SO created with Amount: 182207.23",
    count: 5,
    contents: [
      {
        id: "4.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "4.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "4.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "4.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "4.5",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },

  {
    id: 5,
    text: "Pending For Invoice Approval",
    count: 12,
    contents: [
      {
        id: "5.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.5",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.6",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.7",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.8",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.9",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.10",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.11",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.12",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 6,
    text: "Pending PO approval & SO created with Amount: 182207.23",
    count: 8,
    contents: [
      {
        id: "6.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.5",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.6",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.7",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.8",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 7,
    text: "Pending For Invoice Approva",
    count: 7,
    contents: [
      {
        id: "7.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "7.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "7.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "7.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "7.5",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "7.6",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "7.7",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 8,
    text: "Pending PO approval & SO created with Amount: 182207.23",
    count: 5,
    contents: [
      {
        id: "8.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "8.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "8.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "8.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "8.5",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
];

// Latest News
export const latestNews = [
  {
    id: 1,
    title: "Mahindra & Mahindra sells 36,205 SUVs in July 2023",
    desc: "Mahindra & Mahindra, the popular Indian car manufacturing brand...",
    date: "21 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
  {
    id: 2,
    title: "Mahindra Sales in July hits highest mark as per TOI Survey",
    desc: "Mahindra & Mahindra is popularly known for their rugged luxury...",
    date: "21 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
  {
    id: 3,
    title: "Mahindra Scorpio Sales Rise By Over 2-Folds",
    desc: "Greeting and welcoming the custom Mahindra & Mahindra...",
    date: "20 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
  {
    id: 4,
    title: "Mahindra & Mahindra July auto sales up 18% YoY on Sales",
    desc: "Mahindra & Mahindra, the popular Indian car manufacturing brand...",
    date: "19 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
  {
    id: 5,
    title: "Mahindra & Mahindra July auto sales up 18% YoY on Sales",
    desc: "Mahindra & Mahindra, the popular Indian car manufacturing brand...",
    date: "19 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
  {
    id: 6,
    title: "Mahindra & Mahindra sells 36,205 SUVs in July 2023",
    desc: "Mahindra & Mahindra, the popular Indian car manufacturing brand...",
    date: "21 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
  {
    id: 7,
    title: "Mahindra Sales in July hits highest mark as per TOI Survey",
    desc: "Mahindra & Mahindra is popularly known for their rugged luxury...",
    date: "21 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
];

export const todayBirthday = [
  {
    id: 1,
    username: "Vimal Kumar Bhati",
    date: "21, July 2023 Wednesday",
    userImg: AVATAR,
  },
  {
    id: 2,
    username: "Aman Yadav",
    date: "21, July 2023 Wednesday",
    userImg: "",
  },
];

export const upcomingBirthday = [
  {
    id: 1,
    username: "Arvind Kumar Singh",
    date: "22, July 2023 Wednesday",
    userImg: "",
  },
  {
    id: 2,
    username: "Shreya Yadav",
    date: "22, July 2023 Wednesday",
    userImg: AVATAR2,
  },
  {
    id: 3,
    username: "Rubina Sharma",
    date: "22, July 2023 Wednesday",
    userImg: "",
  },
  {
    id: 4,
    username: "Shally Gupta",
    date: "22, July 2023 Wednesday",
    userImg: "",
  },

  {
    id: 5,
    username: "Arvind Kumar Singh",
    date: "22, July 2023 Wednesday",
    userImg: "",
  },
  {
    id: 6,
    username: "Shreya Yadav",
    date: "22, July 2023 Wednesday",
    userImg: AVATAR2,
  },
  {
    id: 7,
    username: "Rubina Sharma",
    date: "22, July 2023 Wednesday",
    userImg: "",
  },
  {
    id: 8,
    username: "Shally Gupta",
    date: "22, July 2023 Wednesday",
    userImg: "",
  },
];

// Graphs
export const retailBarGraphs = [
  {
    key: 1,
    count: 130,
    name: "scorio-N",
    bgColor: "#264554",
  },
  {
    key: 2,
    count: 100,
    name: "XUV700",
    bgColor: "#299F91",
  },
  {
    key: 3,
    count: 60,
    name: "Thar",
    bgColor: "#EAC566",
  },
  {
    key: 4,
    count: 140,
    name: "XUV300",
    bgColor: "#F1A367",
  },
  {
    key: 5,
    count: 180,
    name: "marazzo",
    bgColor: "#E96E4F",
  },
  {
    key: 6,
    count: 120,
    name: "bolero neo",
    bgColor: "#5F6E37",
  },
  {
    key: 7,
    count: 90,
    name: "bolero",
    bgColor: "#283612",
  },
  {
    key: 8,
    count: 190,
    name: "scorpio classic",
    bgColor: "#BE6E24",
  },
];

export const billingBarGraphs = [
  {
    key: 1,
    count: 130,
    name: "scorio-N",
    bgColor: "#264653",
  },
  {
    key: 2,
    count: 100,
    name: "XUV700",
    bgColor: "#2A9D8F",
  },
  {
    key: 3,
    count: 60,
    name: "Thar",
    bgColor: "#E9C46A",
  },
  {
    key: 4,
    count: 140,
    name: "XUV300",
    bgColor: "#F4A261",
  },
  {
    key: 5,
    count: 180,
    name: "marazzo",
    bgColor: "#E76F51",
  },
  {
    key: 6,
    count: 120,
    name: "bolero neo",
    bgColor: "#606C38",
  },
  {
    key: 7,
    count: 90,
    name: "bolero",
    bgColor: "#283612",
  },
  {
    key: 8,
    count: 190,
    name: "scorpio classic",
    bgColor: "#BC6C25",
  },
];

// Admin => Customer Master Table

export const tableHead = [
  {
    key: "1",
    label: "#",
  },
  {
    key: "2",
    label: "Customer ID",
  },
  {
    key: "3",
    label: "Customer Name ",
  },
  {
    key: "4",
    label: "Customer Type",
  },
  {
    key: "5",
    label: "Mobile No.",
  },
  {
    key: "6",
    label: "Email Address",
  },
  {
    key: "7",
    label: "Membership Type",
  },
  {
    key: "8",
    label: "Action",
  },
];

export const customerMasterData = [
  {
    id: 1,
    name: "Individual",
    data: [
      {
        key: "1.1",
        one: "9817435",
        two: "Ankit Lad",
        three: "Individual",
        four: "9664321226",
        five: "ankitlad@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.2",
        one: "7293456",
        two: "Sandip Lad",
        three: "Individual",
        four: "9348583593",
        five: "sandiplad@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.3",
        one: "9823487",
        two: "John Doe",
        three: "Individual",
        four: "9873459873",
        five: "johndoe@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.4",
        one: "9823749",
        two: "John Warner",
        three: "Individual",
        four: "9732642374",
        five: "johnwarner@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.5",
        one: "8923462",
        two: "John Doe",
        three: "Individual",
        four: "9637248423",
        five: "johndoe@mahindra.com",
        six: "Silver",
      },
      {
        key: "1.6",
        one: "2763489",
        two: "Paul John",
        three: "Individual",
        four: "7623842378",
        five: "pauljohn@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.7",
        one: "0238038",
        two: "John Doe",
        three: "Individual",
        four: "9873459873",
        five: "johnbloom@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.8",
        one: "0233726",
        two: "John Warner",
        three: "Individual",
        four: "9723823623",
        five: "johnwarner@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.9",
        one: "2368237",
        two: "John Doe",
        three: "Individual",
        four: "8682347234",
        five: "johndoe@mahindra.com",
        six: "Silver",
      },
      {
        key: "1.10",
        one: "8923461",
        two: "John Bloom",
        three: "Individual",
        four: "9682348329",
        five: "johndoe@mahindra.com",
        six: "Golden",
      },
    ],
  },
  {
    id: 2,
    name: "Firm/Corporate",
    data: [
      {
        key: "1.1",
        one: "9817239",
        two: "Nilesh Rathod",
        three: "Individual",
        four: "9664321226",
        five: "rathodnilesh@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.2",
        one: "7293487",
        two: "John micheal",
        three: "Individual",
        four: "9348583593",
        five: "johnmicheal@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.3",
        one: "9823487",
        two: "John Warner",
        three: "Individual",
        four: "9873459873",
        five: "johnwarner@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.4",
        one: "9823749",
        two: "John Doe",
        three: "Individual",
        four: "9732642374",
        five: "johndoe@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.5",
        one: "8923462",
        two: "John Doe",
        three: "Individual",
        four: "9637248423",
        five: "johndoe@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.6",
        one: "2763489",
        two: "Paul John",
        three: "Individual",
        four: "7623842378",
        five: "pauljohn@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.7",
        one: "0238038",
        two: "John Warner",
        three: "Individual",
        four: "9873459873",
        five: "johnwarner@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.8",
        one: "0233726",
        two: "John Bloom",
        three: "Individual",
        four: "9723823623",
        five: "johnbloom@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.9",
        one: "2368237",
        two: "John Doe",
        three: "Individual",
        four: "8682347234",
        five: "johndoe@mahindra.com",
        six: "Golden",
      },
      {
        key: "1.10",
        one: "8923461",
        two: "John Doe",
        three: "Individual",
        four: "9682348329",
        five: "johndoe@mahindra.com",
        six: "Golden",
      },
    ],
  },
];
