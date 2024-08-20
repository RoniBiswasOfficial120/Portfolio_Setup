const colors = {
  purple: "#5C2EA5",
  lightPurple: "#E4D8F3",
  gray: "#666666",
  black: "#000000",
  white: "#FFFFFF",
  darkWhite: "#faebd7",
};

export const StyleConstants = {
  theme: {
    dark: {
      backgroundColor: colors.purple,
      textColor: colors.white,
      hoverTextColor: colors.gray,
      borderColor: colors.white,
      iconColor: colors.white,
    },
    light: {
      backgroundColor: colors.lightPurple,
      textColor: colors.black,
      hoverTextColor: colors.gray,
      borderColor: colors.black,
      iconColor: colors.black,
    },
    black: {
      backgroundColor: colors.black,
      textColor: colors.white,
      hoverTextColor: colors.gray,
      borderColor: colors.white,
      iconColor: colors.white,
    },
    white: {
      backgroundColor: colors.darkWhite,
      textColor: colors.black,
      hoverTextColor: colors.gray,
      borderColor: colors.black,
      iconColor: colors.black,
    },
    transparent: {
      backgroundColor: "transparent",
      textColor: colors.black,
      hoverTextColor: colors.gray,
      borderColor: colors.black,
      iconColor: colors.black,
    },
  },
  space: {
    5: "5px",
    10: "10px",
    15: "15px",
    20: "20px",
    25: "25px",
    paddingLeftRight: "7.5%",
  },
  text: {
    fontWeight: {
      header: "600",
    },
    fontSize: {
      mobile: {
        profileName: "32px",
        profileTitle: "16px",
        headerName: "16px",
        headerTabs: "12px",
        // subheaderFontSize: "14px",
        // labelFontSize: "10px",
        // paraFontSize: "10px",
      },
      tab: {
        profileName: "42px",
        profileTitle: "22px",
        headerName: "22px",
        headerTabs: "14px",
        // subheaderFontSize: "16px",
        // labelFontSize: "11px",
        // paraFontSize: "11px",
      },
      web: {
        profileName: "60px",
        profileTitle: "24px",
        headerName: "24px",
        headerTabs: "16px",
        // subheaderFontSize: "18px",
        // labelFontSize: "12px",
        // paraFontSize: "12px",
      },
    },
    fontFamily: {
      poppins: "Poppins",
      kaushan: "Kaushan Script",
      kalam: "Kalam",
    },
  },
  shadow: "0px 15px 13px -10px #5c2ea5",
};
