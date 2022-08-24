function Logo({ width = "550" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      fill="none"
      viewBox={`0 0 550 550`}
    >
      <path
        fill="#F2697B"
        d="M45.75 114.582c16.087 0 21.743-3.487 29.117-3.487l8.546 53.306c-6.703 0-20.025-4.484-32.636-2.491-10.558 0-18.14 15.444-41.267 15.444 0-22.917 23.126-34.375 23.126-34.375S-6.579 121.059.963 99.637c9.05 2.989 24.677 14.945 44.786 14.945z"
      ></path>
      <ellipse
        cx="173.949"
        cy="123.55"
        fill="#FEDD50"
        rx="124.68"
        ry="123.55"
      ></ellipse>
      <ellipse
        cx="123.675"
        cy="83.695"
        fill="#B97642"
        rx="16.088"
        ry="15.942"
      ></ellipse>
      <path
        fill="#FEDD50"
        d="M48.281 374.568c1.523-111.195 77.432-170.379 112.815-182.834 52.933-6.775 128.524 68.251 215.159 85.688C470.03 296.295 550 237.567 550 250.52c0 240.26-205.638 301.899-279.42 299.408-73.782-2.491-224.203-36.367-222.299-175.36z"
      ></path>
      <path
        fill="#F1B94C"
        d="M171.085 352.314c.768-47.327 54.742-69.746 73.783-63.269 19.04 6.476 70.45 51.935 99.011 56.793 56.405 9.594 82.35 16.44 120.431-4.982-12.376 107.608-111.79 127.27-156.17 126.004-44.38-1.266-138.2-43.892-137.055-114.546z"
      ></path>
      <path
        fill="#FFEB97"
        d="M86.56 400.584c-4.95-35.869 6.769-76.293 17.615-74.727 14.756 3.985-4.945 36.979 7.616 79.709 17.135 49.32 34.749 49.818 25.704 61.277-22.372 3.487-41.89-28.397-50.934-66.259z"
      ></path>
    </svg>
  );
}

export default Logo;
