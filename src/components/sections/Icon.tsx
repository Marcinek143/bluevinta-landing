export type IconName =
  | "clock"
  | "gavel"
  | "eye-off"
  | "globe"
  | "truck"
  | "ship"
  | "shield"
  | "users"
  | "check"
  | "flag"
  | "cart"
  | "factory"
  | "plane"
  | "map"
  | "phone"
  | "mail"
  | "location"
  | "menu"
  | "close";

type IconProps = {
  name: IconName;
  className?: string;
};

const sharedProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Icon({ name, className }: IconProps) {
  switch (name) {
    case "clock":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5v4.5l3 1.5" />
        </svg>
      );
    case "gavel":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="m11 4 4 4-2 2-4-4z" />
          <path d="m8 7 4 4-2 2-4-4z" />
          <path d="M5 14.5 11.5 21" />
          <path d="M3 21h10" />
          <path d="m15 11 3 3" />
        </svg>
      );
    case "eye-off":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6" />
          <path d="M14.12 14.12a3 3 0 0 1-4.24-4.24" />
          <path d="m4 4 16 16" />
        </svg>
      );
    case "globe":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17" />
          <path d="M12 3.5c2.6 2.7 2.6 14.3 0 17" />
          <path d="M12 3.5c-2.6 2.7-2.6 14.3 0 17" />
        </svg>
      );
    case "truck":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="M3 7.5h9.5v8H3z" />
          <path d="M12.5 9h3.5l2 3v3.5h-5.5" />
          <circle cx="7" cy="17.5" r="1.5" />
          <circle cx="15.5" cy="17.5" r="1.5" />
          <path d="M3 17.5h1.5" />
        </svg>
      );
    case "ship":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 4.5 16 6v4H8V6z" />
          <path d="M5 12.5 12 10l7 2.5v2.5" />
          <path d="M5 15.5 7 20h10l2-4.5" />
          <path d="M7 19.5s2 .75 5 .75 5-.75 5-.75" />
        </svg>
      );
    case "shield":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 3 5 6v6c0 3.5 2.8 7 7 8.5 4.2-1.5 7-5 7-8.5V6z" />
        </svg>
      );
    case "users":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="3" />
          <path d="M4.5 19c.4-2.6 2.9-4.5 5.5-4.5s5.1 1.9 5.5 4.5" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M14.5 14c2.6 0 4.7 1.6 5 4" />
        </svg>
      );
    case "check":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="m5 12.5 4 4L19 7.5" />
        </svg>
      );
    case "flag":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="M5 4v16" />
          <path d="M5 5.5h10L13.5 10 15 14.5H5" />
        </svg>
      );
    case "cart":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <circle cx="9" cy="19" r="1.5" />
          <circle cx="17" cy="19" r="1.5" />
          <path d="M4 5h2l1.2 9h11l1-6H6.2" />
        </svg>
      );
    case "factory":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="M4 20V9l4-2v4l4-2v4l4-2v9z" />
          <path d="M4 20h16" />
          <path d="M8 11.5v-4" />
          <path d="M12 13.5v-4" />
          <path d="M16 15.5v-4" />
        </svg>
      );
    case "plane":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="M3 11.5 21 4l-6 16-4.5-6L7 16z" />
          <path d="m10.5 14.5 10.5-10.5" />
        </svg>
      );
    case "map":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="m9 4 6 3 6-3v13l-6 3-6-3-6 3V7z" />
          <path d="M9 4v13" />
          <path d="M15 7v13" />
        </svg>
      );
    case "phone":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="M8 3h8a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 8 3Z" />
          <path d="M10 5.5h4" />
          <path d="M10 18.5h4" />
        </svg>
      );
    case "mail":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="m5 8 7 5 7-5" />
        </svg>
      );
    case "location":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "menu":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg
          {...sharedProps}
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
        >
          <path d="M6 6l12 12" />
          <path d="M18 6l-12 12" />
        </svg>
      );
    default:
      return null;
  }
}
