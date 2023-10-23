// types/jquery.d.ts

import 'slick-carousel';

declare module 'jquery' {
  interface JQuery {
    slick(options?: any): JQuery;
  }
}
