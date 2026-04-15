/** One block in Position Fit: job asks X, you answer Y */
export type PositionSection = {
  reqTitle: string;
  requirements: string[];
  responses: string[];
  /** maps to bonus styling in the UI */
  isBonus?: boolean;
};

export type Profile = {
  id: string;
  /** shown in loading / errors; optional future use */
  label: string;
  /**
   * Public URL for this profile’s desktop wallpaper, e.g. `/profiles/acme/wallpaper.jpg`
   * (file lives under `public/`). Omit to use the bundled macOS wallpaper.
   */
  desktopBackgroundUrl?: string;
  linkedinUrl: string;
  about: {
    introLine: string;
    beforeLink: string;
    jobLink: { href: string; label: string };
    afterLink: string;
  };
  contact: {
    email: string;
    phoneDisplay: string;
    phoneHref: string;
  };
  position: {
    intro: string;
    sections: PositionSection[];
    closing: string;
  };
};
