import Vue from "vue";
import VueI18n from "vue-i18n";
import locales from "./locales";

Vue.use(VueI18n);

const translations = new VueI18n({
  locale: "it",
  messages: locales
});

export default translations;
