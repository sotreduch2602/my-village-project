import { defineRouting } from "next-intl/routing";
import { LANGUAGE, LANGUAGES } from "../constants";
import { RouteKey } from "../enums/routes.enum";

export const routing = defineRouting({
  locales: LANGUAGES,
  defaultLocale: LANGUAGE.VI,
  localePrefix: "as-needed",
  pathnames: {
    [RouteKey.WELCOME]: {
      [LANGUAGE.VI]: "/chao-mung",
      [LANGUAGE.EN]: "/welcome",
    },
    [RouteKey.HOME]: {
      [LANGUAGE.VI]: "/trang-chu",
      [LANGUAGE.EN]: "/home",
    },
    [RouteKey.OUR_BRANDS]: {
      [LANGUAGE.VI]: "/thuong-hieu-cua-chung-toi",
      [LANGUAGE.EN]: "/our-brands",
    },
    [RouteKey.SAN_FU_LOU]: {
      [LANGUAGE.VI]: "/thuong-hieu-cua-chung-toi/san-fu-lou",
      [LANGUAGE.EN]: "/our-brands/san-fu-lou",
    },
    [RouteKey.SORAE]: {
      [LANGUAGE.VI]: "/thuong-hieu-cua-chung-toi/sorae",
      [LANGUAGE.EN]: "/our-brands/sorae",
    },
    [RouteKey.SENS]: {
      [LANGUAGE.VI]: "/thuong-hieu-cua-chung-toi/sens",
      [LANGUAGE.EN]: "/our-brands/sens",
    },
    [RouteKey.DI_MAI]: {
      [LANGUAGE.VI]: "/thuong-hieu-cua-chung-toi/di-mai",
      [LANGUAGE.EN]: "/our-brands/di-mai",
    },
    [RouteKey.DELIVERY]: {
      [LANGUAGE.VI]: "/giao-hang",
      [LANGUAGE.EN]: "/delivery",
    },
    [RouteKey.NEWS]: {
      [LANGUAGE.VI]: "/tin-tuc",
      [LANGUAGE.EN]: "/news",
    },
    [RouteKey.COOPERATION]: {
      [LANGUAGE.VI]: "/hop-tac",
      [LANGUAGE.EN]: "/cooperation",
    },
    [RouteKey.CONTACT_US]: {
      [LANGUAGE.VI]: "/lien-he",
      [LANGUAGE.EN]: "/contact-us",
    },
    [RouteKey.MEMBERSHIP]: {
      [LANGUAGE.VI]: "/thanh-vien",
      [LANGUAGE.EN]: "/membership",
    },
    [RouteKey.CAREERS]: {
      [LANGUAGE.VI]: "/tuyen-dung",
      [LANGUAGE.EN]: "/careers",
    },
    [RouteKey.E_INVOICE]: {
      [LANGUAGE.VI]: "/hoa-don-dien-tu",
      [LANGUAGE.EN]: "/e-invoice",
    },
    [RouteKey.RESERVATION]: {
      [LANGUAGE.VI]: "/dat-ban",
      [LANGUAGE.EN]: "/reservation",
    },
    [RouteKey.LOGIN]: {
      [LANGUAGE.VI]: "/dang-nhap",
      [LANGUAGE.EN]: "/login",
    },
    [RouteKey.REGISTER]: {
      [LANGUAGE.VI]: "/dang-ky",
      [LANGUAGE.EN]: "/register",
    },
    [RouteKey.POLICY_OPERATING]: {
      [LANGUAGE.VI]: "/chinh-sach/hoat-dong",
      [LANGUAGE.EN]: "/policy/operating",
    },
    [RouteKey.POLICY_SHIPPING]: {
      [LANGUAGE.VI]: "/chinh-sach/van-chuyen",
      [LANGUAGE.EN]: "/policy/shipping",
    },
    [RouteKey.POLICY_PAYMENT]: {
      [LANGUAGE.VI]: "/chinh-sach/thanh-toan",
      [LANGUAGE.EN]: "/policy/payment",
    },
    [RouteKey.POLICY_RETURN]: {
      [LANGUAGE.VI]: "/chinh-sach/doi-tra",
      [LANGUAGE.EN]: "/policy/return",
    },
    [RouteKey.PROMOTION]: {
      [LANGUAGE.VI]: "/khuyen-mai",
      [LANGUAGE.EN]: "/promotion",
    },
  },
});
