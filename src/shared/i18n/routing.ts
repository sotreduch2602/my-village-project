import { defineRouting } from "next-intl/routing";
import { LANGUAGE, LANGUAGES } from "../constants";
import { RouteKey } from "../enums/routes.enum";

export const routing = defineRouting({
  locales: LANGUAGES,
  defaultLocale: LANGUAGE.VI,
  localePrefix: "as-needed",
  pathnames: {
    [RouteKey.WELCOME]: {
      vi: "/chao-mung",
      en: "/welcome",
    },
    [RouteKey.HOME]: {
      [LANGUAGE.VI]: "/trang-chu",
      [LANGUAGE.EN]: "/home",
    },
    [RouteKey.OUR_BRANDS]: {
      vi: "/thuong-hieu-cua-chung-toi",
      en: "/our-brands",
    },
    [RouteKey.SAN_FU_LOU]: {
      vi: "/thuong-hieu-cua-chung-toi/san-fu-lou",
      en: "/our-brands/san-fu-lou",
    },
    [RouteKey.SORAE]: {
      vi: "/thuong-hieu-cua-chung-toi/sorae",
      en: "/our-brands/sorae",
    },
    [RouteKey.SENS]: {
      vi: "/thuong-hieu-cua-chung-toi/sens",
      en: "/our-brands/sens",
    },
    [RouteKey.DI_MAI]: {
      vi: "/thuong-hieu-cua-chung-toi/di-mai",
      en: "/our-brands/di-mai",
    },
    [RouteKey.DELIVERY]: {
      vi: "/giao-hang",
      en: "/delivery",
    },
    [RouteKey.NEWS]: {
      vi: "/tin-tuc",
      en: "/news",
    },
    [RouteKey.COOPERATION]: {
      vi: "/hop-tac",
      en: "/cooperation",
    },
    [RouteKey.CONTACT_US]: {
      vi: "/lien-he",
      en: "/contact-us",
    },
    [RouteKey.MEMBERSHIP]: {
      vi: "/thanh-vien",
      en: "/membership",
    },
    [RouteKey.CAREERS]: {
      vi: "/tuyen-dung",
      en: "/careers",
    },
    [RouteKey.E_INVOICE]: {
      vi: "/hoa-don-dien-tu",
      en: "/e-invoice",
    },
    [RouteKey.RESERVATION]: {
      vi: "/dat-ban",
      en: "/reservation",
    },
    [RouteKey.LOGIN]: {
      vi: "/dang-nhap",
      en: "/login",
    },
    [RouteKey.REGISTER]: {
      vi: "/dang-ky",
      en: "/register",
    },
    [RouteKey.POLICY_OPERATING]: {
      vi: "/chinh-sach/hoat-dong",
      en: "/policy/operating",
    },
    [RouteKey.POLICY_SHIPPING]: {
      vi: "/chinh-sach/van-chuyen",
      en: "/policy/shipping",
    },
    [RouteKey.POLICY_PAYMENT]: {
      vi: "/chinh-sach/thanh-toan",
      en: "/policy/payment",
    },
    [RouteKey.POLICY_RETURN]: {
      vi: "/chinh-sach/doi-tra",
      en: "/policy/return",
    },
    [RouteKey.PROMOTION]: {
      vi: "/khuyen-mai",
      en: "/promotion",
    },
  },
});
