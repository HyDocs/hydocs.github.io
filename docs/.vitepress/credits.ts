interface Contributor {
  name: string;
  avatar: string;
  // Optional.
  site?: string;
}

export interface Contributors {
  core: Contributor[];
  contributors: Contributor[];
  special: Contributor[];
}

export const contribs = {
  core: [
    {
      name: "as280093",
      avatar: "https://github.com/as280093.png",
      site: "https://github.com/as280093",
    },
    {
      name: "Stying",
      avatar: "https://github.com/StyingDev.png",
      site: "https://github.com/StyingDev",
    },
  ],
  contributors: [
    // {
    //   name: "SAMPLE",
    //   avatar: "https://github.com/sample.png",
    //   site: "https://github.com/Sample",
    // },
  ],
  special: [
    // {
    //   name: "SAMPLE",
    //   avatar: "https://github.com/sample.png",
    //   site: "https://github.com/Sample",
    // },
  ],
} satisfies Contributors;
