import { InjectionToken } from '@angular/core';

export const SECTION_ACTIVATED_TYPE = new InjectionToken<string>('SECTION_ACTIVATED_TYPE');

export const SECTION_ACTIVATED_TYPE_PROVIDER = {
  provide: SECTION_ACTIVATED_TYPE,
  useValue: { sectionType: undefined },
};
