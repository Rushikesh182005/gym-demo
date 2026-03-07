import Link from "next/link";

function baseClasses(variant) {
  const common =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-iron-500 focus-visible:ring-offset-iron-900";

  if (variant === "ghost") {
    return (
      common +
      " bg-transparent border border-white/20 text-white hover:bg-white/10"
    );
  }

  // primary
  return (
    common +
    " bg-iron-500 text-white shadow-glow-red hover:bg-[#ff6b56]"
  );
}

export default function Button(props) {
  const {
    variant = "primary",
    className = "",
    href,
    children,
    ...rest
  } = props;

  const classes = baseClasses(variant) + (className ? " " + className : "");

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}


